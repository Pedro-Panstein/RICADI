import { BiSolidShieldPlus } from "react-icons/bi";
import { BsFillChatTextFill } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { FaCar, FaHandHoldingMedical } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { PiAirplaneBold } from "react-icons/pi";

export default function AllInsurance() {
  const seguros = [
    {
      icon: <PiAirplaneBold className="text-4xl text-blueRICADI" />,
      title: "Viagem",
      description:
        "Seguro viagem para você explorar o mundo com tranquilidade e segurança",
    },
    {
      icon: <CgFileDocument className="text-4xl text-blueRICADI" />,
      title: "Consórcio",
      description: "Planos de consórcio para realizar seus sonhos com economia",
    },
    {
      icon: <BiSolidShieldPlus className="text-4xl text-blueRICADI" />,
      title: "Saúde",
      description:
        "Proteja sua saúde e de sua família com os melhores planos personalizados",
    },
    {
      icon: <IoPhonePortraitOutline className="text-4xl text-blueRICADI" />,
      title: "Eletrônicos",
      description:
        "Garanta a proteção dos seus dispositivos contra danos e imprevistos",
    },
    {
      icon: <FaCar className="text-4xl text-blueRICADI" />,
      title: "Automóvel",
      description:
        "Seguro automotivo para cuidar do seu veículo e sua segurança",
    },
    {
      icon: <FaHouse className="text-4xl text-blueRICADI" />,
      title: "Casa",
      description:
        "Proteja o seu lar contra imprevistos e cuide do que é mais importante",
    },
    {
      icon: <FaHandHoldingMedical className="text-4xl text-blueRICADI" />,
      title: "Previdência",
      description:
        "Garanta um futuro seguro e tranquilo para você e sua família com nossos planos de previdência.",
    },
    {
      icon: <BsFillChatTextFill className="text-4xl text-blueRICADI" />,
      title: "Outros",
      description:
        "Oferecemos seguros variados, adaptados às suas necessidades, para garantir sua tranquilidade.",
    },
  ];

  return (
    <div className="bg-[#D2D5D6] p-3 rounded-lg mt-10 w-full max-w-[1000px] mx-auto small:p-5">
      <div className="flex justify-center mb-5">
        <button className="font-bold text-white bg-secondBlueRICADI font-asap w-[180px] rounded-l-lg p-2 text-lg">
          Para Você
        </button>
        <button className="font-bold text-white bg-blueRICADI font-asap w-[180px] rounded-r-lg p-2 text-lg">
          Sua Empresa
        </button>
      </div>

      {/* Lista de Seguros */}
      <div className="flex flex-wrap items-center justify-center gap-5">
        {seguros.map((seguro, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 text-center rounded-lg shadow-md bg-[#F0F0F0] w-[150px] h-[150px] small:w-[200px] small:h-[200px] small:text-[14px]"
          >
            <p>{seguro.icon}</p>
            <h3 className="mt-3 text-xl font-bold">{seguro.title}</h3>
            <p className="hidden mt-2 text-justify text-gray-600 small:flex text-md small:">
              {seguro.description}
            </p>
            <button className="small:hidden">Ver mais</button>
          </div>
        ))}
      </div>
    </div>
  );
}
