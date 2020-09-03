import { calculator } from './calculator'

test('calculator has a add func', () => {
	expect(Object.keys(calculator)).toContain('add')
	expect(calculator.add(6, 9)).toBe(15)
})

test('calculator has a substract func', () => {
	expect(Object.keys(calculator)).toContain('substract')
	expect(calculator.substract(7, 4)).toBe(3)
})

test('calculator has a multiply func', () => {
	expect(Object.keys(calculator)).toContain('multiply')
	expect(calculator.multiply(2, 2)).toBe(4)
})

test('calculator has a divide func', () => {
	expect(Object.keys(calculator)).toContain('divide')
	expect(calculator.divide(10, 5)).toBe(2)
})

test('calculator is an object', () => {
	expect(typeof calculator).toBe('object')
})
