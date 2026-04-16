/**
 * Valida um CPF
 * @param {string} cpf - CPF com ou sem pontuação
 * @returns {boolean} - true se CPF válido, false caso contrário
 */
function validateCPF(cpf) {
  // Remove pontuação (pontos e hífens)
  const cleanCPF = cpf.replace(/[\s.-]/g, '');
  
  // Valida se tem exatamente 11 dígitos
  if (!/^\d{11}$/.test(cleanCPF)) {
    return false;
  }
  
  // Valida se todos os dígitos são iguais (CPF inválido)
  if (/^(\d)\1{10}$/.test(cleanCPF)) {
    return false;
  }
  
  // Calcula o primeiro dígito verificador
  let sum = 0;
  let multiplier = 10;
  
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanCPF[i]) * multiplier;
    multiplier--;
  }
  
  let remainder = sum % 11;
  const firstDigit = remainder < 2 ? 0 : 11 - remainder;
  
  // Valida o primeiro dígito verificador
  if (parseInt(cleanCPF[9]) !== firstDigit) {
    return false;
  }
  
  // Calcula o segundo dígito verificador
  sum = 0;
  multiplier = 11;
  
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanCPF[i]) * multiplier;
    multiplier--;
  }
  
  remainder = sum % 11;
  const secondDigit = remainder < 2 ? 0 : 11 - remainder;
  
  // Valida o segundo dígito verificador
  if (parseInt(cleanCPF[10]) !== secondDigit) {
    return false;
  }
  
  return true;
}

// Exemplos de teste
console.log(validateCPF('123.456.789-09'));    // false (CPF inválido)
console.log(validateCPF('11144477735'));       // true (CPF válido)
console.log(validateCPF('111.444.777-35'));    // true (CPF válido)
console.log(validateCPF('00000000000'));       // false (todos dígitos iguais)
