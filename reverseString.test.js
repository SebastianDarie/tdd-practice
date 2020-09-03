import reverseString from './reverseString'

test('reverses a string', () => {
	expect(reverseString('ssa sboob')).toBe('boobs ass')
})

test('checks for a string', () => {
	expect(typeof reverseString('valentine')).toBe('string')
})

test('throws an error if not a string', () => {
	expect(() => reverseString(69)).toThrow()
	expect(() => reverseString(false)).toThrow()
	expect(() => reverseString(['a', 'b', 'c'])).toThrow()
})
