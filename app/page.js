import HeroCarousel from "@/components/HeroCarousel";
import HomeHighlights from "@/components/HomeHighlights";

export const metadata = {
  title: "ILLUMINATI Construction | Building Excellence",
  description:
    "ILLUMINATI is a premium construction & contracting company specializing in GRC, FRP, Ferrocement and façade works.",
};

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <HomeHighlights />
    </>
  );
}
