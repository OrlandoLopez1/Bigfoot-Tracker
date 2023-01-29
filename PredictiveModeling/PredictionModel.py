import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder

# Load data
df = pd.read_excel("data.xlsx")

# Split data into features and target
X = df[['Year', 'Month', 'County', 'Environment']]
y = df['State']

# One hot encode categorical variables
encoder = OneHotEncoder(handle_unknown='ignore')
X = encoder.fit_transform(X)

# Split data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and fit random forest model
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)

# Create a new sample for the year 2023
new_sample = pd.DataFrame({'Year':[2027], 'Month':['January'], 'County':['?'], 'Environment':['?']})
# One hot encode categorical variables
new_sample = encoder.transform(new_sample)

# Make a prediction on the probability of the new sample being in Florida
pred = rf.predict_proba(new_sample)
# Select the probability of the class 'Florida'
df = pd.read_excel("myballs.xlsx")
states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida",
          "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
          "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska",
          "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
          "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee",
          "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]

for state in states:

    pred_state = pred[0][rf.classes_ == state]
    if len(pred_state) == 0:
        df = df.append({'States': state, 'Probability': 0.0}, ignore_index=True)
        continue
    df = df.append({'States': state, 'Probability': pred_state[0]}, ignore_index=True)
# print(f"The probability of the animal being in {state} in 2023 is:", pred_state)
df.to_excel("my_balls.xlsx")
