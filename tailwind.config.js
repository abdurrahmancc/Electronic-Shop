module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1290px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#408ED4",
          secondary: "#000000",
          accent: "#000000",
          neutral: "#FFFFFF",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      {
        dark: {
          primary: "#1E2B47",
          secondary: "#ffffff",
          accent: "#000000",
          neutral: "#FFFFFF",
          "base-100": "#1E2B48",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#F59E0B",
          error: "#FB7185",
        },
      },
      {
        lightDashboard: {
          primary: "#776ACF",
          secondary: "#000000",
          accent: "#000000",
          neutral: "#FFFFFF",
          "base-100": "#ffffff",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      {
        darkDashboard: {
          primary: "#556EE6",
          secondary: "#ffffff",
          accent: "#000000",
          neutral: "#FFFFFF",
          "base-100": "#2A3042",
          info: "#98A8DD",
          success: "#34C38F",
          warning: "#F1B44C",
          error: "#F46A6A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
