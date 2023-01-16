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

	'''
	
	Get location by IP

	'''

	def ip(self, IP):
		url = 'https://api.surfy.one/geo/ip/' + IP
		result = requests.post(url, headers = self.headers)
		return result.json()
	
	'''

	Get Timezone by coordinates

	'''

	def tz(self, coords):
		url = 'https://api.surfy.one/geo/timezone'
		data = {
			'lat': coords[0],
			'lng': coords[1]
		}
		
		try:
			result = requests.post(url, json=data, headers = self.headers)
			result = result.json()
		except:
			result = {'state': False}

	'''
	
	Reverse GeoCoding

	'''

	def reverse(self, coords):
		url = 'https://api.surfy.one/geo/reverse'
		data = {
			'lat': coords[0],
			'lng': coords[1]
		}
		
		try:
			result = requests.post(url, json=data, headers = self.headers)
			result = result.json()
		except:
			result = {'state': False}

		return result