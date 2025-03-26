const calc = require('./calculadora')

describe('Testes da calculadora', () => {
test('somar 2 e 2 deve resultar em 4', () => {
  const resultado = calc.soma(2, 2)
  expect(resultado).toBe(4)
})

test('multiplicar 3 e 3 deve resultar em 9', () => {
  const resultado = calc.multiplica(3, 3)
  expect(resultado).toBeGreaterThan(3)
})
})
