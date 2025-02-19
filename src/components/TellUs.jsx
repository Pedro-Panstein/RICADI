import { doc, getDoc, increment, setDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebaseConfig";

export default function TellUs() {
  const [clicked, setClicked] = useState(false);

  const handleClick = async () => {
    const clickKey = "hasClicked";
    localStorage.setItem(clickKey, "true");

    const docRef = doc(db, "Banco de acessos", "RICADI");

    try {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        await updateDoc(docRef, { "Cliques no botão": increment(1) });
      } else {
        await setDoc(docRef, { "Cliques no botão": 1 });
      }
    } catch (error) {
      console.error("Erro ao acessar ou atualizar cliques no botão:", error);
    }

    setClicked(true);
  };

  return (
    <>
      <div
        id="bannerTell"
        className="flex justify-center items-center bg-cover bg-center bg-no-repeat bg-gradient-to-br from-[#134564] xl:via-[#0B2E43] xl:to-[#134564] to-[#0B2E43]  h-[800px]"
      >
        <div className="bg-whiteRICADI p-10 rounded-lg flex justify-center items-center flex-col">
          <h2 className="font-asap text-3xl font-bold text-blueRICADI">
            Fale conosco
          </h2>
          <p className="text-blueRICADI/70 font-semibold pt-5">
            Entre em contato e tire suas dúvidas com a nossa equipe
          </p>
          <div className="flex flex-col gap-1 pt-5 w-full">
            <label className="font-maven-pro text-blueRICADI font-semibold">
              Nome
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="bg-transparent border-2 outline-none font-maven-pro font-semibold text-blueRICADI focus:bg-blueRICADI/5 border-blueRICADI rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col gap-2 pt-5 w-full">
            <label className="font-maven-pro text-blueRICADI font-semibold">
              Email
            </label>
            <input
              type="text"
              placeholder="Digite seu Email"
              className="bg-transparent border-2 outline-none font-maven-pro font-semibold text-blueRICADI focus:bg-blueRICADI/5 border-blueRICADI rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col gap-2 pt-5 w-full">
            <label className="font-maven-pro text-blueRICADI font-semibold">
              Telefone
            </label>
            <input
              type="text"
              placeholder="(xx) xxxx-xxxx"
              className="bg-transparent border-2 outline-none font-maven-pro font-semibold text-blueRICADI focus:bg-blueRICADI/5 border-blueRICADI rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col gap-2 pt-5 w-full">
            <label className="font-maven-pro text-blueRICADI font-semibold">
              Mensagem
            </label>
            <textarea
              type="text"
              placeholder="Deixe sua Mensagem..."
              className="bg-transparent border-2 outline-none font-maven-pro font-semibold text-blueRICADI focus:bg-blueRICADI/5 border-blueRICADI rounded-lg p-2 h-40 resize-none"
            />
          </div>
          <button
            onClick={handleClick}
            className={`px-4 py-2 text-lg mt-5 w-full font-semibold rounded-lg shadow-md font-maven-pro border-2 border-transparent transition-colors lg:text-[1.2rem] bg-blueRICADI text-whiteRICADI hover:bg-transparent hover:border-blueRICADI hover:text-blueRICADI`}
          >
            Enviar Mensagem
          </button>
        </div>
      </div>
    </>
  );
}
