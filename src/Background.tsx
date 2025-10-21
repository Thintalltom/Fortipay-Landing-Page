import React from "react";

const BackgroundLines: React.FC = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
    >
      {/* Vertical Dotted Lines */}
      <line x1="200" y1="0" x2="200" y2="900" stroke="#D9D9D9" strokeDasharray="8 8" />
      <line x1="720" y1="0" x2="720" y2="900" stroke="#D9D9D9" strokeDasharray="8 8" />
      <line x1="1240" y1="0" x2="1240" y2="900" stroke="#D9D9D9" strokeDasharray="8 8" />

      {/* Horizontal Dotted Lines */}
      <line x1="0" y1="250" x2="1440" y2="250" stroke="#D9D9D9" strokeDasharray="8 8" />
      <line x1="0" y1="500" x2="1440" y2="500" stroke="#D9D9D9" strokeDasharray="8 8" />
      <line x1="0" y1="750" x2="1440" y2="750" stroke="#D9D9D9" strokeDasharray="8 8" />

      {/* Curved Connections - Rounded corners */}
      <path
        d="M 200 250 Q 200 320 270 320 H 350"
        stroke="#D9D9D9"
        strokeWidth={8}
        strokeDasharray="8 10"
        fill="transparent"
      />
      <path
        d="M 1240 500 Q 1240 430 1170 430 H 1100"
        stroke="#D9D9D9"
        strokeWidth={2}
        strokeDasharray="8 10"
        fill="transparent"
      />
      <path
        d="M 200 250 Q 200 320 270 320 H 350"
        stroke="#D9D9D9"
        strokeWidth={8}
        strokeDasharray="8 10"
        fill="transparent"
      />
      <path
        d="M 200 250 Q 200 320 270 320 H 350"
        stroke="#D9D9D9"
        strokeWidth={8}
        strokeDasharray="8 10"
        fill="transparent"
      />
    </svg>
  );
};

export default BackgroundLines;
