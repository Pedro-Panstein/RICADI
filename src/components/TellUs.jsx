import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"; // Ícones para sucesso e falha
import { motion } from "framer-motion";

export default function TellUs() {
  const [from_name, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setTelefone] = useState("");
  const [message, setMensagem] = useState("");
  const [errors, setErrors] = useState({});
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // Estado para o modal de sucesso
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false); // Estado para o modal de falha
  const [loading, setLoading] = useState(false);

  // Função para formatar o telefone
  const formatarTelefone = (valor) => {
    // Remove tudo que não é número
    const apenasNumeros = valor.replace(/\D/g, "");

    // Aplica a formatação
    if (apenasNumeros.length <= 10) {
      // Formato para telefone fixo: (XX) XXXX-XXXX
      return apenasNumeros
        .replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3")
        .substring(0, 14);
    } else {
      // Formato para celular: (XX) XXXXX-XXXX
      return apenasNumeros
        .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
        .substring(0, 15);
    }
  };

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

  const limparErro = (campo) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [campo]: "",
    }));
  };

  const handleClick = async () => {
    // Validação dos campos
    const nomeError = validarNome(from_name);
    const emailError = validarEmail(email);
    const telefoneError = validarTelefone(phone);
    const mensagemError = validarMensagem(message);

    if (nomeError || emailError || telefoneError || mensagemError) {
      setErrors({
        from_name: nomeError,
        email: emailError,
        phone: telefoneError,
        message: mensagemError,
      });
      return;
    }

    setLoading(true); //inicia o loading

    // Dados a serem enviados
    const templateParams = {
      from_name,
      email,
      phone,
      message,
    };

    console.log("Enviando e-mail...");

    try {
      // Envia o e-mail usando EmailJS
      await emailjs.send(
        "service_kxq3pgl",
        "template_53ando9",
        templateParams,
        "Z8LxLQlDh547YvomB"
      );

      console.log("E-mail enviado com sucesso!");
      setLoading(false); //finaliza o loading
      setIsSuccessModalOpen(true); //modal de sucesso

      // Limpa os campos após o envio
      setNome("");
      setEmail("");
      setTelefone("");
      setMensagem("");
      setErrors({});
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      setIsErrorModalOpen(true); //modal de falha
    }
  };

  // Função para fechar os modais
  const closeModal = () => {
    setIsSuccessModalOpen(false);
    setIsErrorModalOpen(false);
  };

  return (
    <>
      {loading && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
        >
          <div className="w-16 h-16 border-4 border-white rounded-full animate-spin border-t-transparent"></div>
        </motion.div>
      )}
      <div
        id="bannerTell"
        className="flex justify-center items-center bg-cover bg-center bg-no-repeat bg-gradient-to-br from-[#134564] xl:via-[#0B2E43] xl:to-[#134564] to-[#0B2E43] h-[900px]"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="flex flex-col items-center justify-center p-5 mx-5 rounded-lg bg-whiteRICADI md:p-10"
        >
          <h2 className="text-3xl font-bold font-asap text-blueRICADI">
            Fale conosco
          </h2>
          <p className="pt-5 font-semibold text-blueRICADI/70">
            Entre em contato e tire suas dúvidas com a nossa equipe
          </p>

          {/* Campo Nome */}
          <div className="flex flex-col w-full gap-1 pt-5">
            <label className="font-semibold font-maven-pro text-blueRICADI">
              Nome
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={from_name}
              onChange={(e) => {
                setNome(e.target.value);
                limparErro("nome"); // Limpa o erro do campo "nome"
              }}
              className={`bg-transparent border-2 outline-none font-maven-pro font-semibold text-blueRICADI focus:bg-blueRICADI/5 border-blueRICADI rounded-lg p-2 ${
                errors.from_name ? "border-red-700" : ""
              }`}
            />
            {errors.from_name && (
              <span className="text-sm font-bold text-red-700 font-maven-pro">
                {errors.from_name}
              </span>
            )}
          </div>

          {/* Campo E-mail */}
          <div className="flex flex-col w-full gap-2 pt-5">
            <label className="font-semibold font-maven-pro text-blueRICADI">
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
              <span className="text-sm font-bold text-red-700 font-maven-pro">
                {errors.email}
              </span>
            )}
          </div>

          {/* Campo Telefone */}
          <div className="flex flex-col w-full gap-2 pt-5">
            <label className="font-semibold font-maven-pro text-blueRICADI">
              Telefone
            </label>
            <input
              type="text"
              placeholder="(xx) xxxxx-xxxx"
              value={phone}
              onChange={(e) => {
                const valorFormatado = formatarTelefone(e.target.value);
                setTelefone(valorFormatado); // Atualiza o estado com o valor formatado
                limparErro("telefone"); // Limpa o erro do campo "telefone"
              }}
              className={`bg-transparent border-2 outline-none font-maven-pro font-semibold text-blueRICADI focus:bg-blueRICADI/5 border-blueRICADI rounded-lg p-2 ${
                errors.phone ? "border-red-700" : ""
              }`}
            />
            {errors.phone && (
              <span className="text-sm font-bold text-red-700 font-maven-pro">
                {errors.phone}
              </span>
            )}
          </div>

          {/* Campo Mensagem */}
          <div className="flex flex-col w-full gap-2 pt-5">
            <label className="font-semibold font-maven-pro text-blueRICADI">
              Mensagem
            </label>
            <textarea
              placeholder="Deixe sua Mensagem..."
              value={message}
              onChange={(e) => {
                setMensagem(e.target.value);
                limparErro("mensagem"); // Limpa o erro do campo "mensagem"
              }}
              className={`bg-transparent border-2 outline-none font-maven-pro font-semibold text-blueRICADI focus:bg-blueRICADI/5 border-blueRICADI rounded-lg p-2 h-40 resize-none ${
                errors.message ? "border-red-700" : ""
              }`}
            />
            {errors.message && (
              <span className="text-sm font-bold text-red-700 font-maven-pro">
                {errors.message}
              </span>
            )}
          </div>

          {/* Botão Enviar */}
          <button
            onClick={handleClick}
            className={`px-4 py-2 text-lg mt-5 w-full font-semibold rounded-lg shadow-md font-maven-pro border-2 border-transparent transition-colors lg:text-[1.2rem] bg-blueRICADI text-whiteRICADI hover:bg-transparent hover:border-blueRICADI hover:text-blueRICADI`}
          >
            Enviar Mensagem
          </button>
        </motion.div>
      </div>

      {/* Modal de Sucesso */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-8 rounded-lg text-center">
            <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-blueRICADI mb-4">
              Sucesso!
            </h2>
            <p className="text-gray-700 mb-6">
              Sua mensagem foi enviada com sucesso.
            </p>
            <button
              onClick={closeModal}
              className="px-6 py-2 bg-blueRICADI text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Modal de Falha */}
      {isErrorModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-8 rounded-lg text-center">
            <FaTimesCircle className="text-red-500 text-6xl mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-blueRICADI mb-4">
              Falha no Envio
            </h2>
            <p className="text-gray-700 mb-6">
              Ocorreu um erro ao enviar sua mensagem. Tente novamente.
            </p>
            <button
              onClick={closeModal}
              className="px-6 py-2 bg-blueRICADI text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
