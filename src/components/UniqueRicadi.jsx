import { useEffect } from "react"; // Importando o useEffect
import { FiShield } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { MdOutlineSpeed, MdSupportAgent } from "react-icons/md";

import js from "../script/carousel"; // Importando o script JS
import { IoIosArrowForward } from "react-icons/io";

export default function UniqueRicadi() {
  useEffect(() => {
    // Carregar o código JS após a renderização do componente
    import("../script/carousel").then((carousel) => {
      carousel.initCarousel(); // Chama a função de inicialização após o carregamento
    });
  }, []); // O array vazio garante que o useEffect seja executado apenas uma vez

  return (
    <>
      <div className="mt-32 text-center">
        <h2 className="text-2xl font-bold font-asap text-blueRICADI">
          O que torna a <span className="text-textBlue">RICADI</span> única?
        </h2>
        <div
          id="primary"
          style={{ display: "flex" }}
          className="relative flex flex-wrap justify-center items-center gap-20 mt-10 py-20 p-5 bg-gradient-to-br from-[#134564] xl:via-[#0B2E43] xl:to-[#134564] to-[#0B2E43]  h-[600px]"
        >
          {[
            {
              icon: <MdSupportAgent />,
              title: "Atendimento Personalizado",
              description:
                "Na RICADI, cada cliente é único. Nossa equipe especializada está pronta para ouvir suas necessidades e oferecer soluções sob medida, garantindo um atendimento humano, ágil e transparente.",
            },
            {
              icon: <FiShield />,
              title: "Compromisso com a Segurança",
              description:
                "Segurança é a nossa prioridade. Trabalhamos apenas com seguradoras confiáveis e oferecemos planos que protegem você e seu patrimônio, proporcionando tranquilidade em qualquer situação.",
            },
            {
              icon: <MdOutlineSpeed />,
              title: "Processo Simples e Rápido",
              description:
                "Sabemos que seu tempo é valioso. Por isso, tornamos a contratação e o gerenciamento do seu seguro descomplicados, com processos rápidos e eficientes, sem burocracia desnecessária.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 text-center text-white"
            >
              <div className="text-7xl">{benefit.icon}</div>
              <h3 className="my-5 text-2xl font-bold font-asap">
                {benefit.title}
              </h3>
              <p className="text-lg text-justify opacity-60 w-[350px] font-maven-pro">
                {benefit.description}
              </p>
            </div>
          ))}

          <div
            id="carousel"
            className="flex flex-wrap items-center justify-center gap-20"
          >
            {[
              {
                icon: <HiArrowPathRoundedSquare />,
                title: "Planos Flexiveis",
                description:
                  "Cada pessoa tem uma realidade diferente, e nossos seguros refletem isso. Oferecemos opções adaptáveis às suas necessidades e ao seu orçamento, garantindo a melhor proteção para você.",
              },
              {
                icon: <GoPeople />,
                title: "Equipe Especializada",
                description:
                  "Nossa equipe é formada por especialistas no setor de seguros, sempre atualizados para oferecer as melhores soluções e garantir que você tome decisões informadas e seguras.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 text-center text-white"
              >
                <div className="text-7xl">{benefit.icon}</div>
                <h3 className="my-5 text-2xl font-bold font-asap">
                  {benefit.title}
                </h3>
                <p className="text-lg text-justify opacity-60 w-[350px] font-maven-pro">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          <div className="absolute left-10">
            <IoIosArrowForward
              id="arrow1"
              className="text-3xl text-white rotate-180 cursor-pointer"
            />
          </div>
          <div className="absolute right-10">
            <IoIosArrowForward
              id="arrow2"
              className="text-3xl text-white cursor-pointer"
            />
          </div>
          <div
            id="carouselButtom"
            style={{ display: "none" }}
            className="absolute z-20 flex items-center justify-center gap-2 bottom-6"
          >
            <span
              id="buttom1"
              className="rounded-full w-[10px] h-[10px] cursor-pointer bg-white"
            ></span>
            <span
              id="buttom2"
              className="rounded-full w-[10px] h-[10px] cursor-pointer bg-[#7D7D7D]"
            ></span>
          </div>
        </div>
      </div>

      <div id="secondCarousel" style={{ display: "none" }}>
        <div className="relative flex flex-wrap justify-center w-full items-center gap-20 mt-10 py-20 p-5 bg-gradient-to-br from-[#134564] xl:via-[#0B2E43] xl:to-[#134564] to-[#0B2E43]  h-[600px]">
          {[
            {
              icon: <HiArrowPathRoundedSquare />,
              title: "Planos Flexiveis",
              description:
                "Cada pessoa tem uma realidade diferente, e nossos seguros refletem isso. Oferecemos opções adaptáveis às suas necessidades e ao seu orçamento, garantindo a melhor proteção para você.",
            },
            {
              icon: <GoPeople />,
              title: "Equipe Especializada",
              description:
                "Nossa equipe é formada por especialistas no setor de seguros, sempre atualizados para oferecer as melhores soluções e garantir que você tome decisões informadas e seguras.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 text-center text-white"
            >
              <div className="text-7xl">{benefit.icon}</div>
              <h3 className="my-5 text-2xl font-bold font-asap">
                {benefit.title}
              </h3>
              <p className="text-lg text-justify opacity-60 w-[350px] font-maven-pro">
                {benefit.description}
              </p>
            </div>
          ))}
          <div className="absolute left-10">
            <IoIosArrowForward
              id="arrow3"
              className="text-3xl text-white rotate-180 cursor-pointer"
            />
          </div>
          <div className="absolute right-10">
            <IoIosArrowForward
              id="arrow4"
              className="text-3xl text-white cursor-pointer"
            />
          </div>
          <div
            id="carouselButtom2"
            className="absolute z-20 flex items-center justify-center gap-2 bottom-6"
          >
            <span
              id="buttom3"
              className="rounded-full w-[10px] h-[10px] cursor-pointer bg-[#7D7D7D]"
            ></span>
            <span
              id="buttom4"
              className="rounded-full w-[10px] h-[10px] cursor-pointer bg-white"
            ></span>
          </div>
        </div>
      </div>
    </>
  );
}
