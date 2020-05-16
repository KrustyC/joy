import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: ["DM Sans", "Arial", "sans-serif"],
  bodyFontFamily: ["DM Sans", "serif"],
  googleFonts: [
    {
      name: "DM Sans",
      styles: ["100", "200", "300", "400", "400i", "700", "700i"],
    },
  ],
})

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
