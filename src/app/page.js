"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

// Lucide Icon
import { Brush } from "lucide-react";
import { UserRound } from "lucide-react";
import { Calendar } from "lucide-react";

export default function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data])

  return (
    <div className="container max-w-5xl mx-auto my-16 px-3">
      <h1 className="text-5xl font-bold text-primary font-durer">Art Institute of Chicago</h1>
      <p className="text-gray">
        Welcome to the Art Institute of Chicago, home to a collection of art that spans centuries and the globe—and one of Tripadvisor’s “Best of the Best” US attractions of 2024. We look forward to your visit and invite you to explore our many exhibitions, join one of our free daily tours, or make your own tour of must-see works.
      </p>
      <section id="gallery" className="mt-6">
        <h2 className="font-bold text-2xl font-durer">Gallery</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {data.map((item, index) => {
            return (
              <div className="card shadow rounded bg-white relative overflow-hidden" key={index} style={{ height: 300 }}>
                <div className="relative w-full h-full">
                  <Image
                    src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body p-3 text-white bg-linear-to-t from-slate-900/80 to-slate-900/0 w-full absolute bottom-0">
                  <div id="title">{item.title}</div>
                  <div id="artist_title" className="flex flex-row gap-2 items-center text-sm">
                    <UserRound size={15} />{`${item.artist_title}`}
                  </div>
                  <div id="date_display" className="flex flex-row gap-2 items-center text-sm">
                    <Calendar size={15} />{`${item.date_display}`}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  );
}
