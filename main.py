import cv2  
from deepface import DeepFace
from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
import os
import numpy as np
import keras
import keras.utils as image 
from face_verify import face
import pytesseract
import matplotlib.pyplot as plt
import pandas as pd
from PIL import Image
import re
import string
UPLOAD_FOLDER = os.getcwd()+'/static/submitted'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/', methods=['POST', 'GET'])
def home():
    if request.method == 'POST':
        # Getting image and checking for method
        img = request.files['image']
        if img:
            img_loc = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(img.filename))
            img.save(img_loc)
            # test_image = image.load_img(img_loc, target_size=(64, 64))
            # test_image = image.img_to_array(test_image)
            # test_image = np.expand_dims(test_image, axis=0) 
            print(secure_filename(img.filename))
            test_image = './static/submitted/' + secure_filename(img.filename)
            x = face(test_image)
            img = cv2.imread(r'C:\Users\ARYAN\Desktop\loc\models\front.jpg')
            crop_img = img[100:250,250:550] #enter image here
            gray = cv2.cvtColor(crop_img, cv2.COLOR_BGR2GRAY)
            th, threshed = cv2.threshold(gray, 127,255, cv2.THRESH_BINARY)
            text2 = pytesseract.image_to_string(threshed)
            text2 = re.sub(r'[^\w\s]', '', text2)
            list1 = text2.split()
            fname = list1[0]
            mname = list1[1]
            lname = list1[2]
            bdate = list1[(list1.index("BirthDOB") + 1)]
            gender = list1[(list1.index("BirthDOB") + 2)]
            bday = bdate[:2] + '/' + bdate[2:4]+ '/' + bdate[4:]
            query = {
                'prediction': x,
                'name': fname,
                'mname':mname,
                'lname':lname,
                'bdate':bday,
                'gender':gender
            }

        return jsonify(query)
 
if __name__ == '__main__':
    app.run(debug=True)