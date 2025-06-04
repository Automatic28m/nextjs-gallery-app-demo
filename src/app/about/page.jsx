import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="container max-w-5xl mx-auto py-16 px-3">
      <div className="py-16">
        <h1 className="text-3xl font-bold text-primary font-durer">About</h1>
        <b>Art in Rhythm with Light</b>
        <p className="text-gray">
          Studio Solstice is more than a gallery—it's a celebration of art's
          ability to evolve with the seasons and speak to the quiet turning
          points in our lives. Founded on the belief that creativity moves like
          the sun—rising, peaking, and softening into reflection—we curate
          artworks that capture emotion, atmosphere, and timeless beauty.
        </p>
        <p>
          Each season, we unveil a new collection, carefully selected to mirror
          the natural rhythms of change. From sunlit oil paintings to earthy
          mixed media and sculptural forms, every piece is a conversation
          between artist and observer.
        </p>
      </div>
      <div className="py-16">
        <div>
          <h1 className="text-3xl font-bold text-primary font-durer">
            Our Philosophy
          </h1>
          <b>We believe:</b>
          <ul className="list-disc pl-3">
            <li>Art is a living experience.</li>
            <li>Curated collections bring clarity and connection.</li>
            <li>Artists deserve space, not just display.</li>
          </ul>
          <p>
            Studio Solstice is committed to uplifting emerging and established
            voices through thoughtful curation, intimate storytelling, and
            intentional presentation.
          </p>
        </div>
      </div>
      <div className="py-16">
        <h1 className="text-3xl font-bold font-durer">Visit Us Online</h1>
        <p>
          While Studio Solstice exists primarily as an online space, we curate
          each collection as if it were hung on quiet, sunlit walls. We welcome
          you to browse, connect, and return with each new season.
        </p>
      </div>
      <div className="py-16">
        <h1 className="text-3xl font-bold font-durer">Let’s Stay Connected</h1>
        <p>
          Want early access to new works and seasonal reveals?{" "}
          <a href="/" className="text-blue-500">Join our Newsletter</a> or follow us on Instagram <a href="/" className="text-blue-500">@studiosolstice </a>
          for behind-the-scenes looks and upcoming exhibitions.
        </p>
      </div>
    </div>
  );
}

export default About;
