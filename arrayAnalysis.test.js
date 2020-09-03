import analize from './arrayAnalysis'

test('has and returns an average', () => {
	expect(Object.keys(analize([1, 4, 6]))).toContain('average')
	expect(analize([3, 4, 8]).average).toBe(5)
})

test('has and returns the minimum value', () => {
	expect(Object.keys(analize([2, 5, 7]))).toContain('min')
	expect(analize([2, 5, 7]).min).toBe(2)
})

test('has and returns the maximum value', () => {
	expect(Object.keys(analize([4, 8, 12]))).toContain('max')
	expect(analize([4, 8, 12]).max).toBe(12)
})

test('has and returns the length of the array', () => {
	expect(Object.keys(analize([1, 4, 6, 7, 4, 9]))).toContain('length')
	expect(analize([1, 4, 6, 7, 4, 9]).length).toBe(6)
})

test('returns an object', () => {
	expect(typeof analize([1, 2, 3])).toBe('object')
})
