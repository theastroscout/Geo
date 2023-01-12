import request from '@surfy/request';

/*

Geo IP

*/

class GeoIP {

	constructor(conf){
		this.email = conf.email;
		this.key = conf.key;
		this.headers = {
			email: this.email,
			key: this.key
		};
	}

	async get(IP){
		let result = await request({
			url: `https://api.surfy.one/geo/ip/${IP}`,
			method: 'POST',
			headers: this.headers
		});

		return result;
	}
};

export default GeoIP;