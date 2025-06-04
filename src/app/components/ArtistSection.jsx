import React from "react";
import Image from "next/image";

function ArtistSection() {
  const artists = [
    {
      name: "Elena Marlowe",
      base_in: "Califonia",
      image: "/images/artists/aiony-haust-IXYxqP4zejo-unsplash.jpg",
    },
    {
      name: "Alex Cooper",
      base_in: "London",
      image: "/images/artists/albert-dera-ILip77SbmOE-unsplash.jpg",
    },
    {
      name: "Julian Cross",
      base_in: "New York",
      image: "/images/artists/manny-moreno-2HTX85gxynM-unsplash.jpg",
    },
  ];

  return (
    <div className="my-32">
      <h2 className="font-bold text-3xl font-durer mb-3">Artists & Collectors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {artists.map((item, index) => (
          <div
            className="card shadow-xl rounded bg-white relative overflow-hidden"
            key={index}
            style={{ height: 500 }}
          >
            <div className="relative w-full h-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="card-body p-3 text-white bg-linear-to-t from-slate-900/80 to-slate-900/0 w-full absolute bottom-0">
              <div id="title">{item.name}</div>
              <div
                id="artist_title"
                className="flex flex-row gap-2 items-center text-sm"
              >
                {/* <UserRound size={15} /> */}
                {`${item.base_in}`}
              </div>
              {/* <div
                id="date_display"
                className="flex flex-row gap-2 items-center text-sm"
              >
                <Calendar size={15} />
                {`${item.date_display}`}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtistSection;
