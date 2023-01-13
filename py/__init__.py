from geoip import GeoIP

import requests

class Geo():

	def __init__(self, email, key):
		self.email = email
		self.key = key
		self.headers = { 'Email' : self.email, 'Key' : self.key }

	def ip(self, IP):
		url = 'https://api.surfy.one/geo/ip/' + IP
		result = requests.post(url, headers = self.headers)
		return result.json()