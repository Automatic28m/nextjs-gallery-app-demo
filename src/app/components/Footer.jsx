import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white shadow mt-10 bottom-0">
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-900 font-durer text-lg">
        <div className="text-sm text-gray-500 text-center sm:text-right">
          &copy; {new Date().getFullYear()} Studio Solstice
        </div>
      </div>
    </footer>
  );
}
