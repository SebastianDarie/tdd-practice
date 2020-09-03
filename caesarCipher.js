const caesarCipher = (string, offset) => {
	function shift(start, num) {
		let low = 97
		let high = 122
		let final = start

		if (
			start < 65 ||
			start > 122 ||
			(start > 90 && start < 97) ||
			num == 0
		) {
			return start
		} else if (start >= 65 && start <= 90) {
			low = 65
			high = 90
		}

		final += num

		if (num > 0) {
			while (final > high) {
				final -= 26
			}
		} else if (num < 0) {
			while (final < low) {
				final += 26
			}
		}

		return final
	}

	return string
		.split('')
		.map((char) => char.charCodeAt(0))
		.map((char) => shift(char, offset))
		.map((char) => String.fromCharCode(char))
		.join('')
}

export default caesarCipher
