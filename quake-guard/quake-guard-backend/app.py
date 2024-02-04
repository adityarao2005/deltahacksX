# Machine learning dependencies
import pandas as pd
# google maps dependencies
import googlemaps
import datetime
import time
import math
# flask dependencies
from flask import Flask, jsonify, request, json, render_template
from flask_cors import CORS
import pickle
# plot the values for data visualization
#----------------------------------------
from mpl_toolkits.basemap import Basemap
import matplotlib.pyplot as plt
from io import BytesIO
import base64

print("Starting Quake Guard Backend")

print("Read CSV")
# save filepath to variable for easier access
quake_data_file = 'final_data.csv'
# read the data and store data in DataFrame titled melbourne_data
quake_data = pd.read_csv(quake_data_file)

# creates the ml model
quake_model = pickle.load('randomforest_regressor.pkl', 'rb')
print("Created ML Model")
# TODO: REMEMBER TO ADD KEY HERE & REMEMBER TO ENABLE Geocoding and Distance Matrix APIs
gmaps = googlemaps.Client(key='AIzaSyC2KHwoCKJqDDMdgOs00giJA-CiT05rbYs')

print("Connect to Google Maps API")

# get the lat and long from the address
def get_lat_long(location):
	# Geocoding an address
	if (location == ''):
		return "{error: 'No address provided'}", 400

	# get the lat and long
	geocode_result = gmaps.geocode(location)
	# returns a dictornary with the lat and long as fields
	return geocode_result[0]['geometry']['location']

def matplot_data(final_data):
	m = Basemap(projection='mill',llcrnrlat=-80,urcrnrlat=80, llcrnrlon=-180,urcrnrlon=180,lat_ts=20,resolution='c')

	longitudes = final_data["longitude"].tolist()
	latitudes = final_data["latitude"].tolist()
	#m = Basemap(width=12000000,height=9000000,projection='lcc', resolution=None,lat_1=80.,lat_2=55,lat_0=80,lon_0=-107.)
	x,y = m(longitudes,latitudes)
	fig = plt.figure(figsize=(12,10))
	plt.title("All affected areas")
	m.plot(x, y, "o", markersize = 2, color = 'blue')
	m.drawcoastlines()
	m.fillcontinents(color='coral',lake_color='aqua')
	m.drawmapboundary()
	m.drawcountries()
	figdata = BytesIO()
	fig.savefig(figdata, format='png')
	return figdata


# Create flask app
app = Flask(__name__)
CORS(app)

print("Created Flask App")

# create api route
@app.route("/api/predict_place", methods=['POST'])
def api_predict_place():
	print("API Request Received")
	# get the data from the POST request.
	data = request.get_json()
	location = data["location"]
	extended = data["span"]

	# span should be in terms of days
	span = 0
	if (extended == "1 week"):
		span = 7
	if (extended == "2 weeks"):
		span = 7
	elif (extended == "1 month"):
		span = 30
	elif (extended == "2 months"):
		span = 60
	elif (extended == "1 year"):
		span = 365
	# get the lat and long
	lat_long = get_lat_long(location)
	timestamps = []
	lat_long_ml_input = []
	_time = datetime.datetime.now()
	for i in range(1, span + 1):
		# get the lat and long for the next 7 days
		new_time = _time + datetime.timedelta(days=i)
		timestamp = time.mktime(new_time.timetuple())
		timestamps.append(timestamp)
		lat_long_ml_input.append([lat_long['lat'], lat_long['lng'], timestamp])

	# get predicted next earthquake magnitude
	prediction = quake_model.predict(lat_long_ml_input)
	
	recv_data = {}
	print(prediction)
	# return the data
	recv_data['predicted_magnitudes'] = prediction[:, 0].tolist()
	recv_data['predicted_depths'] = prediction[:, 1].tolist()
	recv_data['timestamps'] = timestamps
	recv_data['lng'] = lat_long['lng']
	recv_data['lat'] = lat_long['lat']
	# return json data
	return jsonify(recv_data)

@app.route("/api/generate_map", methods=['POST'])
def api_generate_map():
	data = request.get_json()
	mag = int(data["mag"])
	year = int(data["year"])

	new_data = quake_data[quake_data['mag'] > int(mag)]
	final_data = new_data[new_data['timestamp'] > time.mktime(datetime.datetime.strptime(str(year), "%Y").timetuple())]
	figdata = matplot_data(final_data)

	# Convert BytesIO to base64 string
	figdata_base64 = base64.b64encode(figdata.getvalue()).decode('utf-8')
	return jsonify({'fig': figdata_base64})




# run the app
if __name__ == "__main__":
	print("Starting Flask Server")
	app.run(port=8000)
	print("Flask Server Running")