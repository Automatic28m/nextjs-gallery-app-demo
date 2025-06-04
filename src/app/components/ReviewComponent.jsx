"use client"
import { Star } from "lucide-react";
import React from "react";

function RatingComponent() {
  const reviews = [
    {
      comment:
        "Absolutely stunning work. The colors and textures are even more vivid in person.",
      author: "Sophia Reed",
      rating: 5,
    },
    {
      comment:
        "Beautiful piece, though the frame arrived slightly scratched. Still love it.",
      author: "Liam Chen",
      rating: 4,
    },
    {
      comment:
        "A thoughtful addition to my collection. It brings warmth to my space.",
      author: "Ava Martínez",
      rating: 3,
    },
  ];

  return (
    <section id="gallery" className="my-32">
      <h2 className="font-bold text-3xl font-durer mb-3">Review</h2>
      <div className="grid sm:grid-cols-3 gap-3">
        {reviews.map((item, index) => (
            <div className="card shadow-xl p-3 bg-white rounded" key={index}>
              <div className="card-body">
                <div id="comment" className="text-lg">{item.comment}</div>
                <div id="author">- {item.author}</div>
                <div className="relative">
                  <div className="flex flex-row absolute z-0">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} fill="#808080" strokeWidth={0} />
                    ))}
                  </div>
                  <div id="rating" className="flex flex-row relative">
                    {Array.from({ length: `${item.rating}` }, (_, i) => (
                      <Star key={i} fill="orange" strokeWidth={0} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
    </section>
  );
}

export default RatingComponent;
