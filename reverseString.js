function reverseString(str) {
	if (typeof str === 'string') {
		return str.split('').reverse().join('')
	} else {
		throw new Error("Argument isn't a string")
	}
}

export default reverseString
