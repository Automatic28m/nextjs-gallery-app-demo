import Image from "next/image";

import ArtistSection from './components/ArtistSection';
import GallerySection from "./components/GallerySection";
import NewsLetterSignup from "./components/NewsLetterSignup";
import QuoteComponent from "./components/QuoteComponent";
import ReviewComponent from "./components/ReviewComponent";

export default function Home() {

  return (
    <>
      <div className=" h-[400px] w-full relative">
        <Image
          src="/images/josh-liu-Tjio9DgtIls-unsplash.jpg"
          alt="banner"
          fill
          style={{ objectFit: "cover" }}
        />
        <div id="banner-wrap" className="px-3 absolute inset-0 bg-slate-900/60 z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-7xl font-bold font-durer absolute z-50 h-full flex flex-col justify-center text-white">Studio Solstice</h1>
          </div>
        </div>
      </div>
      <div className="container max-w-5xl mx-auto my-32 px-3">
        <section className="">
          <h1 className="text-3xl font-bold text-primary font-durer">Welcome</h1>
          <p className="text-gray">
            Where light meets creation and every piece tells a story.

            We are a seasonal art gallery devoted to showcasing soulful, curated works by emerging and established artists from around the world. Inspired by nature’s rhythms and the timeless beauty of transformation, our collections evolve like the solstice—marking new beginnings, quiet reflections, and radiant expression.

            Discover art that moves with you.
          </p>
        </section>
        <div id="gallery">
          <GallerySection />
        </div>
        <div id="quote">
          <QuoteComponent
            message={"Art is the light we carry through the seasons—quiet, radiant, and always becoming."}
            author={"Studio Solstice"}
          />
        </div>
        <section id="artist">
          <ArtistSection />
        </section>
        <div id="review">
          <ReviewComponent />
        </div>
        <div id="news-letter-signup">
          <NewsLetterSignup />
        </div>
      </div>
    </>
  );
}
