const saudacao = require('./saudacao')

describe('Testes da função dizOla', () => {
  test('deve retornar "Olá João" quando o nome for João', () => {
    const olaJoao = saudacao.dizOla('João')
    expect(olaJoao).toBe('Olá João')
    expect(true).toBeTruthy();
  })
})
