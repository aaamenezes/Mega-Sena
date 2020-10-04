export default quant => {
  // Números retornados pela função
  let numerosMega = []

  // Ciclo que preenche os números da mega
  // Se repete até a lista ter o mesmo número de itens que a função recebeu no parâmetro quant
  while (numerosMega.length < quant) {
    
    // Sortear número aleatório entre 1 e 60
    let numeroSorteado = parseInt(Math.random() * (61 - 1) + 1)
    
    // Se o número não existe na lista, acrescenta
    if (numerosMega.indexOf(numeroSorteado) === -1) numerosMega.push(numeroSorteado)
  }

  // Ordena a lista em ordem crescente
  numerosMega.sort((n1, n2) => n1 - n2)

  // Se algum número da mega possui apenas 1 dígito, acrescenta um zero antes
  numerosMega.forEach((numero, indice) => {
    if (numero.toString().length === 1) numerosMega[indice] = `0${numero}`
  })

  // Converte a lista de números em string, troca vírgulas por hífens e retorna
  // numerosMega = numerosMega.toString().replaceAll(',', ' - ')
  return numerosMega
}