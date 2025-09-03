import Hero from "@/components/layouts/Hero";
import IntroGallerie from "@/components/layouts/IntroGallerie";
export default function Home() {
  return (
    <>
      {/* heros section */}
      <Hero/>
      {/* mini galerie de scrolll */}
      <IntroGallerie/>
      {/* Qui sommes-nous section */}
      {/* derniere nouveaute tendances */}
      {/* {publication tik tok et instagram} */}
      {/* nos clients */}
      <h1 className="text-4xl font-bold w-full h-full flex items-center justify-center bg-amber-400">Hello World</h1>
    </>
  );
}
