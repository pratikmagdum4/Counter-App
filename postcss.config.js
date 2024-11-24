export default ({ env }) => ({
  plugins: [tailwindcss(), autoprefixer()],
});

// Assuming you have imported tailwindcss and autoprefixer:
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
