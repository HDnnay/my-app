/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // 主色调
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#b9f8cf",
          300: "#7bf1a8",
          400: "#05df72",
          500: "#00c950", // 默认主色
          600: "#00a63e",
          700: "#008236",
          800: "#016630",
          900: "#0d542b",
        },
        // 辅助色
        secondary: {
          50: "#f7fee7",
          100: "#ecfcca",
          200: "#d8f999",
          300: "#bbf451",
          400: "#9ae600",
          500: "#7ccf00", // 默认辅助色
          600: "#5ea500",
          700: "#497d00",
          800: "#3c6300",
          900: "#35530e",
        },
        // 其他自定义颜色
        accent: "#f59e0b",
        dark: "#1e293b",
      },
    },
  },
  plugins: [],
}