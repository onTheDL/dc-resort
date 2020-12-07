import styled from "styled-components";
import {
  setColor,
  setRem,
  setLetterSpacing,
  setFont,
  setBorder,
  setTransition,
} from "../../styles";

export const PrimaryBtn = styled.button`
  display: inline-block;
  background: ${setColor.primaryColor};
  color: ${setColor.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  ${setFont.main};
  padding: ${setRem(17)} ${setRem(36)};
  ${setBorder({ color: setColor.primaryColor })};
  border-radius: ${setRem(5)};
  ${setLetterSpacing()};
  ${setTransition({time: '0.3s'})};
   &:hover {
    background: transparent;
    color: ${setColor.primaryColor};
   }
   ${props => `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}`};
  text-decoration:none;
  cursor: pointer;
`;
