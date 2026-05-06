import Marquee from "react-fast-marquee";

export default function FeaturesMarquee() {
  return (
    <div className="border-y border-gray-100 bg-white py-4">
      <Marquee direction="right" speed={50} autoFill className="overflow-hidden">
        <span className="mx-8 text-sm font-medium tracking-widest text-gray-500 uppercase">
          Premium Quality
        </span>
        <span className="mx-8 text-sm font-medium tracking-widest text-indigo-500 uppercase">
          •
        </span>
        <span className="mx-8 text-sm font-medium tracking-widest text-gray-500 uppercase">
          Sustainable Materials
        </span>
        <span className="mx-8 text-sm font-medium tracking-widest text-indigo-500 uppercase">
          •
        </span>
        <span className="mx-8 text-sm font-medium tracking-widest text-gray-500 uppercase">
          Worldwide Shipping
        </span>
        <span className="mx-8 text-sm font-medium tracking-widest text-indigo-500 uppercase">
          •
        </span>
        <span className="mx-8 text-sm font-medium tracking-widest text-gray-500 uppercase">
          Modern Designs
        </span>
        <span className="mx-8 text-sm font-medium tracking-widest text-indigo-500 uppercase">
          •
        </span>
      </Marquee>
    </div>
  );
}
