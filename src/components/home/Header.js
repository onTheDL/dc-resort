import React from "react";
import Hero from "../globals/Hero";
import aboutImg from "../../images/aboutBcg.jpeg";
import homeImg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";

export default function Header() {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting="welcome to"
        title="dreamers cove resort"
        text="I'm baby etsy blog distillery cliche aesthetic. Scenester selvage hell of 3 wolf moon taxidermy marfa coloring book. Kale chips woke iPhone leggings chia blog quinoa lomo."
      />
    </Hero>
  );
}
