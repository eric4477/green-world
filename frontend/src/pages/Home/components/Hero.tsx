import heroImg from "../../../assets/right-side-hero.jpg";

export default function Hero() {
  return (
    <section
      className="hero bg-custom-gradient overflow-hidden min-h-screen grid grid-cols-1 md:grid-cols-2 
    pt-[120px]"
    >
      <div className="flex flex-col justify-center p-[2rem] lg:p-[4rem]">
        <h1 className="text-6xl text-[#1b5e20] font-bold mb-5">Green World</h1>
        <p className="font-normal text-[#2e7d32]  text-2xl">
          Discover and identify the beautiful plants around you with our
          AI-powered technology
        </p>
      </div>
      <div className="relative">
        <img
          width="800"
          height="1200"
          className="hero-plant-image"
          src={heroImg}
          alt="hero"
        />
      </div>
    </section>
  );
}
