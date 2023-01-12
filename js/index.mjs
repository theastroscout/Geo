import request from '@surfy/request';
import GeoIP from './geoip.mjs'

class Geo {

	constructor(conf){
		this.email = conf.email;
		this.key = conf.key;
		this.headers = {
			email: this.email,
			key: this.key
		};
	}

	/*

	GEO IP

	*/

	async ip(IP){
		let result = await request({
			url: `https://api.surfy.one/geo/ip/${IP}`,
			method: 'POST',
			headers: this.headers
		});

		return result;
	}

	/*

	Timezone

	*/

	async tz(coords){
		let result = await request({
			url: `https://api.surfy.one/geo/timezone`,
			method: 'GET',
			headers: this.headers,
			params: {
				lat: coords[0],
				lng: coords[1]
			}
		});

		return result;
	}

};

export { Geo as default, GeoIP }