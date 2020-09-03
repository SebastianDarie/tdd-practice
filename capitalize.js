function capitalize(str) {
	if (typeof str === 'string') {
		return str[0].toUpperCase() + str.slice(1)
	} else {
		throw new Error("Argument isn't a string")
	}
}

export default capitalize
