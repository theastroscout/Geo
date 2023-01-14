import sys, json
sys.path.append(sys.path[0]+"/..")

print('\n>>> Initial python test...\n')

from py import Geo

credits = json.load(open('credits.json'))

# Initial Lib
geo = Geo(credits['email'], credits['key'])

# Geo IP Test
testIPs = ['8.8.8.8', '2a01:e35:8bd9:8bb0:92b:8628:5ca5:5f2b']

results = []
for IP in testIPs:
	result = geo.ip(IP)
	results.append(result)

print('Geo IP: ', json.dumps(result, indent='\t'))

coords = [51.505563,-0.023309]
result = geo.reverse(coords)
print('Reverse Geocoding: ', json.dumps(result, indent='\t'))
