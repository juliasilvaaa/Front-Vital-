"use client"; // Adiciona esta linha para tornar o componente um Client Component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Usando next/navigation
import { validateCadastro } from '../../js/validation.js'; // Importa a função de validação
import "../../styles/globals.css";

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [sexo, setSexo] = useState('');
  const [cpf, setCpf] = useState('');
  // Adicione os estados necessários para outros campos aqui...

  const router = useRouter(); // Inicializando useRouter

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação dos dados
    const validation = validateCadastro({ nome, telefone, email, senha, dataNascimento, sexo, cpf });
    if (!validation.valid) {
      alert(validation.message);
      return;
    }

    // Envio dos dados ao backend
    try {
      const response = await fetch('http://localhost:8080/v1/vital/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, telefone, email, senha, dataNascimento, sexo, cpf }),
      });

      if (response.ok) {
        // Se o cadastro for bem-sucedido, redireciona para a tela de finalização
        router.push('./finalizado');
      } else {
        alert("Erro ao cadastrar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <div className="bg-blue-200 flex h-screen">
    

      <div>
        <img src="./img/logo.png" alt="" className="ml-5 mt-1" />
      </div>

      <img src="./img/mulher.png" alt="" className="w-2/5 max-h-screen object-cover" />

      <div className="ml-32 mt-20">
        <div>
          <p className="font-sans font-bold text-[--azulescuro] text-3xl">REALIZE SEU</p>
          <h1 className="font-sans text-4xl font-bold text-stone-600 text-6xl mt-4">CADASTRO</h1>
          <div className="flex mt-4">
            <p className="text-stone-400 font-sans text-xl">Possui uma conta?</p>
            <button className="font-sans text-[--azulprincipal] ml-2 text-xl">Entre</button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-10">
          <div className="flex">
            <div>
              <label htmlFor="nome" className="block text-stone-500 text-base font-sans mb-2 text-xl">Nome</label>
              <input type="text" id="nome" placeholder="Nome completo" value={nome} onChange={(e) => setNome(e.target.value)} className="shadow-2xl w-72 h-16 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="ml-24">
              <label htmlFor="telefone" className="block text-stone-500 text-base font-sans mb-2 text-xl">Telefone</label>
              <input type="tel" id="telefone" placeholder="(DDD) 1234-5678" value={telefone} onChange={(e) => setTelefone(e.target.value)} className="shadow-2xl w-72 h-16 border border-gray-300 rounded-lg p-3 text-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="email" className="block text-stone-500 text-base font-sans mb-2 text-xl">Email</label>
            <input type="email" id="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="shadow-2xl w-full h-16 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="flex mt-6">
            <div>
              <label htmlFor="senha" className="block text-stone-500 text-base font-sans mb-2 text-xl">Senha</label>
              <input type="password" id="senha" placeholder="**********" value={senha} onChange={(e) => setSenha(e.target.value)} className="shadow-2xl w-72 h-16 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="ml-24">
              <label htmlFor="data-nascimento" className="block text-stone-500 text-base font-sans mb-2 text-xl">Data de Nascimento</label>
              <input type="date" id="data-nascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} className="shadow-2xl w-72 h-16 border text-stone-400 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div className="flex mt-6">
            <div>
              <label className="block text-stone-500 font-sans mb-2 text-xl">Sexo</label>
              <div className="flex items-center">
                <input type="radio" id="masculino" name="sexo" value="masculino" onChange={(e) => setSexo(e.target.value)} className="mr-2" />
                <label htmlFor="masculino" className="text-stone-500 text-xl mr-4" value="1">Masculino</label>
                <input type="radio" id="feminino" name="sexo" value="feminino" onChange={(e) => setSexo(e.target.value)} className="mr-2" />
                <label htmlFor="feminino" className="text-stone-500 text-xl" value="2">Feminino</label>
              </div>
            </div>


            <div className="ml-[14vh]">
              <label htmlFor="cpf" className="block text-stone-500 font-sans mb-2 text-xl">CPF</label>
              <input type="text" id="cpf" placeholder="123.456.789-10" value={cpf} onChange={(e) => setCpf(e.target.value)} className="shadow-2xl w-72 h-16 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <button type="submit" className="bg-[--azulprincipal] text-white text-xl rounded-full w-[172px] h-[54px] flex items-center justify-center hover:bg-[--azulescuro] ml-48 mt-16">
            Próximo
          </button>
        </form>
      </div>
    </div>
  );
};
console.log(Cadastro)

export default Cadastro;