/**
 * Busca endereço pelo CEP utilizando a API ViaCEP
 * @param {string} cep - CEP com 8 dígitos (com ou sem formatação)
 * @returns {Promise<Object>} - Objeto com { cep, logradouro, bairro, localidade, uf }
 * @throws {Error} - Se CEP inválido ou requisição falhar
 */
async function fetchAddressByCEP(cep) {
  // Remove formatação (hífen e espaço)
  const cleanCEP = cep.replace(/[\s-]/g, '');
  
  // Valida se tem exatamente 8 dígitos
  if (!/^\d{8}$/.test(cleanCEP)) {
    throw new Error('CEP inválido. Deve conter exatamente 8 dígitos.');
  }
  
  try {
    // Faz a requisição GET para a API ViaCEP
    const response = await fetch(`https://viacep.com.br/ws/${cleanCEP}/json/`);
    
    // Valida o status HTTP
    if (!response.ok) {
      throw new Error(`Erro na requisição: Status ${response.status}`);
    }
    
    const data = await response.json();
    
    // Valida se o CEP foi encontrado (ViaCEP retorna { erro: true } para CEP inválido)
    if (data.erro) {
      throw new Error(`CEP ${cleanCEP} não encontrado.`);
    }
    
    // Retorna apenas os campos solicitados
    return {
      cep: data.cep,
      logradouro: data.logradouro,
      bairro: data.bairro,
      localidade: data.localidade,
      uf: data.uf
    };
    
  } catch (error) {
    // Re-lança erro com mensagem clara ou original se for erro de rede
    if (error instanceof TypeError) {
      throw new Error('Erro de rede: Não foi possível conectar à API ViaCEP.');
    }
    throw error;
  }
}

// Exemplos de teste
(async () => {
  try {
    // CEP válido
    const address = await fetchAddressByCEP('01310100');
    console.log('Endereço encontrado:', address);
    
    // CEP com formatação
    const address2 = await fetchAddressByCEP('01310-100');
    console.log('Endereço encontrado:', address2);
    
  } catch (error) {
    console.error('Erro:', error.message);
  }
  
  try {
    // CEP inválido
    await fetchAddressByCEP('12345');
  } catch (error) {
    console.error('Erro esperado:', error.message);
  }
  
  try {
    // CEP não encontrado
    await fetchAddressByCEP('00000000');
  } catch (error) {
    console.error('Erro esperado:', error.message);
  }
})();
