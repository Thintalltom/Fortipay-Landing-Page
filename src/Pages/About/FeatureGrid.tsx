import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const FeatureGrid = () => {
  const features = [
    {
      id: 1,
      title: "Innovation",
      description:
        "We push the boundaries of what’s possible through creativity, technology, and forward-thinking solutions.",
      size: "large",
      bg: "bg-[#013220]",
    },
    {
      id: 2,
      title: "Trust Through Transparency",
      description:
        "Integrity and honesty are at the heart of everything we do. We build trust by being open.",
      size: "small",
      bg: "bg-white",
    },
    {
      id: 3,
      title: "Simplicity at Scale",
      description:
        "We transform complexity into clarity, delivering seamless user experiences that scale effortlessly.",
      size: "small",
      bg: "bg-orange-500 text-white",
    },
    {
      id: 4,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork. Together, we achieve more by leveraging diverse strengths.",
      size: "small",
      bg: "bg-white",
    },
    {
      id: 5,
      title: "Integrity First",
      description:
        "We do what is right, not what is easy. Accountability and ethics guide our decisions.",
      size: "small",
      bg: "bg-[#013220]",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {/* Large Card */}
      {features
        .filter((item) => item.size === "large")
        .map((feature) => (
          <div
            key={feature.id}
            className={`p-6 rounded-lg text-white flex flex-col justify-between shadow-md hover:shadow-xl transition ${feature.bg} md:row-span-2`}
          >
            <div>
              <h2 className="text-2xl font-bold mb-3">{feature.title}</h2>
              <p className="text-sm opacity-90">{feature.description}</p>
            </div>
            <button className="mt-4 flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md w-fit hover:bg-gray-200 transition">
              Learn more <FiArrowUpRight />
            </button>
          </div>
        ))}

      {/* Image Placeholder */}
      <div className="bg-gray-200 rounded-lg shadow-md hover:shadow-xl transition md:col-span-1 md:row-span-2"></div>

      {/* Small Cards */}
      {features
        .filter((item) => item.size === "small")
        .map((feature) => (
          <div
            key={feature.id}
            className={`p-5 rounded-lg shadow-md hover:shadow-xl transition flex-1 ${feature.bg} ${
              feature.bg.includes("white") ? "text-black" : "text-white"
            }`}
          >
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm opacity-80 mb-3">{feature.description}</p>
            <button
              className={`flex items-center gap-2 px-3 py-2 rounded-md ${
                feature.bg.includes("white")
                  ? "bg-black text-white"
                  : "bg-white text-black"
              } hover:opacity-80 transition`}
            >
              {/* Learn more <FiArrowUpRight /> */}
            </button>
          </div>
        ))}
    </div>
  );
};

export default FeatureGrid;
