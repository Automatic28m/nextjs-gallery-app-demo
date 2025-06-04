import { Quote } from "lucide-react";
import React from "react";

function QuoteComponent({ message, author }) {
  return (
    <div className="flex sm:flex-row flex-col gap-4 sm:items-center item-left bg-gray-200 rounded p-16 text-slate-700">
      <Quote size={80} />
      <div>
        <p className="text-xl">{message}</p>
        <div id="author">- {author}</div>
      </div>
    </div>
  );
}

export default QuoteComponent;
