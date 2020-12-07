import React from "react";
import Section from "../globals/Section";
import Title from "../globals/Title";
import aboutImg from "../../images/aboutBcg.jpeg";
import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  media,
} from "../../styles";
import { PrimaryBtn } from "../globals/Buttons";
import styled from "styled-components";

const AboutCenter = styled.div`
  .about-img,
  .about-info {
    padding: ${setRem(30)};
  }
  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor })};

    }
  }
  .about-info {
    p {
      ${setLetterSpacing(3)};
    }
  }
  width: 90vw;
  margin: 0 auto;
  ${media.desktop`
    width: 100vw;
    max-width: 1170px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${setRem(32)};
    
    .about-img {
      align-self: center;
    }
    /* .about-info {
      p{
        width: 90%;
      }
    } */
  `}
`;

export default function About() {
  return (
    <Section>
      <AboutCenter>
        <div className="about-img">
          <img src={aboutImg} alt="about us"></img>
        </div>
        <div className="about-info">
          <Title title="About Us" center />
          <p>
            Authentic brunch copper mug forage marfa, DIY listicle small batch
            fixie keffiyeh flannel lyft pop-up. Raw denim chambray helvetica
            knausgaard woke vice fixie cred sustainable lumbersexual food truck
            listicle art party. Jianbing microdosing vice 90's pug. Adaptogen
            twee tumblr edison bulb, ramps pop-up brunch deep v tacos bushwick
            letterpress venmo tumeric fam.{" "}
          </p>
          <PrimaryBtn>Read More</PrimaryBtn>
        </div>
      </AboutCenter>
    </Section>
  );
}
