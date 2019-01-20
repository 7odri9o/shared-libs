const index = require('../../index')

test('Index deve ser um objeto', () => {
  expect(typeof index).toBe('object')
})

test('Index deve conter uma propriedade chamada integer', () => {
  expect(index).toHaveProperty('integer')
})

test('Index deve conter uma propriedade chamada date', () => {
  expect(index).toHaveProperty('date')
})

test('Index deve conter uma propriedade chamada boolean', () => {
  expect(index).toHaveProperty('boolean')
})

test('Index deve conter uma propriedade chamada integer do tipo function', () => {
  const { integer } = index
  expect(typeof integer).toBe('object')
})

test('Index deve conter uma propriedade chamada date do tipo function', () => {
  const { date } = index
  expect(typeof date).toBe('object')
})

test('Index deve conter uma propriedade chamada boolean do tipo function', () => {
  const { boolean } = index
  expect(typeof boolean).toBe('object')
})