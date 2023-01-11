import GeoIP from "../src/index.mjs";
const geoIP = new GeoIP({
	email: "email@example.com",
	key: "YOUR_FREE_API_KEY"
});

let testIPs = ["8.8.8.8", "2a01:e35:8bd9:8bb0:92b:8628:5ca5:5f2b"];
let result = [];
for(let IP of testIPs){
	result.push(await geoIP.get(IP));
}
console.log(result);