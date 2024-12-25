/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        amar: ['Poppins', 'sans-serif'], 
      },
      colors: {
        gold: "#a0845d",
      },
     
      keyframes: {
        sunrise: {
          "0%": { transform: "translateY(100%)", opacity: 0 }, 
          "100%": { transform: "translateY(0)", opacity: 1 },  
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideInLeft: {
          from: { transform: "translateX(-100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          from: { transform: "translateX(100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        sunrise: "sunrise 1s ease-out forwards", 
        marquee: "marquee 30s linear infinite",
        slideInLeft: "slideInLeft 0.8s ease-out",
        slideInRight: "slideInRight 0.8s ease-out",
        bounceSlow: "bounce 3s infinite",
      },
    },
  },
  plugins: [],
};
