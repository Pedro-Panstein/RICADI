import { IoClose } from "react-icons/io5";

export default function Modal({ isOpen, onClose, icon, title, description }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <button className="absolute text-xl top-2 right-2" onClick={onClose}>
          <IoClose />
        </button>
        <div className="flex flex-col items-center">
          <div className="text-5xl text-blueRICADI">{icon}</div>
          <h2 className="mt-3 text-2xl font-bold">{title}</h2>
          <p className="mt-2 text-center text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}