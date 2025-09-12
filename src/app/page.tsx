import Hero from "@/components/layouts/Hero";
import IntroGallerie from "@/components/layouts/IntroGallerie";
import OurStory from "@/components/layouts/OurStory";
import MenuNavigation from "@/components/layouts/MenuNavigation";
import OurNetwork from "@/components/layouts/OurNetwork";
export default function Home() {
  return (
    <>
      {/* heros section */}
      <Hero/>
      {/* mini galerie de scrolll */}
      <IntroGallerie/>
      {/* Qui sommes-nous section */}
      <OurStory/>
      <MenuNavigation/>
      {/* derniere nouveaute tendances */}
      {/* {publication tik tok et instagram} */}
      <OurNetwork/>
      {/* nos clients */}
      <h1 className="text-4xl font-bold w-full h-full flex items-center justify-center bg-[var(--background-tertiary)]">Hello World</h1>
    </>
  );
}
