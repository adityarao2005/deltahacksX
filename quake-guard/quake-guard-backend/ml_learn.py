# import statements
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# import the dataset
data = pd.read_csv('silver.csv')
# describe dataset
data.describe()