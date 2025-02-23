//Componentes
import Header from "../components/Header";
import textoRicadi from "../assets/RICADI logotipo.png";
import bgBanner from "../assets/banner-bg.png";
import ContactButtom from "../components/ContactButtom";
import { TiLocationArrowOutline } from "react-icons/ti";
import { BiCheckShield } from "react-icons/bi";
import { FaHandHoldingMedical } from "react-icons/fa";
import { useEffect } from "react";
import { doc, getDoc, setDoc, increment, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import UniqueRicadi from "../components/UniqueRicadi";
import AllInsurance from "../components/seguros/AllInsurance";
import TellUs from "../components/TellUs";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

//Imagens
import ricadiLogotipo from "../assets/RICADI logotipo.png";
import ricadiFormsLogotipo from "../assets/bannerRicadiLogotipo.svg";
import ricadiForms from "../assets/bannerFormulario.png";

export default function HomePage() {
  useEffect(() => {
    const incrementViewCount = async () => {
      const viewKey = "hasViewed"; // Chave única para identificar a visualização desta página

      // Verifica se o usuário já contou a visualização nesta sessão
      if (localStorage.getItem(viewKey) === "true") {
        return;
      }

      // Marca no localStorage que a visualização foi contabilizada
      localStorage.setItem(viewKey, "true");

      const docRef = doc(db, "Banco de acessos", "RICADI"); // Referência ao Firestore

      try {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          await updateDoc(docRef, {
            Visualizações: increment(1),
          });
          console.log("Visualizações incrementadas com sucesso!");
        } else {
          console.log("Documento não encontrado, criando um novo...");
          await setDoc(docRef, { Visualizações: 1 });
          console.log("Documento criado com 1 visualização.");
        }
      } catch (error) {
        console.error("Erro ao acessar ou atualizar visualizações:", error);
      }
    };

    incrementViewCount();
  }, []);

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <div
          id="banner"
          className="relative flex flex-col items-center justify-center min-h-[60vh] h-[100%] w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgBanner})` }}
        >
          {/* Conteúdo do banner */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="relative z-10 text-center xl:mb-32 xl:text-start"
          >
            <div className="xl:justify-center xl:flex xl:items-center xl:mb-10 xl:mt-14">
              <img
                src={textoRicadi}
                className="w-[50%] mx-auto mt-14 xl:w-[30%] xl:mr-44 2xl:mr-72 max-w-[400px]"
              />
              <p className="text-lg text-white text-justify font-semibold w-[80%] max-w-[1000px] mx-auto mt-10 font-maven-pro mb-10 md:text-2xl xl:w-[520px] xl:mb-0">
                Na <span className="font-bold text-[#AAE9FF]">RICADI</span>,
                transformar incertezas em tranquilidade é o nosso compromisso.
                Escolha estar seguro, escolha estar{" "}
                <span className="font-bold text-[#AAE9FF]">com a gente.</span>
              </p>
            </div>
            <div className="ml-5 xl:ml-3 2xl:ml-0">
              <ContactButtom
                color="bg-blueRICADI"
                textColor="text-secondWhiteRICADI"
                hoverBorder="hover:border-secondWhiteRICADI"
                hoverText="hover:text-secondWhiteRICADI"
              />
            </div>
          </motion.div>
        </div>
        {/* Por que escolher a ricadi */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="mt-40 text-2xl font-bold text-center font-asap">
            Por que escolher a{" "}
            <span className="font-bold text-textBlue">RICADI</span>?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-10 mt-20 xl:gap-20">
            {[
              {
                icon: <TiLocationArrowOutline />,
                title: "Estamos a um passo de você",
                description:
                  "Estamos localizados na Rua 25 de Julho, nº 695, Sala 07, Vila Nova, Jaraguá do Sul, SC, CEP: 89259-000.  Venha nos visitar!",
              },
              {
                icon: <FaHandHoldingMedical />,
                title: "Seguro ideal para você",
                description:
                  "O seguro perfeito para você. Acessível, personalizado e feito para atender todas as suas necessidades",
              },
              {
                icon: <BiCheckShield />,
                title: "Credibilidade e Confiança",
                description:
                  "Com anos de experiência no mercado, somos reconhecidos pela qualidade de nossos serviços e pela confiança de nossos clientes.",
              },
            ].map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: index * 0.2 }}
                viewport={{ once: false }}
                key={index}
                className="text-whiteRICADI p-7 pt-4 rounded-xl mx-5 w-[330px] h-[100%] max-h-[300px] bg-blueRICADI xl:w-[420px] xl:h-[320px] xl:pt-7 md:mx-0"
              >
                <p className="text-[4rem]">{item.icon}</p>
                <h3 className="mt-4 text-xl font-bold text-start font-asap xl:text-2xl xl:mt-7">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg font-normal text-justify text-gray-400 font-maven-pro xl:text-xl">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Seguros */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="p-2 mt-32 text-center mb-32"
        >
          <h2 className="p-5 text-2xl font-bold font-asap text-blueRICADI">
            Encontre o seguro{" "}
            <span className="text-textBlue">ideal para você</span>
          </h2>
          <AllInsurance />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="flex flex-col justify-center items-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-2xl font-bold font-asap text-blueRICADI mx-5 text-center hidden xl:block"
          >
            Tem alguma <span className="text-textBlue">cotação</span> em mente?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="flex flex-col justify-center items-center mx-5 bg-gradient-to-br from-[#134564] xl:via-[#0B2E43] xl:to-[#134564] to-[#0B2E43] rounded-lg p-10 mt-10 xl:bg-none xl:p-0"
          >
            <div className="flex flex-col justify-center items-center xl:hidden">
              <img src={ricadiLogotipo} className="w-[100%] max-w-[300px]" />
              <div>
                <h3 className="text-xl mt-10 text-center font-bold font-asap text-whiteRICADI">
                  Tem alguma cotação em mente?
                </h3>
                <p className="text-justify mt-5 text-lg font-maven-pro text-whiteRICADI max-w-[400px]">
                  Proteja o que realmente importa! Preencha o formulário e
                  descubra como podemos garantir a sua segurança com as melhores
                  soluções em seguros.
                </p>
              </div>
            </div>
            <h3 className="text-xl mt-10 text-center font-bold font-asap text-whiteRICADI max-w-[400px] xl:hidden">
              Acesse o nosso formulário e solicite sua cotação!
            </h3>
            <div className="mt-10">
              <img
                src={ricadiForms}
                className="rounded-tl-lg rounded-tr-lg m-0 p-0 w-full max-w-[400px] xl:max-w-[1000px]"
              />
              <div className="flex flex-col justify-center items-center mt-[-1px] p-5 pt-2 bg-[#0A4C6A] rounded-bl-lg rounded-br-lg xl:pt-5 xl:mt-[-10px]">
                <div className="hidden justify-between items-center xl:flex xl:gap-32">
                  <img
                    src={ricadiFormsLogotipo}
                    className="w-[100%] max-w-[350px]"
                  />
                  <p className="text-justify mt-5 text-lg font-maven-pro text-whiteRICADI max-w-[400px] xl:mt-0">
                    Proteja o que realmente importa! Preencha o formulário e
                    descubra como podemos garantir a sua segurança com as
                    melhores soluções em seguros.
                  </p>
                </div>
                <button className="text-whiteRICADI text-sm font-bold hover:bg-white/10 hover:scale-[1.01] font-asap w-full border-2 border-whiteRICADI rounded-md p-2 max-w-[400px] xl:bg-whiteRICADI xl:text-blueRICADI xl:mt-10 xl:max-w-[880px] xl:p-4 xl:font-extrabold xl:text-xl xl:hover:bg-transparent xl:hover:text-white transition-colors xl:border-[3px]">
                  Solicite sua cotação
                </button>
                <p className="text-whiteRICADI text-[10px] text-center mt-5 font-maven-pro thin:text-[15px] max-w-[400px] xl:hidden">
                  Responderemos assim que possível
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        {/* O que torna a ricadi única */}
        <div>
          <UniqueRicadi />
        </div>
        <div className="flex justify-center items-center w-full h-[100px] bg-gradient-to-bl from-[#0B2E43] xl:via-[#134564] xl:to-[#0B2E43] to-[#134564] big:bg-none">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-blueRICADI text-2xl font-bold font-asap hidden big:block big:mt-32"
          >
            Quer ajuda para formular uma{" "}
            <span className="text-textBlue">ideia</span>?
          </motion.div>
        </div>
        <div className="big:mt-32">
          <TellUs />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
