"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

// Lucide Icon
import { Brush } from "lucide-react";
import { UserRound } from "lucide-react";
import { Calendar } from "lucide-react";

function GallerySection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <section id="gallery" className="my-32">
      <h2 className="font-bold text-3xl font-durer mb-3">
        Gallery of the week
      </h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {data.map((item, index) => {
          return (
            <div
              className="card shadow-xl rounded relative overflow-hidden h-[500px] bg-black-900"
              key={index}
            >
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "blur(8px)",
                  zIndex: 1,
                }}
              />
              {/* Overlay for darkening */}
              <div className="absolute inset-0 bg-white/40 z-10" />
              <div className="relative w-full h-full z-20">
                <Image
                  src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
                  alt={item.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="card-body p-3 text-white bg-linear-to-t from-slate-900/80 to-slate-900/0 w-full absolute bottom-0 z-30">
                <div id="title">{item.title}</div>
                <div
                  id="artist_title"
                  className="flex flex-row gap-2 items-center text-sm"
                >
                  <UserRound size={15} />
                  {`${item.artist_title}`}
                </div>
                <div
                  id="date_display"
                  className="flex flex-row gap-2 items-center text-sm"
                >
                  <Calendar size={15} />
                  {`${item.date_display}`}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default GallerySection;
