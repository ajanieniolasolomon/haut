import React, { useState, useRef } from 'react';

const SpinWheel = ({
  wheelData = [],
  onItemSelected = null
}) => {

  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef(null);

  const segmentAngle = 360 / wheelData.length;

  // Generate colors for segments
  const colors = [
    'bg-black', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500',
    'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-orange-500'
  ];

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setResult(null);

    // Random number of full rotations plus random final angle
    const fullRotations = Math.floor(Math.random() * 5) + 5; // 5-10 full rotations
    const randomAngle = Math.random() * 360; // Random stopping angle
    const totalRotation = fullRotations * 360 + randomAngle;

    setRotation(prev => prev + totalRotation);

    // Set result after animation completes
    setTimeout(() => {
      // Calculate which segment the pointer is pointing to
      const finalAngle = (rotation + totalRotation) % 360;
      // Since pointer is at top (0 degrees) and segments start from 0, we need to adjust
      const adjustedAngle = (360 - finalAngle) % 360;
      const segmentIndex = Math.floor(adjustedAngle / segmentAngle) % wheelData.length;

      const selectedItem = wheelData[segmentIndex];

      
     setResult(selectedItem);
      setIsSpinning(false);
      if (onItemSelected) {
        onItemSelected(selectedItem);
      }
    }, 3000);
  };

  const resetWheel = () => {
    setRotation(0);
    setResult(null);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-2 sm:p-4">
      <div className=" p-4 sm:p-8 max-w-2xl w-full mx-2">


        <div className="relative flex justify-center mb-4 sm:mb-8">
          {/* Wheel Container */}
          <div className="relative">
            {/* Pointer/Stopper */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 sm:-translate-y-4 z-20">
              <div className="w-0 h-0 border-l-[15px] sm:border-l-[20px] border-r-[15px] sm:border-r-[20px] border-b-[30px] sm:border-b-[40px] border-l-transparent border-r-transparent border-b-red-500 drop-shadow-2xl shadow-black"></div>
              <div className="absolute top-[25px] sm:top-[35px] left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full shadow-lg"></div>
            </div>

            {/* Wheel */}
            <div
              ref={wheelRef}
              className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 sm:border-8 border-gray-600 relative overflow-hidden shadow-2xl bg-gray-700"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: isSpinning ? 'transform 3s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none'
              }}
            >
              {wheelData.map((item, index) => {
                const angle = index * segmentAngle;
                const colorClass = colors[index % colors.length];

                return (
                  <div
                    key={item.id + index}
                    className={`absolute w-full h-full ${colorClass} flex items-center justify-center`}
                    style={{
                      clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((segmentAngle * Math.PI) / 180)}% ${50 - 50 * Math.sin((segmentAngle * Math.PI) / 180)}%)`,
                      transform: `rotate(${angle}deg)`,
                      transformOrigin: '50% 50%'
                    }}
                  >
                    <div
                      className="text-white font-bold text-lg sm:text-xl text-center px-1 leading-tight"
                      style={{
                        transform: `rotate(${segmentAngle / 2}deg) translate(0, -60px) translate(0, ${window.innerWidth < 640 ? '-10px' : '-20px'})`,
                        transformOrigin: '50% 50%',
                        maxWidth: '60px'
                      }}
                    >
                      {item.name === "No item won" || item.name === "Retry again"
                        ? <span className="text-xs sm:text-xs">{item.name}</span>
                        : "?"
                      }
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4 sm:mb-6 px-4">
          
          <button
  onClick={spinWheel}
  disabled={isSpinning}
  type="button"
  className="group relative block w-full sm:w-auto focus:outline-none font-bold uppercase cursor-pointer tracking-wider disabled:cursor-not-allowed"
>
  <span
    className="absolute left-0 top-0 block w-full h-[38px] bg-blue-600 text-white rounded-[8px] transition-transform duration-100 ease-in-out translate-y-[6px] group-active:translate-y-[3px] disabled:group-active:translate-y-[6px]"
    aria-hidden="true"
  ></span>

  <span
    className="relative text-base block leading-none px-10 py-[10px] h-[38px] box-border bg-blue-700 text-white rounded-[8px] transition-all duration-100 ease-in-out group-active:translate-y-[3px] opacity-100 disabled:opacity-70"
  >
    {isSpinning ? 'Spinning...' : 'Spin Wheel'}
  </span>
</button>

         
        </div>

        {/* Result Display */}
        {result && result.name.toString().toLowerCase() === 'retry again' && (
          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg p-4 sm:p-6 text-center animate-pulse mx-2 sm:mx-0">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">🎉 Result 🎉</h2>
            <p className="text-lg sm:text-xl font-semibold text-white">{result.name}</p>
            {result.quantity > 0 && (
              <p className="text-base sm:text-lg text-white mt-2">Quantity: {result.quantity}</p>
            )}
            {result.imageUrl && (
              <img
                src={result.imageUrl}
                alt={result.name}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full mx-auto mt-4 border-4 border-white shadow-lg"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpinWheel;