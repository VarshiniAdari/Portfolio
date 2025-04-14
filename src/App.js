import React, { useState } from "react";
import { FaMoon, FaSun, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SemPrep",
    description: "AI-powered notes generator for semester prep.",
    link: "https://github.com/VarshiniAdari/SemPrep",
  },
  {
    title: "Lord Rama's Gallery",
    description: "Ramayana-themed PHP + MySQL quiz app.",
    link: "https://github.com/VarshiniAdari/Lord-Rama-s-Gallery",
  },
  {
    title: "Attendance Tracker",
    description: "Simple web app for managing student attendance.",
    link: "https://github.com/VarshiniAdari/SkipPro",
  },
];

const techStack = [
  "React.js",
  "Tailwind CSS",
  "JavaScript",
  "Python",
  "C",
  "Java",
  "MongoDB",
  "MySQL",
  "PHP",
  "AWS",
];

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <div className="max-w-6xl mx-auto p-6 space-y-16">
        {/* Toggle */}
        <div className="flex justify-end">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full text-xl transition-all"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* About Me */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold">Hi, I'm Varshini Adari 👋</h1>
          <p className="text-lg">
            A passionate CSE student from ANITS (2022–2026 batch). I love
            coding, building creative projects, and learning new technologies.
          </p>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-gray-700 hover:bg-indigo-600 text-white shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-3">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline text-indigo-200"
                >
                  View Project →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Experience</h2>
          <p>
            <strong>Amazon - SDE Intern (May–June 2024):</strong> Worked on
            automating DynamoDB entries, refactored SAM Lambda workflows, and
            monitored systems using AWS CloudWatch. Used over 10 AWS services.
          </p>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-indigo-500 text-white rounded-full text-sm hover:scale-110 transition-transform"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Resume */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold mb-4">Resume</h2>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
          >
            Download Resume
          </a>
        </motion.section>

        {/* Footer */}
        <footer className="text-center text-sm pt-10 border-t border-gray-600">
          <p className="mb-2">© 2025 Varshini Adari</p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/VarshiniAdari" target="_blank" rel="noreferrer">
              <FaGithub size={22} />
            </a>
            <a href="https://linkedin.com/in/varshini-adari" target="_blank" rel="noreferrer">
              <FaLinkedin size={22} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
