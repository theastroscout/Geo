import requests

class GeoIP():

	def __init__(self, email, key):
		self.email = email
		self.key = key
		self.headers = { 'Email' : self.email, 'Key' : self.key }

	def get(self, IP):
		url = 'https://api.surfy.one/geo/ip/' + IP
		result = requests.post(url, headers = self.headers)
		return result.json()