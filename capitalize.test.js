import capitalize from './capitalize'

test('capitalizes first char of str', () => {
	expect(capitalize('ogugeageuagu vilaj')).toMatch(/[a-z|A-Z]/)
})

test('checks for a string', () => {
	expect(typeof capitalize('funny')).toBe('string')
})

test('throws an error if not a string', () => {
	expect(() => capitalize(69)).toThrow()
	expect(() => capitalize(false)).toThrow()
	expect(() => capitalize(['a', 'b', 'c'])).toThrow()
})
