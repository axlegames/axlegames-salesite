let SERVER = "PROD";
let URL = "";

if (SERVER === "DEV") URL = "http://localhost:5001";
if (SERVER === "PROD") URL = "https://api.axlegames.io";

const axlegamesPrefix = URL + "/axlegames/api/v1/";
const salePrefix = axlegamesPrefix + "sale";

export { URL, axlegamesPrefix, salePrefix };
