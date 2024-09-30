import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 ">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              aplicativo de treino
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Treino do futuro
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              No aplicativo TREINE, desenvolvemos com o objetivo de ser
              surpreendentemente eficaz. Que combina praticidade com treinos
              perfomáticos, garantindo uma experiência transformadora.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Experimente agora!</Button>
            </LinkScroll>
          </div>
          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img src="/images/dumb.png" className="size-1230 max-lg:h-auto" />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
