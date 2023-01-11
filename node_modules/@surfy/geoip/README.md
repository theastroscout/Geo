# GEO IP
### Best Free Rest API for IP-based user location detection.

**97.5%** IPv4 and IPv6 address coverage in our database with daily updates. Median data retrieval from the DB is **0.002 seconds**.


More info and an absolutely free API Key: https://surfy.one/geoip

## Installation

```
npm install @surfy/geoip
```

## Usage

```js

import GeoIP from "@surfy/geoip";

const geoIP = new GeoIP({
	email: "email@example.com",
	key: "YOUR_FREE_API_KEY" // Get a key > https://surfy.one/geoip
});

let testIPs = ["8.8.8.8", "2a01:e35:8bd9:8bb0:92b:8628:5ca5:5f2b"];

let results = [];
for(let IP of testIPs){
	let result = await geoIP.get(IP);
	result.push(result);
}

console.log(result);

/*

Result Object [
	{
		ip: '8.8.8.8',
		code: 'US',
		country: 'United States of America',
		region: 'California',
		city: 'Mountain View',
		latitude: 37.405992,
		longitude: -122.078515,
		zip: '94043',
		timezone: {
			id: "America/Los_Angeles",
			name: "Pacific Standard Time",
			gmt: "GMT-08:00","offset":-480,
			localTime: "11/12/2022, 10:02:08 AM GMT-08:00"
		},
		state: true
	},
	{
		ip: '2a01:e35:8bd9:8bb0:92b:8628:5ca5:5f2b',
		code: 'FR',
		country: 'France',
		region: 'Ile-de-France',
		city: 'Paris',
		latitude: 48.858365,
		longitude: 2.294532,
		zip: '75000',
		timezone: {
			id: "Europe/Paris",
			name: "Central European Standard Time",
			gmt: "GMT+01:00",
			offset: 60,
			localTime: "11/12/2022, 6:55:50 PM GMT+01:00"
		},
		state: true
	}
]

*/

```

<br />
<br />
<br />

## MIT License

Copyright (c) Alexander Yermolenko • [surfy.one](https://surfy.one)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.