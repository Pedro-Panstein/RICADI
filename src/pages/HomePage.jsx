//Componentes
import Header from "../components/Header";

//Imagens
import textoRicadi from "../assets/Texto RICADI.png";
import ContactButtom from "../components/ContactButtom";
import { TiLocationArrowOutline } from "react-icons/ti";
import { BiCheckShield } from "react-icons/bi";
import { FaHandHoldingMedical } from "react-icons/fa";

export default function HomePage() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="p-5">
        <div className="flex flex-col items-center justify-center">
          <div className="xl:justify-center xl:flex xl:items-center xl:mb-32 xl:mt-14">
            <img
              src={textoRicadi}
              className="w-[50%] mx-auto mt-14 xl:w-[30%]"
            />
            <p className="text-lg text-justify font-semibold w-[80%] mx-auto mt-10 font-maven-pro mb-20 md:text-2xl xl:w-[520px] xl:mb-0">
              Na <span className="font-bold text-textBlue">RICADI</span>,
              transformar incertezas em tranquilidade é o nosso compromisso.
              Escolha estar seguro, escolha esta{" "}
              <span className="font-bold text-textBlue">com a gente.</span>
            </p>
          </div>
          <ContactButtom />
        </div>
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
                className="text-whiteRICADI p-7 pt-2 rounded-xl w-[350px] h-[270px] mx-auto bg-blueRICADI xl:w-[420px] xl:h-[320px] xl:pt-7 md:mx-0"
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
      </div>
    </>
  );
}
