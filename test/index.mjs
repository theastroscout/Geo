import credits from '../credits.json' assert { type: 'json' };
import Geo from '../js/index.mjs';


const geo = new Geo({
	email: credits.email,
	key: credits.key
});

/*

Geo IP Test

*/

let testIPs = ['8.8.8.8', '2a01:e35:8bd9:8bb0:92b:8628:5ca5:5f2b'];

let result = [];

for(let IP of testIPs){
	result.push(await geo.ip(IP));
}
console.log(result);

/*

Timezone Test
@coords = [lat,lng]
*/

let coords = [46.524465, 6.623966];
console.log('Timezone:', await geo.tz(coords));

/*

Reverse Geocoding

*/

coords = [51.505563,-0.023309];
console.log('Reverse Geocoding:', await geo.reverse(coords));