import ContactButtom from "./ContactButtom";
import { FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <>
      <div className="mt-10 p-10">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <h2 className="mb-5 sm:mb-0 text-2xl text-blueRICADI font-asap font-bold">
            Gostou da <span className="text-secondBlueRICADI">RICADI</span>?
          </h2>
          <ContactButtom
            color="bg-blueRICADI"
            textColor="text-secondWhiteRICADI"
            hoverBorder="hover:border-blueRICADI"
            hoverText="hover:text-blueRICADI"
          />
        </div>

        <div className="container mt-20 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800">
          {/* Atendimento */}
          <div>
            <h3 className="text-2xl font-bold text-blueRICADI font-asap">
              Atendimento
            </h3>
            <p className="font-maven-pro font-bold text-gray-500">
              Segunda a sexta
            </p>
            <p className="font-maven-pro font-bold text-gray-500">
              08:00 às 12:00
            </p>
            <p className="font-maven-pro font-bold text-gray-500">
              13:30 às 17:30
            </p>
            <br />
            <p className="font-bold text-blueRICADI">Telefone</p>
            <p className="font-maven-pro font-bold text-gray-500">
              (47) 99973-5229
            </p>
            <br />
            <p className="font-bold text-blueRICADI">Email</p>
            <p className="font-maven-pro font-bold text-gray-500">
              ricadiseguros@gmail.com
            </p>
          </div>

          {/* Acompanhe */}
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-bold text-blueRICADI font-asap">
              Acompanhe
            </h3>
            <div className="flex gap-4 mt-2">
              <button className="bg-blueRICADI text-white p-3 rounded-lg text-xl">
                <FaInstagram />
              </button>
              <button className="bg-blueRICADI text-white p-3 rounded-lg text-xl">
                <FaMapMarkerAlt />
              </button>
              <button className="bg-blueRICADI text-white p-3 rounded-lg text-xl">
                <IoStarOutline />
              </button>
            </div>
            <p className="mt-2 font-maven-pro font-bold text-gray-500">
              Suporte
            </p>
          </div>

          {/* Localização */}
          <div>
            <h3 className="text-2xl font-bold text-blueRICADI font-asap">
              Venha até nós
            </h3>
            <p className="flex items-center gap-2 font-maven-pro font-bold text-gray-500">
              <FaMapMarkerAlt className="text-blueRICADI" />
              Jaraguá do Sul - SC
            </p>
            <div className="mt-4">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1061.5515258410899!2d-49.081722536602236!3d-26.500193769722763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94de952071dd8229%3A0xc9986aee75bb8dfd!2sR.%2025%20de%20Julho%2C%20695%20-%2007%20-%20Vila%20Nova%2C%20Jaragu%C3%A1%20do%20Sul%20-%20SC%2C%2089259-000!5e0!3m2!1spt-BR!2sbr!4v1739936759511!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-32 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
