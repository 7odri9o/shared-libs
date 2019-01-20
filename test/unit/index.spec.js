const index = require('../../index')

test('Index deve ser um objeto', () => {
  expect(typeof index).toBe('object')
});

test('Index deve conter uma propriedade chamada integer', () => {
  expect(index).toHaveProperty('integer')
});

test('Index deve conter uma propriedade chamada integer do tipo function', () => {
  const { integer } = index
  expect(typeof integer).toBe('object')
})