
const { base64UrlEncode, removeSpecialChars } = require("./utils/base64");
const crypto = require("crypto");

// generate a base64-encoded JWT header
const base64EncodedHeader = base64UrlEncode({
	alg: "HS256",
	typ: "JWT",
});

// generate a base64-encoded JWT payload
const base64EncodedPayload = base64UrlEncode({
	sub: "1234567890",
	name: "John Doe",
	admin: true,
});

// generate a 128-bit secret key
const secret = crypto.randomBytes(16);

// use sha256 algorithm and secret key to generate a signature
const signature = crypto.createHmac("sha256", secret)
	.update(base64EncodedHeader + "." + base64EncodedPayload);

// base64-encode the JWT signature
const base64EncodedSignature = removeSpecialChars(signature.digest("base64"));

// generate the final jwt by concatenating its components
const jwt = base64EncodedHeader + "." + base64EncodedPayload + "." + base64EncodedSignature;
console.log(jwt);
