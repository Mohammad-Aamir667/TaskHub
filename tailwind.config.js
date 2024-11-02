/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
      extend: {
        colors: {
                 darkGrey : '#2d4059',
          rustOrange: '#CC5500',
          deepPlum: '#5D3A9B', 
          cosmicLavender: '#8A4D92', 
          steelBlue:  '#4682B4',
          cadet: '#5F9EA0',
          softIvory: '#F8F4E3',
          royalPurple: '#7851A9',     
          brightMaroon: '#C32148',      
          deepLime: '#4CAF50',     
          cardColor1: '#928a97',    
          burntOrange: '#FF4500',
          firstColor: '#8e9fe6',  
          secondColor: '#71a0a5',  
          thirdColor: '#4a4a48',    
          fourthColor: '#c19898',  
          cardButton1:'#283c63',
          cardButton2:'#7386d5',
 
        },
    },
  },
  plugins: [],
}