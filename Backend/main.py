from fastapi import FastAPI, File, UploadFile, Form
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
from io import BytesIO
from process import model

app = FastAPI()

origins = [
    "http://localhost:5173",  # React app
    "http://127.0.0.1:5173",  # React app
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/process_image/")
async def process_image(products: str = Form(...), file: UploadFile = File(...)):
    contents = await file.read()
    img = Image.open(BytesIO(contents))

    response = model.generate_content([f"If you see any of these: {products} in the photo, please return the name of the object. If you don't see any of these, return 'nothing'. If you are at least 70% sure about an object, only then return the name of the object.", img])
    
    return JSONResponse(content={"result": response.text})

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
