
function base64UrlEncode(obj) {
	const base64Encoded = Buffer.from(JSON.stringify(obj)).toString("base64")
	return removeSpecialChars(base64Encoded);
}

function removeSpecialChars(str) {
	return str.replace(/[=+/]/g, char => {
		switch(char) {
			case "=":
				return "";
			case "+":
				return "-";
			case "/":
				return "_";
		}
	})
}

module.exports = { base64UrlEncode, removeSpecialChars }
