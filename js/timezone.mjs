import request from '@surfy/request';

/*

Timezone

*/

class Timezone {

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

export default Timezone;