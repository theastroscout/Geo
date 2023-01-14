import request from '@surfy/request';

/*

Weather

*/

class Weather {

	constructor(conf){
		this.email = conf.email;
		this.key = conf.key;
		this.headers = {
			email: this.email,
			key: this.key
		};
	}

	async get(coords){
		let result = await request({
			url: `https://api.surfy.one/geo/weather`,
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

export default Weather;