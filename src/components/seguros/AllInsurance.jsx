import { useState } from "react";
import { BiSolidShieldPlus } from "react-icons/bi";
import { BsFillChatTextFill } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import {
  FaAddressCard,
  FaBriefcase,
  FaCar,
  FaHandHoldingMedical,
  FaTruck,
} from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { PiAirplaneBold } from "react-icons/pi";
import { GiHealthNormal, GiKnifeFork } from "react-icons/gi";
import { TbBuilding, TbDental } from "react-icons/tb";
import Modal from "../Modal/Modal";

export default function AllInsurance() {
  const [tipoSeguro, setTipoSeguro] = useState("pessoal");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSeguro, setSelectedSeguro] = useState(null);

  const handleOpenModal = (seguro) => {
    setSelectedSeguro(seguro);
    setModalOpen(true);
  };

  const segurosPessoais = [
    {
      icon: <PiAirplaneBold className="text-4xl text-blueRICADI" />,
      title: "Viagem",
      description:
        "Seguro viagem para você explorar o mundo com tranquilidade e segurança",
      advancedDescription:
        "Viaje sem preocupações! Nosso seguro viagem oferece cobertura completa para emergências médicas, extravio de bagagens, cancelamentos inesperados e muito mais. Conte com assistência 24h em qualquer lugar do mundo e aproveite cada momento da sua viagem com segurança e tranquilidade.",
      visible: true,
      whatsappText:
        "Olá! Gostaria de mais informações sobre o seguro viagem. Como funciona a cobertura e quais são os planos disponíveis?",
    },
    {
      icon: <CgFileDocument className="text-4xl text-blueRICADI" />,
      title: "Consórcio",
      description: "Planos de consórcio para realizar seus sonhos com economia",
      advancedDescription:
        "Chegou a hora de conquistar seus sonhos! Com nossos planos de consórcio, você pode adquirir imóveis, veículos e diversos bens de forma planejada e econômica, sem juros abusivos. Flexibilidade, segurança e transparência para você investir no seu futuro.",
      visible: true,
      whatsappText:
        "Olá! Quero saber mais sobre os planos de consórcio. Quais as opções disponíveis e como posso participar?",
    },
    {
      icon: <BiSolidShieldPlus className="text-4xl text-blueRICADI" />,
      title: "Saúde",
      description:
        "Proteja sua saúde e de sua família com os melhores planos personalizados",
      advancedDescription:
        "Sua saúde em primeiro lugar! Oferecemos planos de saúde completos, com ampla rede credenciada, cobertura nacional e atendimento de qualidade para garantir o seu bem-estar e de sua família em qualquer momento.",
      visible: true,
      whatsappText:
        "Olá! Estou interessado em um plano de saúde. Poderia me passar mais detalhes sobre os planos disponíveis e os valores?",
    },
    {
      icon: <IoPhonePortraitOutline className="text-4xl text-blueRICADI" />,
      title: "Eletrônicos",
      description:
        "Garanta a proteção dos seus dispositivos contra danos e imprevistos",
      advancedDescription:
        "Proteja seus dispositivos contra roubo, queda, derramamento de líquidos e outros imprevistos. Com nosso seguro para eletrônicos, você tem reposição rápida, suporte técnico especializado e cobertura nacional para seus equipamentos.",
      visible: true,
      whatsappText:
        "Olá! Gostaria de contratar um seguro para meus eletrônicos. Como funciona a cobertura e quais dispositivos são aceitos?",
    },
    {
      icon: <FaCar className="text-4xl text-blueRICADI" />,
      title: "Automóvel",
      description:
        "Seguro automotivo para cuidar do seu veículo e sua segurança",
      advancedDescription:
        "Dirija com tranquilidade! Nosso seguro automotivo oferece assistência 24h, cobertura contra roubos, colisões e danos a terceiros, além de diversos benefícios para garantir sua segurança e do seu veículo.",
      visible: true,
      whatsappText:
        "Olá! Quero um seguro para meu carro. Poderia me informar os planos e coberturas disponíveis?",
    },
    {
      icon: <FaHouse className="text-4xl text-blueRICADI" />,
      title: "Casa",
      description:
        "Proteja o seu lar contra imprevistos e cuide do que é mais importante",
      advancedDescription:
        "Seu lar sempre seguro! Oferecemos proteção contra incêndios, roubos, danos elétricos, desastres naturais e muito mais. Além disso, você conta com assistência residencial para emergências, como chaveiro e encanador.",
      visible: true,
      whatsappText:
        "Olá! Gostaria de mais informações sobre o seguro residencial. Como funciona a cobertura?",
    },
    {
      icon: <FaHandHoldingMedical className="text-4xl text-blueRICADI" />,
      title: "Previdência",
      description:
        "Garanta um futuro seguro e tranquilo para sua família com nossos planos de previdência.",
      advancedDescription:
        "Planeje seu futuro com segurança! Com nossos planos de previdência, você constrói uma reserva financeira sólida para garantir estabilidade e tranquilidade para você e sua família. Flexibilidade e rentabilidade para um amanhã mais seguro.",
      visible: true,
      whatsappText:
        "Olá! Estou interessado em um plano de previdência. Como funciona e quais são as vantagens?",
    },
    {
      icon: <BsFillChatTextFill className="text-4xl text-blueRICADI" />,
      title: "Outros",
      description:
        "Seguros adaptados às suas necessidades, para garantir sua tranquilidade.",
      advancedDescription:
        "Soluções personalizadas para cada momento da sua vida. Nossos seguros são adaptáveis às suas necessidades específicas, garantindo proteção sob medida para você e sua família.",
      visible: true,
      whatsappText:
        "Olá! Tenho uma necessidade específica de seguro. Poderia me ajudar a encontrar a melhor solução?",
    },
  ];

  const segurosEmpresariais = [
    {
      icon: <FaAddressCard className="text-4xl text-blueRICADI" />,
      title: "Cartão de benefícios",
      description:
        "Gestão de benefícios para seus colaboradores com segurança.",
      advancedDescription:
        "Incentive e valorize sua equipe! Oferecemos cartões de benefícios flexíveis, permitindo personalização conforme as necessidades da empresa, proporcionando maior satisfação e retenção dos colaboradores.",
      visible: true,
      whatsappText:
        "Olá! Gostaria de mais informações sobre o cartão de benefícios para empresas. Como funciona e quais são as vantagens?",
    },
    {
      icon: <GiHealthNormal className="text-4xl text-blueRICADI" />,
      title: "Plano de saúde",
      description:
        "Cuide do bem-estar da sua equipe com os melhores planos de saúde.",
      advancedDescription:
        "Cuide da saúde dos seus colaboradores com os melhores planos empresariais. Cobertura ampla, atendimento de qualidade e suporte especializado para garantir o bem-estar da sua equipe.",
      visible: true,
      whatsappText:
        "Olá! Estou interessado em um plano de saúde empresarial. Poderia me informar mais detalhes sobre os planos disponíveis?",
    },
    {
      icon: <TbBuilding className="text-4xl text-blueRICADI" />,
      title: "Patrimonial",
      description:
        "Proteja os bens da sua empresa contra imprevistos e riscos variados.",
      advancedDescription:
        "Segurança para seu patrimônio! Nosso seguro empresarial protege seu imóvel, equipamentos, estoques e outros bens essenciais contra incêndios, roubos, desastres naturais e demais imprevistos.",
      visible: true,
      whatsappText:
        "Olá! Gostaria de saber mais sobre o seguro patrimonial para empresas. Como funciona a cobertura?",
    },
    {
      icon: <FaBriefcase className="text-4xl text-blueRICADI" />,
      title: "Vida empresarial",
      description:
        "Segurança e estabilidade financeira para seus funcionários e seus familiares.",
      advancedDescription:
        "Valorize sua equipe! O seguro de vida empresarial garante proteção financeira para seus funcionários e seus familiares, oferecendo segurança e tranquilidade para todos.",
      visible: true,
      whatsappText:
        "Olá! Quero mais informações sobre o seguro de vida empresarial. Como funciona e quais são os benefícios?",
    },
    {
      icon: <GiKnifeFork className="text-4xl text-blueRICADI" />,
      title: "Alimentação e refeição",
      description:
        "Benefícios garantindo a refeição de qualidade aos colaboradores.",
      advancedDescription:
        "Forneça qualidade de vida aos seus colaboradores com cartões de alimentação e refeição aceitos em milhares de estabelecimentos, garantindo refeições saudáveis e bem-estar para sua equipe.",
      visible: true,
      whatsappText:
        "Olá! Gostaria de saber mais sobre os cartões de alimentação e refeição para empresas. Como posso contratar?",
    },
    {
      icon: <TbDental className="text-4xl text-blueRICADI" />,
      title: "Odontológico",
      description:
        "Planos odontológicos completos para o cuidado da saúde bucal da equipe.",
      advancedDescription:
        "Sorriso saudável para sua equipe! Nossos planos odontológicos empresariais oferecem ampla cobertura para tratamentos preventivos, ortodontia, cirurgias e mais.",
      visible: true,
      whatsappText:
        "Olá! Estou interessado em um plano odontológico empresarial. Poderia me passar mais detalhes?",
    },
    {
      icon: <FaTruck className="text-4xl text-blueRICADI" />,
      title: "Frota e transporte",
      description:
        "Seguro para veículos empresariais, garantindo tranquilidade e proteção.",
      advancedDescription:
        "Mantenha sua frota protegida! Cobertura completa para veículos empresariais, garantindo assistência 24h, reposição de veículos e proteção contra roubos, colisões e danos.",
      visible: true,
      whatsappText:
        "Olá! Gostaria de um seguro para a frota da minha empresa. Como funciona a cobertura?",
    },
    {
      icon: <BsFillChatTextFill className="text-4xl text-blueRICADI" />,
      title: "Outros",
      description:
        "Soluções personalizadas para atender às necessidades do seu negócio.",
      advancedDescription:
        "Cada empresa tem necessidades únicas. Oferecemos soluções personalizadas para proteger seu negócio e garantir sua tranquilidade.",
      visible: true,
      whatsappText:
        "Olá! Tenho uma necessidade específica de seguro para minha empresa. Poderia me ajudar a encontrar a melhor solução?",
    },
  ];

  const seguros =
    tipoSeguro === "pessoal" ? segurosPessoais : segurosEmpresariais;

  // Filtrar seguros visíveis
  const segurosVisiveis = seguros.filter((seguro) => seguro.visible);

  return (
    <div className="bg-[#D2D5D6] p-3 rounded-lg mt-10 w-full max-w-[1000px] mx-auto small:p-5 lg:px-0">
      <div className="flex justify-center mb-5">
        <button
          className={`font-bold text-white w-[180px] rounded-l-lg p-2 text-lg ${
            tipoSeguro === "pessoal" ? "bg-[#02465D]" : "bg-blueRICADI"
          }`}
          onClick={() => setTipoSeguro("pessoal")}
        >
          Para Você
        </button>
        <button
          className={`font-bold text-white w-[180px] rounded-r-lg p-2 text-lg ${
            tipoSeguro === "empresarial" ? "bg-[#02465D]" : "bg-blueRICADI"
          }`}
          onClick={() => setTipoSeguro("empresarial")}
        >
          Sua Empresa
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5 lg:justify-start lg:px-[120px]">
        {segurosVisiveis.map((seguro, index) => (
          <div
            key={index}
            className="flex relative flex-col items-center p-4 text-center rounded-lg shadow-md bg-[#F0F0F0] w-[150px] h-[170px] small:w-[200px] small:h-[210px] small:text-[14px] small:cursor-pointer lg:w-[240px] lg:h-[200px]"
            onClick={() => handleOpenModal(seguro)}
          >
            <p>{seguro.icon}</p>
            <h3 className="mt-3 text-xl font-bold font-asap text-blueRICADI">
              {seguro.title}
            </h3>
            <p className="hidden font-maven-pro mt-2 text-justify text-[#02465D] font-semibold small:flex text-[14px] small:pt-2">
              {seguro.description}
            </p>
            <button className="small:hidden absolute bottom-3 text-secondWhiteRICADI bg-blueRICADI font-asap font-bold w-[100px] h-[30px] rounded-md mt-2 hover:scale-[1.01] shadow-md">
              Ver mais
            </button>
          </div>
        ))}
      </div>

      {modalOpen && selectedSeguro && (
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          icon={selectedSeguro.icon}
          title={selectedSeguro.title}
          description={
            selectedSeguro.advancedDescription || selectedSeguro.description
          }
          whatsappText={selectedSeguro.whatsappText}
        />
      )}
    </div>
  );
}