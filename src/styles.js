import { css } from "styled-components";

export const setColor = {
  primaryColor: "#af9a7d",
  mainWhite: "#fff",
  mainBlack: "#222",
  mainGrey: "#ececec",
  lightGrey: "#f7f7f7",
};

export const setFont = {
  main: "font-family: 'Lato', sans-serif",
  slanted: "font-family: 'Courgette', cursive",
};

export const setFlex = (x = "center", y = "center") => {
  return `
    display: flex;
    align-items: ${y};
    justify-content: ${x};
  `;
};

export const setBackground = ({
  img = "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  color = "rgba(0,0,0,0)",
} = {}) => {
  return `
    background: linear-gradient(${color}, ${color}),
      url(${img}) center/cover fixed no-repeat;
  `;
};

export const setRem = (number = 16) => {
  return `
    ${number / 16}rem
  `;
};

export const setLetterSpacing = (number = 2) => {
  return `letter-spacing: ${number}px`;
};

export const setBorder = ({
  width = "2px",
  style = "solid",
  color = "black",
} = {}) => {
  return `border: ${width} ${style} ${color}`;
};

const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
};

//Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
