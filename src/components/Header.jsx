import { motion } from "framer-motion";
import logoRicadi from "../assets/ricadi logo.png";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-5 bg-transparent"
    >
      {/* <img src={logoRicadi} className="w-10 xl:w-14" /> */}
    </motion.div>
  );
}
