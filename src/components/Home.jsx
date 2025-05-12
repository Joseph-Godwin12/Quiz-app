import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export default function Home() {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600 text-white p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Welcome to the Quiz App!
      </motion.h1>

      <motion.h2 
        className="text-2xl mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Select a Profession
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
        {[
          { path: "/quiz/frontend", label: "Frontend Developer" },
          { path: "/quiz/backend", label: "Backend Developer" },
          { path: "/quiz/dataScience", label: "Data Scientist" },
          { path: "/quiz/devOps", label: "DevOps Engineer" },
          { path: "/quiz/cybersecurity", label: "Cybersecurity Analyst" },
          { path: "/quiz/uiux", label: "UI/UX Designer" },
        ].map((item, index) => (
          <MotionLink
            to={item.path}
            key={item.path}
            className="bg-white text-blue-600 py-2 px-4 rounded shadow hover:bg-blue-100 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
          >
            {item.label}
          </MotionLink>
        ))}
      </div>
    </motion.div>
  );
}
