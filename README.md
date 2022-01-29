# Tensorflow Image Classification

The objective of this study is to develop a deep learning model that will identify the kidney disease from images (X-ray). This type of problem comes under image classification where an instance can be classified into particular class among the predefined classes.

# Dataset

The complete description of dataset is given on https://www.kaggle.com/nazmul0087/ct-kidney-dataset-normal-cyst-tumor-and-stone.

The dataset contains 12446 kidney disease images of $4$ class.

Classes for classification are

1. Cyst
2. Normal
3. Kidney Stone
4. Tumor

# Tensorflow Model Architecture

![architecture]()

# Preprocessing

All 12446 images were divided into batches of 32 images which resulted in 389 batches.

389 batches were divided into three subsets of images i.e train set, validation set and testing set.

Train set contains 311 batches i.e 9952 images.

Validation set contains 39 batches i.e 1248 images.

Testing set contains 39 batches i.e 1248 images.

Resizing of images were taken care in Neural Network.

# Training

As this is image classification problem, the loss function used is crossentropy (log loss), activation function used are relu and softmax for hidden layers and output layer respectively.

# Result

Below table shows the results

| Epoch | Training Loss | Training Accuracy | Validation Loss | Validation Accuracy |
| ----- | ------------- | ----------------- | --------------- | ------------------- |
| 01    | 2.6460        | 0.4833            | 1.3251          | 0.4631              |
| 02    | 0.9286        | 0.7057            | 0.6111          | 0.8197              |
| 03    | 0.4798        | 0.8807            | 0.5200          | 0.8702              |
| 04    | 0.4087        | 0.9295            | 0.2589          | 0.9551              |
| 05    | 0.2457        | 0.9535            | 0.1476          | 0.9816              |

# Visualization

Live [Demo](https://kidney-disease-classification.herokuapp.com/) at Heroku.

## Running on local machine

Make sure you have [Python](https://www.python.org/) and the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed.

```sh

git clone https://github.com/deepspraj/kidney-disease-classification

cd kidney-disease-classification

pip install -r requirements.txt

python app.py

```

Your app now should be running on [http://localhost:5000](http://localhost:5000/).

<br>

## Deploying directly to Heroku

```

git add .

git commit -am "{any message related to changes}"

git push heroku master

heroku open

```

Alternatively, you can deploy your own copy of the app using this button:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)