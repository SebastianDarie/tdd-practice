function analize(arr) {
	let average = arr.reduce((prev, curr) => prev + curr, 0) / arr.length
	let min = Math.min(...arr)
	let max = Math.max(...arr)
	let length = arr.length
	return { average, min, max, length }
}

export default analize
