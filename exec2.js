function encontrarProximoElemento(sequencia) {
  if (sequencia.every((num, index) => num === 2 * index + 1)) {
    return sequencia.length * 2 + 1;
  }

  if (
    sequencia.every(
      (num, index) => index === 0 || num === 2 * sequencia[index - 1]
    )
  ) {
    return sequencia[sequencia.length - 1] * 2;
  }

  if (sequencia.every((num, index) => num === index * index)) {
    return sequencia.length * sequencia.length;
  }

  if (
    sequencia.every((num, index) => num === 2 * (index + 1) * (2 * (index + 1)))
  ) {
    return 2 * (sequencia.length + 1) * (2 * (sequencia.length + 1));
  }

  if (
    sequencia.length >= 3 &&
    sequencia.every(
      (num, index) =>
        index < 2 || num === sequencia[index - 1] + sequencia[index - 2]
    )
  ) {
    return sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];
  }

  if (
    sequencia.length >= 2 &&
    sequencia.every(
      (num, index) =>
        index === 0 ||
        (index % 2 === 1 && num === sequencia[index - 1] + 8) ||
        (index % 2 === 0 && num === sequencia[index - 1] + 1)
    )
  ) {
    return (
      sequencia[sequencia.length - 1] + (sequencia.length % 2 === 0 ? 8 : 1)
    );
  }

  return 'Lógica não encontrada';
}

const sequencias = [
  [1, 3, 5, 7],
  [2, 4, 8, 16, 32, 64],
  [0, 1, 4, 9, 16, 25, 36],
  [4, 16, 36, 64],
  [1, 1, 2, 3, 5, 8],
  [2, 10, 12, 16, 17, 18, 19],
];

for (const sequencia of sequencias) {
  const proximoElemento = encontrarProximoElemento(sequencia);
  console.log(`Sequência: ${sequencia}, Próximo elemento: ${proximoElemento}`);
}

// A = 9
// B = 128
// C = 49
// D = 100
// E = 13
