// validation.js

export const validateCadastro = ({
    nome,
    telefone,
    email,
    senha,
    dataNascimento,
    sexo,
    cpf
  }) => {
    // Validação simples
    if (!nome || !telefone || !email || !senha || !dataNascimento || !sexo || !cpf) {
      return { valid: false, message: "Preencha todos os campos." };
    }
  
    // Adicione validações adicionais conforme necessário
    // Exemplo: Validação de email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return { valid: false, message: "Email inválido." };
    }
  
    // Exemplo: Validação de CPF
    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/; // Formato: 123.456.789-10
    if (!cpfPattern.test(cpf)) {
      return { valid: false, message: "CPF inválido. Use o formato 123.456.789-10." };
    }
  
    // Se todas as validações passarem
    return { valid: true };
  };