module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#0d0d0d", // Fondo principal
          light: "#1a1a1a", // Fondo para elementos
        },
        violet: {
          light: "#c084fc", // Texto más claro
          DEFAULT: "#a855f7", // Texto base violáceo
          dark: "#6b21a8", // Texto oscuro violáceo
        },
      },
    },
  },
  plugins: [],
};
