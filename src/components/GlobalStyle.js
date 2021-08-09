import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

h2{
   font-weight: lighter;
   font-size: 3rem;
}

h3{
  color:white;
}

h4{
  font-weight: bold;
}

span{
  font-weight: bold;
  color: #23d997;
}

p{
  padding:3rem 0rem;
  color: #ccc;
  font-size:1.4rem;
  line-height:150%;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  background: #1b1b1b;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

a{
  font-size: 1.1rem;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

button{
    font-weight: bold;
    font-size: 1.1rem;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;

    &:hover{
        background-color: #23d997;
        color: white;
    }
}



/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

`;

export default GlobalStyle;
