from geoip import GeoIP

import requests, json

class Geo():

	def __init__(self, email, key):
		self.email = email
		self.key = key
		self.headers = {
			'Email' : self.email,
			'Key' : self.key,
			'Content-type': 'application/json'
		}

	def ip(self, IP):
		url = 'https://api.surfy.one/geo/ip/' + IP
		result = requests.post(url, headers = self.headers)
		return result.json()

	def reverse(self, coords):
		url = 'https://api.surfy.one/geo/reverse'
		data = {
			'lat': coords[0],
			'lng': coords[1]
		}
		result = requests.post(url, json=data, headers = self.headers)
		return result.json()