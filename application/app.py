# -*- coding: utf-8 -*-
"""
Created on Mon Jan 24 23:20:22 2022
"""
"""
@author: deepspraj
"""

from flask import Flask, render_template, request, redirect, url_for, jsonify
import pickle
import tensorflow as tf
from random import randint
from numpy import argmax
import os
import cv2 as cv

app = Flask(__name__, template_folder='template', static_folder='template/static')

model = tf.keras.models.load_model(os.path.join(os.path.dirname(os.path.realpath(__name__)), 'model.h5'))

# Class 0 : Cyst
# Class 1 : Normal
# Class 2 : Kidney Stone
# Class 3 : Tumor

classes = {
    0: 'Cyst',
    1: 'Normal',
    2: 'Kidney Stone',
    3: 'Tumor'
}

IMG_WIDTH = 512
IMG_HEIGHT = 512
CHANNELS = 3

@app.route("/")
def home():
    return render_template("base.html", image = '')


@app.route("/", methods = ['POST'])
def predict():
    data_dict = request.files.to_dict()
    if data_dict:
        image = data_dict['imageFile']
        image.save('./image.jpg')
        image = cv.imread('./image.jpg')
        if image.shape[0] >= 512 and image.shape[1] >= 512:
            resized_image = cv.resize(image, (IMG_HEIGHT, IMG_WIDTH), interpolation=cv.INTER_AREA)
            reshaped = resized_image.reshape((1, IMG_HEIGHT, IMG_WIDTH, CHANNELS))
            predictions = model.predict(reshaped)
            return jsonify({"class_name": classes[argmax(predictions)]})
        return jsonify({"class_name": "size_error"})
    return jsonify({"class_name": ''})



if __name__ == "__main__":
    app.run()