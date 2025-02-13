import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import ContactButtom from "../ContactButtom";

export default function Modal({
  isOpen,
  onClose,
  image,
  icon,
  title,
  description,
}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-[500px] p-6 m-5 bg-white rounded-lg shadow-lg">
        <button className="absolute text-xl top-2 right-2" onClick={onClose}>
          <IoClose className="text-3xl text-red-600 sm:text-5xl" />
        </button>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-10 mt-10 mb-12 sm:gap-14">
            {image && (
              <img
                src={image}
                className="absolute hidden left-6 top-6 w-[100px] thin:flex sm:relative sm:top-0 sm:left-0 sm:w-[150px]"
              />
            )}
            <h2 className="text-4xl font-bold font-asap text-blueRICADI sm:text-5xl">
              {title}
            </h2>
          </div>
          <p className="mb-10 max-w-[400px] text-justify text-gray-600 font-maven-pro">
            {description}
          </p>
          <ContactButtom
            color="bg-blueRICADI"
            textColor="text-secondWhiteRICADI"
            hoverBorder="hover:border-blueRICADI"
            hoverText="hover:text-blueRICADI"
          />
        </div>
      </div>
    </div>
  );
}
