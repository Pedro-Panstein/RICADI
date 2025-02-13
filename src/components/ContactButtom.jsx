import { doc, getDoc, updateDoc, increment, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Caminho para o arquivo firebaseConfig.
import { useState } from "react";

export default function ContactButtom({
  color,
  textColor,
  hoverBorder,
  hoverText,
}) {
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
    <button
      onClick={handleClick}
      className={`px-4 py-2 text-lg font-semibold rounded-lg shadow-md font-maven-pro border-2 border-transparent transition-colors lg:text-[1.2rem] md:px-6 md:py-4 ${color} ${textColor} hover:bg-transparent ${hoverBorder} ${hoverText}`}
    >
      Faça sua cotação
    </button>
  );
}
