const index = require('../../index')

test('Index deve ser um objeto', () => {
  expect(typeof index).toBe('object')
});

test('Index deve conter uma propriedade chamada integer', () => {
  expect(index).toHaveProperty('integer')
});

test('Index deve conter uma propriedade chamada date', () => {
  expect(index).toHaveProperty('date')
});

test('Index deve conter uma propriedade chamada integer do tipo function', () => {
  const { date } = index
  expect(typeof date).toBe('object')
})