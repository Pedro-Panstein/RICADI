import { doc, getDoc, updateDoc, increment, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useState } from "react";

export default function ContactButtom({
  color,
  textColor,
  hoverBorder,
  hoverText,
  whatsappText,
}) {
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true); // Ativa o overlay de carregamento

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

    if (whatsappText !== undefined) {
      window.location.href = `https://wa.me/5547999735229?text=${whatsappText}?`;
    } else {
      window.location.href =
        "https://wa.me/5547999735229?text=Vi o site da RICADI e quero saber mais sobre as opções de seguro. Pode me passar mais informações!?";
    }
  };

  return (
    <>
      {/* Tela de loading com fundo escuro */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="w-16 h-16 border-4 border-white rounded-full animate-spin border-t-transparent"></div>
        </div>
      )}

      {/* Botão de contato */}
      <button
        onClick={handleClick}
        className={`px-4 py-2 text-lg font-semibold rounded-lg shadow-md font-maven-pro border-2 border-transparent transition-colors lg:text-[1.2rem] md:px-6 md:py-4 ${color} ${textColor} hover:bg-transparent ${hoverBorder} ${hoverText}`}
      >
        Faça sua cotação
      </button>
    </>
  );
}
