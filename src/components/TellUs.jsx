import { doc, getDoc, increment, setDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebaseConfig";

export default function TellUs() {
  const [clicked, setClicked] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [errors, setErrors] = useState({});

  // Função para validar o nome
  const validarNome = (nome) => {
    if (nome.length < 3) {
      return "O nome deve ter pelo menos 3 caracteres.";
    }
    return "";
  };

  // Função para validar o e-mail
  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return "Por favor, insira um e-mail válido.";
    }
    return "";
  };

  // Função para validar o telefone
  const validarTelefone = (telefone) => {
    const regex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
    if (!regex.test(telefone)) {
      return "Por favor, insira um telefone válido.";
    }
    return "";
  };

  // Função para validar a mensagem
  const validarMensagem = (mensagem) => {
    if (mensagem.length < 10) {
      return "A mensagem deve ter pelo menos 10 caracteres.";
    }
    return "";
  };

  // Função para limpar erros
  const limparErro = (campo) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [campo]: "", // Limpa o erro do campo específico
    }));
  };

  const handleClick = async () => {
    // Validar todos os campos
    const nomeError = validarNome(nome);
    const emailError = validarEmail(email);
    const telefoneError = validarTelefone(telefone);
    const mensagemError = validarMensagem(mensagem);

    // Se houver erros, atualize o estado de erros e pare a execução
    if (nomeError || emailError || telefoneError || mensagemError) {
      setErrors({
        nome: nomeError,
        email: emailError,
        telefone: telefoneError,
        mensagem: mensagemError,
      });
      return;
    }

    // Se todos os campos forem válidos, continue com o envio
    const clickKey = "hasClicked";
    localStorage.setItem(clickKey, "true");

    const docRef = doc(db, "Banco de acessos", "RICADI");

    try {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        await updateDoc(docRef, { "Cliques no botão": increment(1) });
      } else {
        await setDoc(docRef, { "Cliques no botão": 1 });
      }
    } catch (error) {
      console.error(error);
    }

    setClicked(true);
  };

  return (
    <>
      <div
        id="bannerTell"
        className="flex justify-center items-center bg-cover bg-center bg-no-repeat bg-gradient-to-br from-[#134564] xl:via-[#0B2E43] xl:to-[#134564] to-[#0B2E43] h-[900px]"
      >
        <div className="bg-whiteRICADI p-5 md:p-10 rounded-lg flex justify-center items-center flex-col mx-5">
          <h2 className="font-asap text-3xl font-bold text-blueRICADI">
            Fale conosco
          </h2>
          <p className="text-blueRICADI/70 font-semibold pt-5">
            Entre em contato e tire suas dúvidas com a nossa equipe
          </p>

          {/* Campo Nome */}
          <div className="flex flex-col gap-1 pt-5 w-full">
            <label className="font-maven-pro text-blueRICADI font-semibold">
              Nome
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
                limparErro("nome"); // Limpa o erro do campo "nome"
              }}
              className={`bg-transparent border-2 outline-none font-maven-pro font-semibold text-blueRICADI focus:bg-blueRICADI/5 border-blueRICADI rounded-lg p-2 ${
                errors.nome ? "border-red-700" : ""
              }`}
            />
            {errors.nome && (
              <span className="text-red-700 text-sm font-bold font-maven-pro">
                {errors.nome}
              </span>
            )}
          </div>

          {/* Campo E-mail */}
          <div className="flex flex-col gap-2 pt-5 w-full">
            <label className="font-maven-pro text-blueRICADI font-semibold">
              Email
            </label>
            <input
              type="email"
              placeholder="Digite seu Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                limparErro("email"); // Limpa o erro do campo "email"
              }}
              className={`bg-transparent border-2 outline-none font-maven-pro font-semibold text-blueRICADI focus:bg-blueRICADI/5 border-blueRICADI rounded-lg p-2 ${
                errors.email ? "border-red-700" : ""
              }`}
            />
            {errors.email && (
              <span className="text-red-700 text-sm font-bold font-maven-pro">
                {errors.email}
              </span>
            )}
          </div>

          {/* Campo Telefone */}
          <div className="flex flex-col gap-2 pt-5 w-full">
            <label className="font-maven-pro text-blueRICADI font-semibold">
              Telefone
            </label>
            <input
              type="text"
              placeholder="(xx) xxxx-xxxx"
              value={telefone}
              onChange={(e) => {
                setTelefone(e.target.value);
                limparErro("telefone"); // Limpa o erro do campo "telefone"
              }}
              className={`bg-transparent border-2 outline-none font-maven-pro font-semibold text-blueRICADI focus:bg-blueRICADI/5 border-blueRICADI rounded-lg p-2 ${
                errors.telefone ? "border-red-700" : ""
              }`}
            />
            {errors.telefone && (
              <span className="text-red-700 text-sm font-bold font-maven-pro">
                {errors.telefone}
              </span>
            )}
          </div>

          {/* Campo Mensagem */}
          <div className="flex flex-col gap-2 pt-5 w-full">
            <label className="font-maven-pro text-blueRICADI font-semibold">
              Mensagem
            </label>
            <textarea
              placeholder="Deixe sua Mensagem..."
              value={mensagem}
              onChange={(e) => {
                setMensagem(e.target.value);
                limparErro("mensagem"); // Limpa o erro do campo "mensagem"
              }}
              className={`bg-transparent border-2 outline-none font-maven-pro font-semibold text-blueRICADI focus:bg-blueRICADI/5 border-blueRICADI rounded-lg p-2 h-40 resize-none ${
                errors.mensagem ? "border-red-700" : ""
              }`}
            />
            {errors.mensagem && (
              <span className="text-red-700 text-sm font-bold font-maven-pro">
                {errors.mensagem}
              </span>
            )}
          </div>

          {/* Botão Enviar */}
          <button
            onClick={() => handleClick}
            className={`px-4 py-2 text-lg mt-5 w-full font-semibold rounded-lg shadow-md font-maven-pro border-2 border-transparent transition-colors lg:text-[1.2rem] bg-blueRICADI text-whiteRICADI hover:bg-transparent hover:border-blueRICADI hover:text-blueRICADI`}
          >
            Enviar Mensagem
          </button>
        </div>
      </div>
    </>
  );
}
