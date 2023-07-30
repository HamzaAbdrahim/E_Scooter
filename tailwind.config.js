/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./index.html",
   "./src/**/*.{js,ts,jsx,tsx}",
 ],
 theme: {
   extend: {
     fontFamily:{
       Ubuntu: ['Ubuntu', 'sans-serif'],
       Calistoga: ['Calistoga', "cursive"]
     },
     colors:{
       primary:"#42454A",
       whity:"#FFF"
     },
     fontSize: {
       navsize:'0.875rem',
       titelsize:'3.125rem',
       gallerysize:'1.875rem',
       
     }
   },
 },
 plugins: [],
}
