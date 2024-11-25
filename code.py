import pandas as pd
from sklearn.impute import SimpleImputer

def sanitize_data(file_path):
    df = pd.read_csv(file_path)

    imputer = SimpleImputer(strategy='most_frequent')
    df[df.select_dtypes(exclude='number').columns] = imputer.fit_transform(df.select_dtypes(exclude='number'))

    imputer = SimpleImputer(strategy='mean')
    df[df.select_dtypes(include='number').columns] = imputer.fit_transform(df.select_dtypes(include='number'))

    return df

file_path = 'your_dataset.csv'

sanitized_df = sanitize_data(file_path)

sanitized_df.to_csv('sanitized_dataset.csv', index=False)

print(sanitized_df.head())
