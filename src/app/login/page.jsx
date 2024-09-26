const LoginPage = () => {
  return (
    <div className="flex">
      <img src="./img/lateral.png" alt="Login Illustration" className="relative w-5/12 h-screen flex" />

      <div className="absolute left-0 top-0">
        <img src="./img/logo.png" alt="Logo" />
      </div>

      <div id="telaDireita" className="">
        <div className="pl-96 ml-96">
          <img src="./img/onda.png" alt="Side Image" className="w-full relative" />
        </div>

        <div className="absolute ml-64 mt-[-90px]">
          <h1 className="font-poppins text-5xl font-bold text-principalazul mb-5">
            Entrar no VITAL+
          </h1>
          <div className="flex">
            <p className="font-poppins text-xl text-stone-400">Não possui conta?</p>
            <button className="text-xl font-poppins text-principalazul ml-2 font-medium">
              Cadastrar
              {/* <a href="/cadastro.html" /> */}
            </button>
          </div>
        </div>

        <div className="mt-[80px] ml-72">
          <label htmlFor="email" className="block text-stone-500 text-xl font-poppins mb-2">
            Email
          </label>
          <div className="relative w-3/5">
            <input
              type="email"
              placeholder="email@gmail.com"
              id="email"
              className="font-poppins shadow-2xl h-16 border border-gray-300 rounded-lg pl-6 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <img src="./img/email.png" alt="Email Icon" className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6" />
          </div>
        </div>

        <div className="mt-6 ml-72">
          <label htmlFor="password" className="block text-stone-500 text-xl font-poppins mb-2">
            Senha
          </label>
          <div className="relative w-3/5">
            <input
              type="password"
              placeholder="*********"
              id="senha"
              className="font-poppins shadow-2xl h-16 border border-gray-300 rounded-lg pl-6 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <img src="./img/ocultar.png" alt="Password Icon" className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6" />
          </div>
        </div>

        <div className="mt-8 ml-72">
          <p className="font-poppins text-stone-400">Esqueceu a senha?</p>
        </div>

        <button
          className="font-bold font-poppins bg-principalazul text-white rounded-full w-[420px] h-[72px] flex items-center justify-center hover:bg-blue-600 ml-80 mt-20 text-xl"
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default LoginPage;