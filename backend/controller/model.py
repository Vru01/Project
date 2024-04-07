import warnings
import sklearn
from sklearn.tree import DecisionTreeClassifier
import pickle
import pandas as pd

# Suppress the warning
warnings.filterwarnings("ignore", category=UserWarning)

# Load the model from a file

# Get input from the user as an array
input_data = input().split()  # Assuming inputs are separated by spaces

# Convert input data to a DataFrame
input_df = pd.DataFrame([input_data], columns=['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall'])

with open('best_model.pkl', 'rb') as f:
  model = pickle.load(f)
# Make a prediction
prediction = model.predict(input_df)
crop = ['rice', 'maize', 'chickpea', 'kidneybeans', 'pigeonpeas',
       'mothbeans', 'mungbean', 'blackgram', 'lentil', 'pomegranate',
       'banana', 'mango', 'grapes', 'watermelon', 'muskmelon', 'apple',
       'orange', 'papaya', 'coconut', 'cotton', 'jute', 'coffee']

# Print the prediction
print(crop[prediction[0]])
