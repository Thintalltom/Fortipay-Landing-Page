export const BackgroundLines = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Horizontal lines */}
        <path
          d="M0,300 C240,280 480,320 720,300 C960,280 1200,320 1440,300"
          stroke="#E5E7EB"
          strokeWidth="1"
          strokeDasharray="6 6"
          fill="none"
        />
        <path
          d="M0,600 C240,580 480,620 720,600 C960,580 1200,620 1440,600"
          stroke="#E5E7EB"
          strokeWidth="1"
          strokeDasharray="6 6"
          fill="none"
        />
        {/* Vertical lines */}
        <path
          d="M240,0 C220,300 260,600 240,900"
          stroke="#E5E7EB"
          strokeWidth="1"
          strokeDasharray="6 6"
          fill="none"
        />
        <path
          d="M720,0 C700,300 740,600 720,900"
          stroke="#E5E7EB"
          strokeWidth="1"
          strokeDasharray="6 6"
          fill="none"
        />
        <path
          d="M1200,0 C1180,300 1220,600 1200,900"
          stroke="#E5E7EB"
          strokeWidth="1"
          strokeDasharray="6 6"
          fill="none"
        />
        {/* Curved connecting lines */}
        <path
          d="M240,300 C480,250 600,350 720,300"
          stroke="#E5E7EB"
          strokeWidth="1"
          strokeDasharray="6 6"
          fill="none"
        />
        <path
          d="M720,300 C840,250 1080,350 1200,300"
          stroke="#E5E7EB"
          strokeWidth="1"
          strokeDasharray="6 6"
          fill="none"
        />
        <path
          d="M240,600 C480,550 600,650 720,600"
          stroke="#E5E7EB"
          strokeWidth="1"
          strokeDasharray="6 6"
          fill="none"
        />
        <path
          d="M720,600 C840,550 1080,650 1200,600"
          stroke="#E5E7EB"
          strokeWidth="1"
          strokeDasharray="6 6"
          fill="none"
        />
      </svg>
    </div>
  )
}
