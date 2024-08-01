# Pantry Tracker Using React and Gemini Vision Pro

## How to Install

### Pre-requisite
1. Clone this repo
2. Create an API to use Gemini at [Google AI Studio](https://aistudio.google.com/app/apikey)
3. Ensure you have Python, pip, node installed on your machine

### Backend

1. In your root folder, run `cd Backend`
2. Create a virtual environment and activate it
3. Create an `.env` file (see the `env-template.txt` file) and add your `GOOGLE_API_KEY`
3. Install dependencies running `pip install -r requirements.txt`
4. Finally run the server using `uvicorn main:app --host 0.0.0.0 --port 8000`
At http://0.0.0.0/8000 you'll see the server running

### Frontend

1. Deactivate the virtual environment.
2. Go back to root folder running `cd ..`
3. Enter `Frontend` folder running `cd Frontend`
4. Run `npm install` and it will create the folder `node_modules` and the file `package-lock.json`
5. Finally, run `npm run dev`
You'll see the app running at http://localhost:5173 

## How to Use
On your React App, add product, e.g, Phone and click on `+Add Product`. You'll see the product added to the Pantry Inventory. The quanitity will be 0. Now click on `Open Camera` and it will open your machine's camera. Bring a mobile phone in front of the camera and click on `Capture`. After a couple of seconds, you'll see the quantity of Mobile Phone to be 1 instead of 0. In this way, you can add as many product as you want and count it using this app.