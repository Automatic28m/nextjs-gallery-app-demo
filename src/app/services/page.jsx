import React from "react";
import Image from "next/image";

function Services() {
  return (
    <div className="container max-w-5xl mx-auto my-16">
      <div className="py-16 px-3">
        <h1 className="text-3xl font-bold font-durer">Our Services</h1>
        <p className="text-gray">
          Studio Solstice offers a refined range of services for art collectors,
          interior designers, and creatives seeking meaningful visual
          experiences.
        </p>
      </div>

      <div className="py-16 grid sm:grid-cols-2 gap-16 items-center px-3">
        <Image
          src="/images/services/isaw-company-Oqv_bQbZgS8-unsplash.jpg"
          width={500}
          height={500}
          alt="service1"
          className="shadow-xl"
        />
        <div>
          <h1 className="text-3xl font-bold font-durer">
            1. Curated Art Collections
          </h1>
          <p className="text-gray">
            Each season, we release a themed collection of original artworks and
            limited-edition prints. Our curators work closely with artists to
            ensure each piece aligns with our vision of light, nature, and
            transformation.
          </p>
          <br />
          <b>Includes:</b>
          <ul className="list-disc">
            <div className="pl-5">
              <li>One-of-a-kind originals</li>

              <li>Limited-edition signed prints</li>

              <li>Seasonal drops (Spring, Summer, Autumn, Winter)</li>
            </div>
          </ul>
        </div>

        <div>
          <h1 className="text-3xl font-bold font-durer">
            2. Artist Commissions
          </h1>
          <p className="text-gray">
            Love an artist’s style but want something personal? We coordinate
            custom commissions tailored to your vision, space, or occasion.
          </p>
          <br />
          <b>Commission Types:</b>
          <ul className="list-disc">
            <div className="pl-5">
              <li>Portraits, abstract interpretations, nature studies</li>

              <li>Interior-based size & color matching</li>

              <li>Wedding or memorial-inspired pieces</li>
            </div>
          </ul>
        </div>
        <Image
          src="/images/services/mick-haupt-VbI0LMaGMlg-unsplash.jpg"
          width={500}
          height={500}
          alt="service1"
          className="shadow-xl"
        />

        <Image
          src="/images/services/artur-matosyan-4YWUMaftmag-unsplash.jpg"
          width={500}
          height={500}
          alt="service1"
          className="shadow-xl"
        />
        <div>
          <h1 className="text-3xl font-bold font-durer">
            3. Art Consulting for Interiors
          </h1>
          <p className="text-gray">
            Whether you're a homeowner, interior designer, or business, our team
            offers art placement guidance to enhance your space with intention.
          </p>
          <br />
          <b>Services Include:</b>
          <ul className="list-disc">
            <div className="pl-5">
              <li>Virtual or on-site art consultations</li>

              <li>
                Custom recommendations based on your space, light, and style
              </li>

              <li>Gallery wall layout planning</li>
            </div>
          </ul>
        </div>

        <div>
          <h1 className="text-3xl font-bold font-durer">
            4. Artist Promotion & Residency
          </h1>
          <p className="text-gray">
            Studio Solstice supports emerging voices through our artist
            spotlight, online residency program, and mentorship.
          </p>
          <br />
          <b>Opportunities for Artists:</b>
          <ul className="list-disc">
            <div className="pl-5">
              <li>Monthly spotlight feature</li>
              <li>Seasonal exhibition inclusion</li>
              <li>One-on-one feedback with our curatorial team</li>
            </div>
          </ul>
        </div>
        <Image
          src="/images/services/centre-for-ageing-better-hkHXc7J6VXM-unsplash.jpg"
          width={500}
          height={500}
          alt="service1"
          className="shadow-xl"
        />

        <Image
          src="/images/services/marek-okon-RdTCTv_iCbE-unsplash.jpg"
          width={500}
          height={500}
          alt="service1"
          className="shadow-xl"
        />
        <div>
          <h1 className="text-3xl font-bold font-durer">
            5. Worldwide Shipping & Framing
          </h1>
          <p className="text-gray">
            We ship globally with care and offer optional museum-quality framing
            for most artworks.
          </p>
          <br />
          <b>Framing Options:</b>
          <ul className="list-disc">
            <div className="pl-5">
              <li>Classic wood, floating frames, or acrylic mounts</li>

              <li>Custom sizing upon request</li>
            </div>
          </ul>
          <b>Shipping Includes:</b>
          <ul className="list-disc">
            <div className="pl-5">
              <li>Tracking & insurance</li>
              <li>Eco-conscious packaging</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="py-16 px-3">
        <h1 className="text-3xl font-bold font-durer">Get in Touch</h1>
        <p>
          Interested in a service above or have a custom request?
          Visit our{" "}
          <a href="/contact" className="text-blue-500">
            Contact
          </a>{" "}
          page or email us at
          {" "}
          <a href="/" className="text-blue-500">
            hello@studiosolstice.com{" "}
          </a>
          — we’d love to hear from you.
        </p>
      </div>
    </div>
  );
}

export default Services;
