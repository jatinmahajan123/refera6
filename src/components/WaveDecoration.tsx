
const WaveDecoration = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* First wave */}
      <svg
        width="100%"
        height="452"
        viewBox="0 0 1440 452"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <path
          d="M-1 397.997C129.254 453.548 220.379 463.406 359.5 436.997C519.764 406.575 720 225.997 720 225.997C720 225.997 920.236 45.4197 1080.5 14.9974C1219.62 -11.4115 1310.75 -1.55335 1441 53.9974"
          stroke="#305AFF"
          strokeOpacity="0.65"
          strokeDasharray="4 4"
        />
      </svg>
      
      {/* Second wave */}
      <svg
        width="100%"
        height="452"
        viewBox="0 0 1440 452"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20"
      >
        <path
          d="M-1 397.997C129.254 453.548 220.379 463.406 359.5 436.997C519.764 406.575 720 225.997 720 225.997C720 225.997 920.236 45.4197 1080.5 14.9974C1219.62 -11.4115 1310.75 -1.55335 1441 53.9974"
          stroke="#305AFF"
          strokeOpacity="0.3"
          strokeDasharray="8 8"
        />
      </svg>
    </div>
  );
};

export default WaveDecoration;
