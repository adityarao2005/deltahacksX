# Machine learning dependencies
import pandas as pd
from sklearn.tree import DecisionTreeRegressor
# google maps dependencies
import googlemaps
from datetime import datetime
import math
# flask dependencies
from flask import Flask, jsonify, request
from flask_restful import Resource, Api, reqparse, abort, marshal, fields

# TODO: Create the Cloud in the first place
### START CREATING ML MODEL
# save filepath to variable for easier access
quake_data_file = 'silver.csv'
# read the data and store data in DataFrame titled melbourne_data
quake_data = pd.read_csv(quake_data_file)

# Create ML MODEL
def create_model():
	# Set y value as magnitude
	y = quake_data.mag
	quake_data_features = ['latitude', 'longitude']
	X = quake_data[quake_data_features]
	# print description or statistics from X
	# Define model. Specify a number for random_state to ensure same results each run
	quake_model = DecisionTreeRegressor(random_state=1)
	# Fit model
	quake_model.fit(X, y)
	# FINISH CREATING ML MODEL

# creates the ml model
quake_model = create_model()
# TODO: REMEMBER TO ADD KEY HERE & REMEMBER TO ENABLE Geocoding and Distance Matrix APIs
gmaps = googlemaps.Client(key='AIzaSyC2KHwoCKJqDDMdgOs00giJA-CiT05rbYs')

# get the lat and long from the address
def get_lat_long(city, region, country):
	# Geocoding an address
	address = ''
	# get the address and validate
	if (city != ''):
		address += city
	if (region != ''):
		address += ", " + region
	if (country != ''):
		address += + ", " + country
	
	#validate address
	if (address == ''):
		return "{error: 'No address provided'}", 400

	# get the lat and long
	geocode_result = gmaps.geocode(address)
	# returns a dictornary with the lat and long as fields
	return geocode_result['result']['geometry']['location']

# iterate over all the rows and get these values: number of earthquakes, average magnitude, average depth, highest magnitude, lowest magnitude
def get_earthquake_stats(address_lat, address_lng, predicted_magnitude):
	# init num earthquakes
	num_earthquakes = 0
	# init average magnitude
	avg_magnitude = 0
	# init average depth
	avg_depth = 0
	# init highest magnitude
	highest_magnitude = 0
	# init lowest magnitude
	lowest_magnitude = 100000

	# iterate over all the rows
	for index, row in quake_data.iterrows():
		# get latitude and longitude 
		lat = row['latitude']
		lng = row['longitude']

		# get distance between the two points
		distance = gmaps.distance_matrix((lat, lng), (address_lat, address_lng))
		# if the distance is greater than 50km, skip
		if (distance['rows'][0]['elements'][0]['distance']['value'] > prediction_scales[predicted_magnitude]):
			continue

		# increment num earthquakes
		num_earthquakes += 1
		# add magnitude to avg magnitude
		avg_magnitude += row['mag']
		# add depth to avg depth
		avg_depth += row['depth']
		# check if highest magnitude
		if (row['mag'] > highest_magnitude):
			highest_magnitude = row['mag']
		# check if lowest magnitude
		if (row['mag'] < lowest_magnitude):
			lowest_magnitude = row['mag']
	
	data = {}
	if (num_earthquakes != 0):
		data['num_earthquakes'] = num_earthquakes
		data['avg_magnitude'] = avg_magnitude / num_earthquakes
		data['avg_depth'] = avg_depth / num_earthquakes
		data['highest_magnitude'] = highest_magnitude
		data['lowest_magnitude'] = lowest_magnitude
	else:
		data['num_earthquakes'] = 0
		data['avg_magnitude'] = 0
		data['avg_depth'] = 0
		data['highest_magnitude'] = 0
		data['lowest_magnitude'] = 0
	
	return data


# Create flask app
app = Flask(__name__)

prediction_scales = { 1: 1000, 2: 1000, 3: 1000, 4: 1000, 5: 3000, 6: 10000, 7: 30000, 8: 50000, 9: 100000 }

# create api route
@app.route("/api", methods=['POST'])
def api_microservice():
	# get the data from the POST request.
	data = request.get_json()
	city = data["city"]
	province = data["province"]
	country = data["country"]

	# get the lat and long
	lat_long = get_lat_long(city, province, country)
	lat_long_ml_input = [lat_long['lat'], lat_long['lng']]    

	# get predicted next earthquake magnitude
	quake_prediction = quake_model.predict(lat_long_ml_input)
	# get earthquake stats
	data = get_earthquake_stats(lat_long['lat'], lat_long['lng'], round(quake_prediction))

	# return the data
	data['predicted_magnitude'] = round(quake_prediction)
	data['lng'] = lat_long['lng']
	data['lat'] = lat_long['lat']
	# return json data
	return jsonify(data)

# run the app
if __name__ == "__main__":
	app.run(port=8000)