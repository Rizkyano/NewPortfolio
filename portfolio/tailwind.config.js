/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        gradientShiftSmooth: {
          "0%": { background: "linear-gradient(270deg, #06b6d4, #8b5cf6, #ec4899)" },
          "25%": { background: "linear-gradient(270deg, #f97316, #22d3ee, #14b8a6)" },
          "50%": { background: "linear-gradient(270deg, #10b981, #6366f1, #f43f5e)" },
          "75%": { background: "linear-gradient(270deg, #eab308, #3b82f6, #a855f7)" },
          "100%": { background: "linear-gradient(270deg, #06b6d4, #8b5cf6, #ec4899)" },
        },
        gradientShiftAlt: {
          "0%": { background: "linear-gradient(90deg, #f43f5e, #3b82f6, #10b981)" },
          "50%": { background: "linear-gradient(90deg, #a855f7, #06b6d4, #f97316)" },
          "100%": { background: "linear-gradient(90deg, #f43f5e, #3b82f6, #10b981)" },
        },
        gradientRotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        gradientRotateSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        gradientShiftSmooth: "gradientShiftSmooth 60s ease-in-out infinite",
        gradientShiftAlt: "gradientShiftAlt 80s ease-in-out infinite",
        gradientRotate: "gradientRotate 120s linear infinite",
        gradientRotateSlow: "gradientRotateSlow 200s linear infinite",
      },
    },
  },
  plugins: [],
};
