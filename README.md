# Surfy.GEO
### Software suite for handling GEO Data and Maps

## JavaScript Usage

```js

import Geo from '@surfy/geo';

const geo = new Geo({
	email: YOUR_EMAIL,
	key: FREE_API_KEY
});

```
<br/>

### Geo IP
Returns Geo data extracted from IPv4 or IPv6

```js

let testIPs = ['8.8.8.8', '2a01:e35:8bd9:8bb0:92b:8628:5ca5:5f2b'];

let result = [];

for(let IP of testIPs){
	result.push(await geo.ip(IP));
}

console.log(result);

/*

Result [
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
      id: 'America/Los_Angeles',
      name: 'Pacific Daylight Time',
      gmt: 'GMT-07:00',
      offset: -420,
      localTime: '01/25/2023, 11:12:28 AM GMT-07:00'
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
      id: 'Europe/Paris',
      name: 'Central European Standard Time',
      gmt: 'GMT+01:00',
      offset: 60,
      localTime: '01/25/2023, 7:12:28 PM GMT+01:00'
    },
    state: true
  }
]

*/

```
<br/>

### Timezone
Returns Timezone extracted from coordinates

```js

let coords = [46.524465, 6.623966];
console.log('Timezone:', await geo.tz(coords));

/*

Timezone: {
  state: true,
  latitude: 46.524465,
  longitude: 6.623966,
  id: 'Europe/Zurich',
  name: 'Central European Standard Time',
  gmt: 'GMT+01:00',
  offset: 60,
  localTime: '01/25/2023, 7:12:29 PM GMT+01:00'
}

*/

```
<br/>

### Reverse Geocoding
Returns Address, City, Country, Timezone and other usefull data extracted from coordinates

```js

coords = [51.505563,-0.023309];
console.log('Reverse Geocoding:', await geo.reverse(coords));

/*

Reverse Geocoding: {
  state: true,
  coords: { latitude: 51.505563, longitude: -0.023309 },
  address: {
    historic: 'Relief Portrait of Michael von Clemm',
    road: 'Cabot Square',
    quarter: 'Canary Wharf',
    suburb: 'Isle of Dogs',
    borough: 'London Borough of Tower Hamlets',
    city: 'London',
    stateDistrict: 'Greater London',
    state: 'England',
    postcode: 'E14 4QQ',
    country: 'United Kingdom',
    countryCode: 'gb'
  },
  timezone: {
    id: 'Europe/London',
    name: 'Greenwich Mean Time',
    gmt: 'GMT',
    offset: 0,
    localTime: '01/25/2023, 6:12:29 PM GMT'
  }
}

*/

```

## Python Usage

```py

from py import SurfyGeo

# Initial Lib
geo = Geo(YOUR_EMAIL, FREE_API_KEY)

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