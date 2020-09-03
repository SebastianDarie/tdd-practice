import caesarCipher from './caesarCipher'

test('works with a single letter case insensitive', () => {
	expect(caesarCipher('C, a', 1)).toBe('D, b')
})

test('works with words & punctuation', () => {
	expect(caesarCipher('ooga, booga!', 5)).toBe('ttlf, gttlf!')
})

test('works with wrapping from z to a', () => {
	expect(caesarCipher('zy', 1)).toBe('az')
})

test('works positive shifts (big or small)', () => {
	expect(caesarCipher('ooga', 25)).toBe('nnfz')
})

test('works negative shifts (big or small)', () => {
	expect(caesarCipher('ooga', -25)).toBe('pphb')
})

test('returns a string', () => {
	expect(typeof caesarCipher('booga', 1)).toBe('string')
})
