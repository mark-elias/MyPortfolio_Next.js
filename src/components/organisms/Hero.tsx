import { heroText } from "@/src/constants/hero.constants";

function Hero() {
  return (
    <section className="text-center">
      <h3 className="italic">{heroText.subtitle}</h3>
      <h1 className="text-[30px] lg:text-[40px]">
        {heroText.title}
        <span className="italic text-customPrimary"> {heroText.name}</span>
      </h1>
    </section>
  );
}

export default Hero;
