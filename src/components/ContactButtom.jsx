import { doc, getDoc, updateDoc, increment, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Caminho para o arquivo firebaseConfig.
import { useState } from "react";

export default function ContactButtom() {
  const [clicked, setClicked] = useState(false);

  const handleClick = async () => {
    const clickKey = "hasClicked"; // Chave única para identificar o clique

    localStorage.setItem(clickKey, "true");

    const docRef = doc(db, "Banco de acessos", "RICADI"); // Referência ao Firestore

    try {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        await updateDoc(docRef, {
          "Cliques no botão": increment(1),
        });
      } else {
        await setDoc(docRef, { "Cliques no botão": 1 });
      }
    } catch (error) {
      console.error("Erro ao acessar ou atualizar cliques no botão:", error);
    }

    // Atualiza o estado para marcar que o botão foi clicado
    setClicked(true);
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 text-lg font-semibold rounded-lg shadow-md text-white font-maven-pro hover:bg-blueRICADI/90 transition-colors bg-blueRICADI lg:text-[1.2rem] md:px-6 md:py-4"
    >
      Faça sua cotação
    </button>
  );
}
