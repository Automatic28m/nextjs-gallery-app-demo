import React from "react";

function NewsLetterSignup() {
  return (
    <section className="my-32">
      <div className="mb-3">
        <h2 className="font-bold text-3xl font-durer mb-3">
          Never Miss a Solstice
        </h2>
        <p>
          Be the first to discover new art, limited releases, and stories behind
          the canvas.
        </p>
      </div>
      <form className="flex flex-row gap-3">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="border px-3 py-2 rounded w-[500px]"
        />
        <button className="btn bg-slate-900 rounded py-1 px-2 text-white border-slate-900 hover:text-slate-900 hover:bg-white hover:border-2">Subscribe</button>
      </form>
    </section>
  );
}

export default NewsLetterSignup;
