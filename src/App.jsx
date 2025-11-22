import React, { useState } from "react";
import { motion } from "framer-motion";

// Animated Sea Green Laptop
const SeaGreenLaptop = () => {
  return (
    <motion.div
      className="relative hidden lg:block pointer-events-none"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <svg
        width="240"
        height="180"
        viewBox="0 0 240 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Laptop base */}
        <motion.g
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Laptop screen */}
          <motion.rect
            x="40"
            y="10"
            width="160"
            height="100"
            rx="4"
            fill="#20B2AA"
            fillOpacity="0.8"
            stroke="#2E8B57"
            strokeWidth="3"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Screen bezel */}
          <rect
            x="35"
            y="5"
            width="170"
            height="110"
            rx="6"
            fill="none"
            stroke="#2E8B57"
            strokeWidth="4"
          />
          {/* Screen content */}
          <rect
            x="50"
            y="25"
            width="140"
            height="70"
            rx="2"
            fill="white"
            fillOpacity="0.95"
          />
          {/* Code on screen */}
          <motion.text
            x="60"
            y="45"
            fontSize="10"
            fill="#2E8B57"
            fontFamily="monospace"
            fontWeight="600"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            flutter run
          </motion.text>
          <motion.text
            x="60"
            y="60"
            fontSize="10"
            fill="#20B2AA"
            fontFamily="monospace"
            animate={{
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            {"{"}
          </motion.text>
          <motion.text
            x="60"
            y="75"
            fontSize="10"
            fill="#2E8B57"
            fontFamily="monospace"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            return App();
          </motion.text>
          <motion.text
            x="60"
            y="90"
            fontSize="10"
            fill="#20B2AA"
            fontFamily="monospace"
            animate={{
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            {"}"}
          </motion.text>
          
          {/* Laptop base/keyboard */}
          <rect
            x="30"
            y="110"
            width="180"
            height="60"
            rx="6"
            fill="#2E8B57"
            fillOpacity="0.7"
            stroke="#20B2AA"
            strokeWidth="3"
          />
          {/* Keyboard keys */}
          <g opacity="0.6">
            <rect x="45" y="125" width="12" height="8" rx="1" fill="#20B2AA" />
            <rect x="60" y="125" width="12" height="8" rx="1" fill="#20B2AA" />
            <rect x="75" y="125" width="12" height="8" rx="1" fill="#20B2AA" />
            <rect x="90" y="125" width="12" height="8" rx="1" fill="#20B2AA" />
            <rect x="105" y="125" width="12" height="8" rx="1" fill="#20B2AA" />
            <rect x="120" y="125" width="12" height="8" rx="1" fill="#20B2AA" />
            <rect x="135" y="125" width="12" height="8" rx="1" fill="#20B2AA" />
            <rect x="150" y="125" width="12" height="8" rx="1" fill="#20B2AA" />
            <rect x="165" y="125" width="12" height="8" rx="1" fill="#20B2AA" />
            <rect x="180" y="125" width="12" height="8" rx="1" fill="#20B2AA" />
            <rect x="195" y="125" width="12" height="8" rx="1" fill="#20B2AA" />
          </g>
          {/* Trackpad */}
          <rect
            x="80"
            y="145"
            width="80"
            height="15"
            rx="2"
            fill="#20B2AA"
            fillOpacity="0.5"
            stroke="#2E8B57"
            strokeWidth="1.5"
          />
          
          {/* Hinge */}
          <rect
            x="35"
            y="108"
            width="170"
            height="4"
            fill="#2E8B57"
            fillOpacity="0.8"
          />
        </motion.g>
        
        {/* Floating code elements */}
        <motion.g
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <text
            x="20"
            y="60"
            fontSize="14"
            fill="#20B2AA"
            fillOpacity="0.4"
            fontFamily="monospace"
            fontWeight="bold"
          >
            {"{"}
          </text>
          <text
            x="200"
            y="140"
            fontSize="14"
            fill="#2E8B57"
            fillOpacity="0.4"
            fontFamily="monospace"
            fontWeight="bold"
          >
            {"}"}
          </text>
        </motion.g>
        
        {/* Sparkles */}
        <motion.circle
          cx="25"
          cy="90"
          r="3"
          fill="#20B2AA"
          fillOpacity="0.6"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="215"
          cy="50"
          r="2.5"
          fill="#2E8B57"
          fillOpacity="0.6"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </svg>
    </motion.div>
  );
};

// Animated Mobile Device Component for Header
const AnimatedMobileHeader = () => {
  return (
    <motion.div
      className="hidden md:flex items-center gap-2 ml-2"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <motion.div
        className="relative"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="32"
          height="48"
          viewBox="0 0 32 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary-500"
        >
          {/* Phone body */}
          <rect
            x="4"
            y="2"
            width="24"
            height="44"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          {/* Screen */}
          <rect
            x="6"
            y="6"
            width="20"
            height="32"
            rx="2"
            fill="currentColor"
            fillOpacity="0.1"
          />
          {/* Home indicator */}
          <rect
            x="12"
            y="42"
            width="8"
            height="2"
            rx="1"
            fill="currentColor"
            fillOpacity="0.6"
          />
          {/* App icons on screen */}
          <motion.circle
            cx="11"
            cy="15"
            r="2.5"
            fill="currentColor"
            fillOpacity="0.4"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.circle
            cx="21"
            cy="15"
            r="2.5"
            fill="currentColor"
            fillOpacity="0.4"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.circle
            cx="11"
            cy="25"
            r="2.5"
            fill="currentColor"
            fillOpacity="0.4"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
          <motion.circle
            cx="21"
            cy="25"
            r="2.5"
            fill="currentColor"
            fillOpacity="0.4"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </svg>
      </motion.div>
      {/* Floating particles around mobile */}
      <motion.div
        className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary-400/60"
        animate={{
          y: [0, -10, 0],
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full bg-primary-300/60"
        animate={{
          y: [0, 8, 0],
          opacity: [0.5, 0.9, 0.5],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </motion.div>
  );
};

// Scroll-triggered Decorative Elements Component
const SectionDecorations = ({ position = "right" }) => {
  return (
    <div className={`absolute ${position === "right" ? "right-0 top-0" : "left-0 top-0"} w-1/3 h-full pointer-events-none overflow-hidden opacity-15 z-0`}>
      {/* Large blur circles */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-primary-200/25 blur-3xl"
        initial={{ scale: 0, opacity: 0, x: position === "right" ? 150 : -150 }}
        whileInView={{ 
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
          x: position === "right" ? [150, 80, 150] : [-150, -80, -150],
        }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: "15%",
          [position === "right" ? "right" : "left"]: "5%",
        }}
      />
      <motion.div
        className="absolute w-56 h-56 rounded-full bg-primary-300/20 blur-2xl"
        initial={{ scale: 0, opacity: 0, y: -60 }}
        whileInView={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.45, 0.2],
          y: [-60, 10, -60],
        }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
        style={{
          top: "55%",
          [position === "right" ? "right" : "left"]: "15%",
        }}
      />
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-primary-400/15 blur-xl"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ 
          scale: [1, 1.6, 1],
          opacity: [0.15, 0.4, 0.15],
        }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
        style={{
          top: "35%",
          [position === "right" ? "right" : "left"]: "25%",
        }}
      />
      
      {/* Animated geometric shapes */}
      <motion.div
        className="absolute"
        initial={{ opacity: 0, y: 30, scale: 0 }}
        whileInView={{ 
          opacity: [0.4, 0.7, 0.4],
          y: [30, -10, 30],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: "8%",
          [position === "right" ? "right" : "left"]: "12%",
        }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <circle cx="25" cy="25" r="10" stroke="currentColor" strokeWidth="2.5" className="text-primary-400" fill="none" />
          <circle cx="25" cy="25" r="4" fill="currentColor" className="text-primary-500" />
          <circle cx="25" cy="25" r="1.5" fill="currentColor" className="text-white" />
        </svg>
      </motion.div>
      
      <motion.div
        className="absolute"
        initial={{ opacity: 0, x: position === "right" ? -30 : 30, scale: 0 }}
        whileInView={{ 
          opacity: [0.3, 0.6, 0.3],
          x: position === "right" ? [-30, 10, -30] : [30, -10, 30],
          rotate: [0, -120, -240],
          scale: [1, 1.3, 1],
        }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.8,
        }}
        style={{
          top: "65%",
          [position === "right" ? "right" : "left"]: "20%",
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path
            d="M20 8 L32 20 L20 32 L8 20 Z"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
            className="text-primary-300"
          />
          <circle cx="20" cy="20" r="3" fill="currentColor" className="text-primary-400" />
        </svg>
      </motion.div>

      {/* Wave-like lines */}
      <motion.svg
        className="absolute"
        width="120"
        height="80"
        viewBox="0 0 120 80"
        initial={{ opacity: 0 }}
        whileInView={{ 
          opacity: [0.2, 0.5, 0.2],
        }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: "75%",
          [position === "right" ? "right" : "left"]: "10%",
        }}
      >
        <motion.path
          d="M10 40 Q30 20, 50 40 T90 40"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-primary-300"
          animate={{
            pathLength: [0, 1, 0],
            d: [
              "M10 40 Q30 20, 50 40 T90 40",
              "M10 40 Q30 30, 50 40 T90 40",
              "M10 40 Q30 20, 50 40 T90 40",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>

      {/* Small floating dots */}
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-primary-400/40"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ 
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.5, 1],
          y: [0, -20, 0],
        }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        style={{
          top: "25%",
          [position === "right" ? "right" : "left"]: "35%",
        }}
      />
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-primary-500/50"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ 
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.8, 1],
          y: [0, 25, 0],
        }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          top: "80%",
          [position === "right" ? "right" : "left"]: "40%",
        }}
      />
    </div>
  );
};

// Animated Doodle Component
const AnimatedDoodle = () => {
  return (
    <div className="absolute -right-8 -top-8 hidden lg:block pointer-events-none opacity-50">
      <svg
        width="220"
        height="220"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-float-gentle"
      >
        {/* Floating code brackets */}
        <motion.g
          animate={{
            y: [0, -12, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M35 55 L25 80 L35 105"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary-400"
          />
          <path
            d="M165 55 L175 80 L165 105"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary-400"
          />
        </motion.g>

        {/* Mobile device doodle */}
        <motion.g
          animate={{
            y: [0, 10, 0],
            rotate: [0, -4, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <rect
            x="70"
            y="50"
            width="60"
            height="100"
            rx="10"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="text-primary-500"
          />
          <rect
            x="75"
            y="60"
            width="50"
            height="70"
            rx="5"
            fill="currentColor"
            className="text-primary-100"
            opacity="0.6"
          />
          <circle cx="100" cy="140" r="5" fill="currentColor" className="text-primary-500" />
        </motion.g>

        {/* Floating dots */}
        <motion.circle
          cx="45"
          cy="25"
          r="5"
          fill="currentColor"
          className="text-primary-300"
          animate={{
            y: [0, -18, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="155"
          cy="175"
          r="6"
          fill="currentColor"
          className="text-primary-400"
          animate={{
            y: [0, 15, 0],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
        />

        {/* Curved line decoration */}
        <motion.path
          d="M15 115 Q45 95, 75 115 T135 115"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          className="text-primary-300"
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Rotating star/sparkle */}
        <motion.g
          transform="translate(185, 35)"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <path
            d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z"
            fill="currentColor"
            className="text-primary-400"
            opacity="0.7"
          />
        </motion.g>

        {/* Small decorative circles */}
        <motion.circle
          cx="25"
          cy="170"
          r="3"
          fill="currentColor"
          className="text-primary-300"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />
      </svg>
    </div>
  );
};

const sections = [
  { id: "hero", label: "About" },
  { id: "tech", label: "Tech" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "community", label: "Community" },
  { id: "contact", label: "Contact" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const slideInFromLeft = {
  hidden: { 
    opacity: 0, 
    x: -50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: false });

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  // Form submission handler - commented out for now
  // To enable: uncomment this function and the formStatus state above,
  // then update the form's onSubmit handler and replace 'YOUR_FORM_ID' with your Formspree form ID
  /*
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false });

    const formData = new FormData(e.target);
    
    try {
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      // Get it from https://formspree.io after signing up (free)
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus({ loading: false, success: true, error: false });
        e.target.reset();
        setTimeout(() => {
          setFormStatus({ loading: false, success: false, error: false });
        }, 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setFormStatus({ loading: false, success: false, error: true });
    }
  };
  */

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary-200/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-primary-300/15 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-primary-400/10 blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
      <header className="sticky top-0 z-30 border-b border-primary-200/50 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <motion.button
            onClick={() => scrollTo("hero")}
            className="text-sm font-semibold tracking-wide text-primary-500 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Isra Khan
            <AnimatedMobileHeader />
          </motion.button>
          <nav className="hidden gap-6 text-sm text-slate-700 md:flex">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="transition hover:text-primary-500"
              >
                {s.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="hidden rounded-full bg-primary-500 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-primary-500/30 transition hover:bg-primary-400 sm:block"
            >
              Hire Me
            </button>
            {/* Hamburger button for mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col gap-1.5 p-2 text-slate-700 transition hover:text-primary-500 md:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-6 bg-current transition-all ${isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all ${isMobileMenuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all ${isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
              />
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`absolute left-0 right-0 top-full z-20 border-b border-primary-200/50 bg-white/95 backdrop-blur transition-all duration-300 md:hidden ${isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
            }`}
        >
          <nav className="mx-auto max-w-6xl flex flex-col px-4 py-4">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="py-3 text-left text-sm text-slate-700 transition hover:text-primary-500"
              >
                {s.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-2 rounded-full bg-primary-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-primary-500/30 transition hover:bg-primary-400"
            >
              Hire Me
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:pt-16 relative z-10">
        {/* Hero / About Me combined, like mhmz.dev */}
        {/* Hero / About Me combined, like mhmz.dev */}
        <motion.section
          id="hero"
          className="mb-20 grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <SectionDecorations position="right" />
          <motion.div className="space-y-6 relative" variants={fadeInUp}>
            <AnimatedDoodle />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-500">
              Flutter Developer · Pakistan
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              Hello! I&apos;m <span className="text-primary-500">Isra</span>
              <br />
              A Flutter developer building fast, reliable apps.
            </h1>
            <p className="max-w-xl text-sm text-slate-600 md:text-base">
              Building fast, reliable apps with Flutter — from mobile to desktop. I&apos;ve worked
              on hotel operations, task & earnings tracking, and events platforms, always focusing
              on smooth UX, offline-first workflows, and solid integrations.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollTo("contact")}
                className="rounded-full bg-primary-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-primary-500/30 transition hover:-translate-y-0.5 hover:bg-primary-400"
              >
                Let&apos;s Talk
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="rounded-full border border-primary-300 px-5 py-2 text-sm font-medium text-primary-600 transition hover:-translate-y-0.5 hover:border-primary-500 hover:text-primary-500"
              >
                View Projects
              </button>
              <span className="text-xs text-slate-500">
                Available for remote Flutter roles & freelance.
              </span>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div className="glass-panel relative overflow-hidden rounded-3xl p-6 animate-float-slow">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0,_rgba(32,178,170,0.15),transparent_60%),radial-gradient(circle_at_80%_100%,rgba(46,139,87,0.15),transparent_55%)]" />
              <div className="relative space-y-4">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
                  Flutter Developer
                </p>
                <h2 className="text-lg font-semibold text-slate-900">Flutter-first Developer</h2>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li>• Production experience across mobile and desktop.</li>
                  <li>• Focus on performance, offline-first UX, and maintainable code.</li>
                  <li>• Comfortable with Firebase, local storage, and integration work.</li>
                </ul>
                <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                  <div className="rounded-2xl bg-primary-50/80 p-3">
                    <p className="text-[10px] uppercase text-slate-600">Core Stack</p>
                    <p className="mt-1 font-medium text-slate-900">Flutter · Dart</p>
                  </div>
                  <div className="rounded-2xl bg-primary-50/80 p-3">
                    <p className="text-[10px] uppercase text-slate-600">Cloud & Data</p>
                    <p className="mt-1 font-medium text-slate-900">Firebase</p>
                  </div>
                  <div className="rounded-2xl bg-primary-50/80 p-3">
                    <p className="text-[10px] uppercase text-slate-600">Location</p>
                    <p className="mt-1 font-medium text-slate-900">Pakistan · Remote</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* About with a single portrait on the left */}
        {/* About with a single portrait on the left */}
        <motion.section
          id="about"
          className="mb-16 relative overflow-visible"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <SectionDecorations position="left" />
          <motion.div variants={fadeInUp} className="relative z-10">
            <SectionHeader title="About Me" eyebrow="Who I am" />
          </motion.div>
          <motion.div 
            className="glass-panel mt-6 grid gap-8 rounded-3xl p-6 md:grid-cols-[1.05fr,1.4fr] relative z-10"
            variants={staggerContainer}
          >
            {/* Left: single portrait */}
            <motion.div 
              className="flex items-center justify-center"
              variants={fadeInUp}
            >
              <div className="relative w-full max-w-xs overflow-hidden rounded-3xl border border-primary-500/60 bg-white shadow-xl shadow-primary-500/20 aspect-[3/4]">
                <img
                  src={new URL("../isra-profile.png", import.meta.url).href}
                  alt="Isra Khan"
                  className="h-full w-full object-cover object-top"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
              </div>
            </motion.div>
            {/* Right: text */}
            <motion.div 
              className="flex flex-col justify-center space-y-4 text-sm text-slate-700 md:text-[15px]"
              variants={fadeInUp}
            >
              <p>
                I&apos;m a Flutter developer from Pakistan who enjoys turning product requirements
                into polished, real-world apps. I care about structure, performance, and getting the
                details right so that users don&apos;t have to think about the tech—it just works.
              </p>
              <p>
                My work spans multiple domains, including social media apps, event promotion platforms,
                personal finance trackers, and desktop hospitality applications.

              </p>
              <p>
                I love exploring new technologies and continuously learning.
                I've also volunteered extensively at tech events, supporting
                communities and helping aspiring developers grow.
                Outside of tech, I enjoy UI/UX design, writing, gaming, and reading.
              </p>

            </motion.div>
          </motion.div>
        </motion.section>

        {/* Tech Stack, inspired by mhmz.dev layout */}
        {/* Tech Stack, inspired by mhmz.dev layout */}
        <motion.section
          id="tech"
          className="mb-16 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <SectionDecorations position="right" />
          <motion.div variants={fadeInUp} className="relative z-10">
            <SectionHeader title="Tech Stack" eyebrow="What I work with" />
            <p className="mt-3 max-w-2xl text-sm text-slate-600">
              I like to learn new tools quickly, then prove that knowledge by building real things.
              Flutter is my main focus, supported by a web, backend, and Firebase toolkit.
            </p>
          </motion.div>
          <motion.div 
            className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <SkillCard
              title="Languages"
              items={["Dart", "Python", "Java"]}
              highlight="Dart-first thinking with strong fundamentals from Python and Java."
            />
            <SkillCard
              title="Frameworks & Tools"
              items={["Flutter", "HTML", "CSS", "Bootstrap", "JavaScript"]}
              highlight="Flutter as the core, plus solid understanding of the web stack."
            />
            <SkillCard
              title="Backend & Data"
              items={["Firebase", "Git", "GitHub", "Python server-side basics"]}
              highlight="Comfortable with Firebase, auth, and basic backend workflows."
            />
          </motion.div>
        </motion.section>

        {/* Projects */}
        {/* Projects */}
        <motion.section
          id="projects"
          className="mb-16 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <SectionDecorations position="left" />
          <motion.div variants={fadeInUp} className="relative z-10">
            <SectionHeader title="Projects" eyebrow="Stuff I loved working with" />
            <p className="mt-3 max-w-2xl text-sm text-slate-600">
              A few Flutter projects that capture how I think about real-world constraints, offline
              behavior, and user experience.
            </p>
          </motion.div>
          <motion.div 
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10 items-stretch"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <ProjectCard
              category="Product"
              title="Hospitality – Hotel Management Desktop App"
              subtitle="Desktop app for small hotels to track check-in/checkout and handle hotel operations. Streamlines daily hotel management tasks."
              tags={["App", "Desktop", "Flutter"]}
              image={new URL("../hospitality.png", import.meta.url).href}
            />
            <ProjectCard
              category="Product"
              title="ACL Excavation – Truck Tracking App"
              subtitle="Mobile app for tracking trucks on-site, offload status, and timings. Used for managing excavation fleet operations."
              tags={["App", "Flutter", "Mobile"]}
              image={new URL("../acl-excavation.png", import.meta.url).href}
            />
            <ProjectCard
              category="Product"
              title="Cage – Fighting Events Platform"
              subtitle="Connect promoters and fighters around upcoming fighting events."
              tags={["App", "Flutter"]}
              image={new URL("../cage_connect.png", import.meta.url).href}
            />
          </motion.div>
          <motion.div className="mt-8 flex justify-center" variants={fadeInUp}>
            <button className="text-xs font-semibold text-primary-500 underline-offset-4 hover:text-primary-600 hover:underline">
              See More
            </button>
          </motion.div>
        </motion.section>

        {/* Experience */}
        {/* Experience */}
        <motion.section
          id="experience"
          className="mb-16 relative overflow-visible"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <SectionDecorations position="right" />
          <div className="absolute right-0 top-8 pointer-events-none z-20 hidden xl:block" style={{ right: "calc(-180px - 2rem)" }}>
            <SeaGreenLaptop />
          </div>
          <motion.div variants={fadeInUp} className="relative z-10">
            <SectionHeader title="Experience" eyebrow="Where I've been" />
          </motion.div>
          <motion.div 
            className="mt-6 space-y-4 relative z-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <ExperienceCard
              role="Flutter Developer"
              company="Emetrotel"
              location="Remote | USA"
              period="Mar 2023 – May 2025"
              description="Worked on production-grade Flutter applications used by hotel clients, focusing on performance, reliability, and integrations."
              bullets={[
                "Developed Flutter desktop application for hotel operations used across multiple client sites.",
                "Implemented offline functionality using local storage for uninterrupted performance.",
                "Integrated Firebase for cloud synchronization and UCX server for real-time room status updates.",
              ]}
            />
            <ExperienceCard
              role="Flutter Developer"
              company="Enterprise64"
              location="Onsite | Pakistan"
              period="Mar 2023 – Mar 2024"
              description="Developed multiple Flutter applications including HR management systems, task tracking apps, and event platforms."
              bullets={[
                "Developed an internal HR Management System in Flutter with an intuitive UI.",
                "Developed Gig, a mobile app for managing tasks and tracking payments.",
                "Built Cage, a mobile platform for fighting events and promoters, enabling event management and participant coordination.",
              ]}
            />
            <ExperienceCard
              role="Trainee"
              company="TPS"
              location="Hybrid | PK"
              period="Mar 2022 – Sep 2022"
              description="Completed Flutter onboarding and training, gaining hands-on experience in mobile app development while contributing to live projects."
              bullets={[
                "Completed Flutter onboarding and training, gaining hands-on experience in mobile app development.",
                "Contributed to development and live projects such as AL-NILE, implementing new features and resolving bugs.",
                "Improved app architecture by integrating GetX for efficient state management in existing Flutter apps.",
                "Utilized standard libraries and REST APIs to ensure scalability and maintainability.",
                "Maintained industry-standard code quality through code reviews, clean architecture, and reusable components.",
                "Collaborated with team members to test, debug, and optimize applications for production readiness.",
              ]}
            />
          </motion.div>
        </motion.section>

        {/* Education */}
        {/* Education */}
        <motion.section
          id="education"
          className="mb-16 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <SectionDecorations position="left" />
          <motion.div variants={fadeInUp} className="relative z-10">
            <SectionHeader title="Education & Certifications" eyebrow="How I learned" />
          </motion.div>
          <motion.div 
            className="mt-6 space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="glass-panel rounded-3xl p-6 text-sm text-slate-700"
              variants={slideInFromLeft}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Bachelor of Computer Science</h3>
                  <p className="text-xs text-slate-600">
                    University of Sindh
                  </p>
                </div>
                <p className="text-xs text-slate-500">2017 – 2021</p>
              </div>
              <p className="mt-2 text-xs text-slate-600">
                CGPA: 3.3 / 4.0
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Community-style section inspired by mhmz.dev */}
        {/* <section id="community" className="mb-16 animate-fade-in-up">
          <SectionHeader title="Community & Collaboration" eyebrow="Let&apos;s go further together" />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <TestimonialCard
              quote="Isra is focused on reliability and user experience. She asks the right questions and ships Flutter apps that actually work for real users."
              name="Future Manager / Client"
              role="Add a real testimonial here later"
            />
            <TestimonialCard
              quote="She takes ownership of Flutter work, cares about edge cases, and iterates quickly. I'd happily work with her again on mobile or desktop projects."
              name="Future Collaborator"
              role="Add a real testimonial here later"
            />
          </div>
        </section> */}

        {/* Blog */}
        {/* Blog */}
        <motion.section
          id="blog"
          className="mb-16 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <SectionDecorations position="right" />
          <motion.div variants={fadeInUp} className="relative z-10">
            <SectionHeader title="Writing & Notes" eyebrow="Blog" />
          </motion.div>
          <motion.div 
            className="mt-6 glass-panel rounded-3xl p-6 text-sm text-slate-700 relative z-10"
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <p>
              I plan to share short write-ups about building Flutter apps, offline-first design,
              Firebase workflows, and lessons from real projects. Blog posts will appear here once
              they&apos;re published.
            </p>
          </motion.div>
        </motion.section>

        {/* Contact */}
        {/* Contact */}
        <motion.section
          id="contact"
          className="mb-10 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <SectionDecorations position="left" />
          <motion.div variants={fadeInUp} className="relative z-10">
            <SectionHeader title="Let's Build Something" eyebrow="Contact" />
          </motion.div>
          <motion.div 
            className="mt-6"
            variants={staggerContainer}
          >
            {/* Contact form - commented out for now
            <div className="glass-panel rounded-3xl p-6">
              <form
                className="space-y-4 text-sm"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("This form is a demo. Connect it to a backend or email service (e.g., Formspree).");
                }}
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Name">
                    <input
                      required
                      type="text"
                      name="name"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:border-primary-400 focus:ring-2"
                      placeholder="Your name"
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:border-primary-400 focus:ring-2"
                      placeholder="you@example.com"
                    />
                  </Field>
                </div>
                <Field label="What can I help you with?">
                  <textarea
                    required
                    name="message"
                    rows={4}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none ring-primary-500/40 placeholder:text-slate-500 focus:border-primary-400 focus:ring-2"
                    placeholder="Project idea, Flutter help, collaboration, etc."
                  />
                </Field>
                <button
                  type="submit"
                  className="rounded-full bg-primary-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-primary-500/40 transition hover:bg-primary-400"
                >
                  Send Message
                </button>
              </form>
            </div>
            */}
            <motion.div 
              className="space-y-4 text-sm text-slate-700"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div 
                className="glass-panel rounded-3xl p-5"
                variants={slideInFromLeft}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                  Direct Contact
                </h3>
                <div className="mt-3 space-y-1.5 text-sm">
                  <p>
                    <span className="text-slate-600">Email:</span>{" "}
                    <a
                      href="mailto:israkhan.ik1@gmail.com"
                      className="text-primary-500 hover:text-primary-600"
                    >
                      israkhan.ik1@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="text-slate-600">Phone:</span>{" "}
                    <a
                      href="tel:+923423305814"
                      className="text-primary-500 hover:text-primary-600"
                    >
                      +92 342 3305814
                    </a>
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="glass-panel rounded-3xl p-5"
                variants={slideInFromLeft}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                  Links
                </h3>
                <div className="mt-3 flex flex-wrap gap-3 text-xs">
                  <a
                    href="https://github.com/isra-khan/isra-khan"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-primary-300 px-3 py-1.5 text-slate-700 hover:border-primary-500 hover:text-primary-500"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/isra-khan1/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-primary-300 px-3 py-1.5 text-slate-700 hover:border-primary-500 hover:text-primary-500"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://docs.google.com/document/d/1lWz6VZQnIR2Yq23M01_0AUgMEvz_R3hPpABEDjQLeJ4/edit?usp=share_link"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-primary-300 px-3 py-1.5 text-slate-700 hover:border-primary-500 hover:text-primary-500"
                  >
                    Download Resume
                  </a>
                </div>
              </motion.div>
              <motion.p 
                className="text-xs text-slate-500"
                variants={slideInFromLeft}
              >
                Prefer async communication? Send me an email with a bit about your project, and
                I&apos;ll reply with ideas, next steps, and timelines.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>
      </main>

      <footer className="border-t border-primary-200/50 bg-white/90">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Isra Khan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ eyebrow, title }) {
  return (
    <div className="space-y-1">
      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-500">
        {eyebrow}
      </p>
      <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">{title}</h2>
    </div>
  );
}

function SkillCard({ title, items, highlight }) {
  return (
    <motion.div
      className="glass-panel flex h-full flex-col rounded-3xl p-5 text-sm"
      variants={slideInFromLeft}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <ul className="mt-3 space-y-1 text-slate-700">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
      {highlight && <p className="mt-3 text-xs text-slate-600">{highlight}</p>}
    </motion.div>
  );
}

function ProjectCard({ category, title, subtitle, tags, link, image }) {
  const cardContent = (
    <>
      <div className="flex items-center justify-between px-4 pt-3">
        <span className="rounded-full bg-primary-500/10 px-3 py-1 text-[11px] font-medium text-primary-600 ring-1 ring-primary-500/40">
          {category}
        </span>
      </div>
      <div className="mt-3 h-60 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full bg-gradient-to-br from-primary-100 via-primary-50 to-primary-200/70 px-4 py-3 text-xs text-slate-800">
            <div className="flex h-full items-center justify-center text-center opacity-80">
              <span className="max-w-[90%]">{title}</span>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between px-4 pb-4 pt-3 text-sm text-slate-700">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-xs text-slate-600">{subtitle}</p>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-primary-500/10 px-3 py-1 text-primary-600 ring-1 ring-primary-500/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  if (link) {
    return (
      <motion.a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="glass-panel flex h-full flex-col overflow-hidden rounded-3xl cursor-pointer"
        variants={slideInFromLeft}
        whileHover={{ 
          scale: 1.05,
          y: -5,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.98 }}
        style={{ minHeight: '485px' }}
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.div
      className="glass-panel flex h-full flex-col overflow-hidden rounded-3xl"
      variants={slideInFromLeft}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
      style={{ minHeight: '420px' }}
    >
      {cardContent}
    </motion.div>
  );
}

function ExperienceCard({ role, company, location, period, description, bullets }) {
  return (
    <motion.div
      className="glass-panel rounded-3xl p-5 text-sm text-slate-700"
      variants={slideInFromLeft}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">{role}</h3>
          <p className="text-xs text-slate-600">
            {company} · {location}
          </p>
        </div>
        <p className="text-xs text-slate-500">{period}</p>
      </div>
      <p className="mt-2">{description}</p>
      {bullets && (
        <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
          {bullets.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

function TestimonialCard({ quote, name, role }) {
  return (
    <div className="glass-panel h-full rounded-3xl p-5 text-sm text-slate-700 transition-transform duration-300 hover:-translate-y-1">
      <p className="text-sm text-slate-800">"{quote}"</p>
      <div className="mt-3 text-xs text-slate-600">
        <p className="font-semibold text-slate-900">{name}</p>
        <p>{role}</p>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-1 text-xs text-slate-700">
      <span className="font-medium text-slate-900">{label}</span>
      {children}
    </label>
  );
}

export default App;


