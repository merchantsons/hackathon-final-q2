import { Brands } from "@/components/home/Brands";
import BrowseStyles from "@/components/home/browser-styles";
import { Hero } from "@/components/home/Hero";
import NewArrivals from "@/components/home/new-arrivals";
import Testimonials from "@/components/home/testimonials";
import TopSelling from "@/components/home/top-selling";

export default function Home() {
  return (
    <>
     
      <div>
        <Hero />
        <Brands />
        <NewArrivals />
        <hr />
        <TopSelling />
        <BrowseStyles />
        <Testimonials />
      </div>
    </>
  );
}

