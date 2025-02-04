import logoRicadi from "../assets/ricadi logo.png";

export default function Header() {
  return (
    <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-5 bg-transparent">
      <img src={logoRicadi} className="w-10 xl:w-14" />
    </div>
  );
}
