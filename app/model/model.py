import tensorflow as tf
from pathlib import Path
import cv2
import numpy as np
import requests
image_size = 224


BASE_DIR = Path(__file__).resolve(strict=True).parent

model = tf.keras.models.load_model(f"{BASE_DIR}/my_model_directory")

def predict_pipeline(image_url):
    response = requests.get(image_url)
    response.raise_for_status()  # Raise an error for bad responses

    # Convert the content to a NumPy array
    image_np_arr = np.frombuffer(response.content, dtype=np.uint8)

    # Decode the image from the NumPy array
    image = cv2.imdecode(image_np_arr, cv2.IMREAD_COLOR)

    # Now, you can use the 'image' with OpenCV functions
    image = cv2.resize(image,(image_size,image_size))
    image = np.array(image).reshape(-1,image_size,image_size,3)
    pred = model.predict(image)
    prediction_result = float(pred[0][0])
    return prediction_result
