import React from "react";
import "./Hero.css";
import SocialLinksRow from "../../components/socialLinksRow/SocialLinksRow";

const Hero = () => {
  return (
    <div>
      <div className="container hero pt-4">
        <div className="row flex-md-row flex-column-reverse">
          <div className="col-md-7 col-12 mt-0 mt-md-4 d-flex flex-column align-items-center justify-content-center title text-start ">
            <p className="first-text mt-0 mt-md-5 pt-5 text-start">
              Hello I’am &nbsp;
              <span className="second-text ">Laheem Ayub.</span>
              <br />
              <span className="second-text ">Frontend</span>
              &nbsp;
              <span className="third-text ">Developer</span>
              <br />
              Based In &nbsp;
              <span className="second-text">Pakistan.</span>
            </p>
            <p className="mx-md-4 mx-3 hero-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati, aut ducimus quae odio deserunt optio cum qui nostrum
              aspernatur voluptatem eaque officiis, deleniti, id ullam alias
              perferendis numquam ipsa quasi. Iste sed aliquid magnam,
              cupiditate amet sequi alias reiciendis rerum.
            </p>
            <SocialLinksRow/>
          </div>
          <div className="col-md-5 col-12 ">
            <img
             src={`${process.env.PUBLIC_URL}/assets/images/hero.png`}
              className="hero-img ms-3 ms-md-0 mt-5"
              alt=""
            />
            <div className="hero-divider"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
