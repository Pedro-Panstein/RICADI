//Componentes
import Header from "../components/Header";

//Imagens
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
          <div className="relative z-10 text-center xl:mb-32 xl:text-start">
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
          </div>
        </div>
        {/* Por que escolher a ricadi */}
        <div>
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
              <div
                key={index}
                className="text-whiteRICADI p-7 pt-4 rounded-xl w-[350px] h-[270px] mx-auto bg-blueRICADI xl:w-[420px] xl:h-[320px] xl:pt-7 md:mx-0"
              >
                <p className="text-[4rem]">{item.icon}</p>
                <h3 className="mt-4 text-xl font-bold text-start font-asap xl:text-2xl xl:mt-7">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg font-normal text-justify text-gray-400 font-maven-pro xl:text-xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* O que torna a ricadi única */}
        <div>
          <UniqueRicadi />
        </div>
        {/* Seguros */}
        <div className="p-2 mt-32 text-center ">
          <h2 className="p-5 text-2xl font-bold font-asap text-blueRICADI">
            Encontre o seguro{" "}
            <span className="text-textBlue">ideal para você</span>
          </h2>
          <AllInsurance />
        </div>
        <div>
          <TellUs />
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </>
  );
}
