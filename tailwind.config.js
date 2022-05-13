module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e6f7f4",
          200: "#90dfd0",
          300: "#08AF91",
          400: "#079e83",
          500: "#1e7565",
        },
        secondary: {
          100: "#dfe2ec",
          200: "#b5b8c2",
          300: "#253053",
          400: "#212b4b",
          500: "#161d32",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
