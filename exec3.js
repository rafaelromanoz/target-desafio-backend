function analisarFaturamento(faturamentoDiario) {
  let menorFaturamento = Infinity;
  let maiorFaturamento = -Infinity;
  let somaFaturamento = 0;
  let diasComFaturamento = 0;

  for (const faturamento of faturamentoDiario) {
    if (faturamento > 0) {
      menorFaturamento = Math.min(menorFaturamento, faturamento);
      maiorFaturamento = Math.max(maiorFaturamento, faturamento);
      somaFaturamento += faturamento;
      diasComFaturamento++;
    }
  }

  const mediaAnual = somaFaturamento / diasComFaturamento;
  let diasAcimaDaMedia = 0;

  for (const faturamento of faturamentoDiario) {
    if (faturamento > mediaAnual) {
      diasAcimaDaMedia++;
    }
  }

  return {
    menorFaturamento,
    maiorFaturamento,
    diasAcimaDaMedia,
  };
}

const faturamentoDiario = [
  1000,
  0,
  500,
  2000,
  0,
  300,
  1500,
  0,
  800,
  1200, 
];

const resultado = analisarFaturamento(faturamentoDiario);
console.log('Menor faturamento:', resultado.menorFaturamento);
console.log('Maior faturamento:', resultado.maiorFaturamento);
console.log('Dias acima da média:', resultado.diasAcimaDaMedia);


// Menor faturamento: 300
// Maior faturamento: 2000
// Dias acima da média: 3