import google.generativeai as genai
import PIL.Image
import os
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

genai.configure(api_key=os.environ["GOOGLE_API_KEY"])
img = PIL.Image.open('./image/image4.jpg')

products = "football, desklamp, book, jeans pants"

model = genai.GenerativeModel(model_name="gemini-1.5-flash")
