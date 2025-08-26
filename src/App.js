import logo from "./github-actions-logo.svg";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Studying Github Actions with React App...</p>
        <div className="button-container">
          <motion.a
            className="App-link animated-button"
            href="https://github.com/Sun0328/action-playground"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 1, rotateX: 0 }}
            whileHover={{
              scale: 1.08,
              rotateX: 8,
              rotateY: 2,
              boxShadow: "0 12px 30px rgba(97, 218, 251, 0.4)",
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            whileTap={{
              scale: 0.92,
              transition: { duration: 0.15 },
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              backgroundPosition: {
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: 0,
              },
            }}
          >
            <motion.span
              className="button-text"
              initial={{ x: 0 }}
              whileHover={{
                x: 8,
                transition: { duration: 0.4, delay: 0.1 },
              }}
            >
              🐙 GitHub Repo
            </motion.span>
            <motion.div
              className="button-arrow"
              initial={{ x: 0, opacity: 0.7 }}
              whileHover={{
                x: 15,
                opacity: 1,
                transition: { duration: 0.4, delay: 0.15 },
              }}
            >
              →
            </motion.div>
          </motion.a>

          <motion.a
            className="App-link animated-button"
            href="https://docs.github.com/en/actions/get-started/understand-github-actions"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 1, rotateX: 0 }}
            whileHover={{
              scale: 1.06,
              rotateX: -6,
              rotateY: -2,
              boxShadow: "0 8px 20px rgba(97, 218, 251, 0.35)",
              transition: { duration: 0.35, ease: "easeInOut" },
            }}
            whileTap={{
              scale: 0.94,
              transition: { duration: 0.12 },
            }}
            animate={{
              backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
            }}
            transition={{
              backgroundPosition: {
                duration: 3.5,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5,
              },
            }}
          >
            <motion.span
              className="button-text"
              initial={{ x: 0 }}
              whileHover={{
                x: 6,
                transition: { duration: 0.35, delay: 0.05 },
              }}
            >
              📚 Github Actions Documentation
            </motion.span>
            <motion.div
              className="button-arrow"
              initial={{ x: 0, opacity: 0.7 }}
              whileHover={{
                x: 12,
                opacity: 1,
                transition: { duration: 0.35, delay: 0.1 },
              }}
            >
              →
            </motion.div>
          </motion.a>
        </div>
      </header>
    </div>
  );
}

export default App;
