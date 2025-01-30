import logoRicadi from "../assets/Logo RICADI.png";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-5 bg-blueRICADI">
      <img src={logoRicadi} className="w-16" />
      <button className="px-4 py-4 text-sm font-bold rounded-lg text-blueRICADI font-maven-pro bg-whiteRICADI lg:text-[1.2rem]">
        Faça sua cotação
      </button>
    </div>
  );
}