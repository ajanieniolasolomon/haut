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

  // Generate colors for segments (converted to hex values for SVG)
  const colors = [
    '#161636', '#9ec2cd', '#5b426c', '#ea7146',
    '#161636', '#9ec2cd', '#5b426c', '#ea7146'
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

  // Function to create SVG path for each segment
  const createSegmentPath = (index) => {
    const startAngle = index * segmentAngle;
    const endAngle = (index + 1) * segmentAngle;
    
    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;
    
    const radius = 50; // 50% of the container
    const centerX = 50;
    const centerY = 50;
    
    const x1 = centerX + radius * Math.cos(startAngleRad);
    const y1 = centerY + radius * Math.sin(startAngleRad);
    const x2 = centerX + radius * Math.cos(endAngleRad);
    const y2 = centerY + radius * Math.sin(endAngleRad);
    
    const largeArcFlag = segmentAngle > 180 ? 1 : 0;
    
    return `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-2 sm:p-4">
      <div className="p-4 sm:p-8 max-w-2xl w-full mx-2">
         <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">Spin the Wheel!</h1>
      <p className="text-gray-300 mb-5">Click the Spin button to win a prize</p>

        <div className="relative flex justify-center mb-4 sm:mb-8">
          {/* Wheel Container */}
          <div className="relative">
            {/* Pointer/Stopper */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 sm:-translate-y-4 z-20">
              <div className="absolute top-[5px] sm:top-[5px] left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full shadow-lg"></div>
              <div className="w-0 h-0 border-l-[15px] sm:border-l-[20px] border-r-[15px] sm:border-r-[20px] border-t-[30px] sm:border-t-[40px] border-l-transparent border-r-transparent border-t-[#EA7146] drop-shadow-2xl shadow-black"></div>
            </div>

            {/* Wheel - SVG Implementation */}
            <div className="relative">
              <svg
                ref={wheelRef}
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-[12px] sm:border-8 border-[#EA7146CC] shadow-2xl"
                viewBox="0 0 100 100"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: isSpinning ? 'transform 3s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none'
                }}
              >
                {wheelData.map((item, index) => {
                  const segmentPath = createSegmentPath(index);
                  const color = colors[index % colors.length];
                  
                  // Calculate text position - center of each segment
                  const middleAngle = (index * segmentAngle + segmentAngle / 2) * Math.PI / 180;
                  const textRadius = 28; // Distance from center
                  const textX = 50 + textRadius * Math.cos(middleAngle);
                  const textY = 50 + textRadius * Math.sin(middleAngle);
                  
                  return (
                    <g key={item.id + index}>
                      {/* Segment background */}
                      <path
                        d={segmentPath}
                        fill={color}
                        stroke="#ffffff"
                        strokeWidth="0.3"
                      />
                      
                      {/* Text */}
                     
                        {item.name === "No item won" || item.name === "Retry again"
                          ? <text
                        x={textX}
                        y={textY}
                        fill="white"
                        fontSize="5"
                        fontWeight="900"
                        textAnchor="middle"
                        dominantBaseline="central"
                        transform={`rotate(${index * segmentAngle + segmentAngle / 2}, ${textX}, ${textY})`}
                        stroke="black"
                        strokeWidth="0.3"
                        paintOrder="stroke fill"
                      >{item.name}
                          </text>
                          : <text
                        x={textX}
                        y={textY}
                        fill="white"
                        fontSize="5"
                        fontWeight="900"
                        textAnchor="middle"
                        dominantBaseline="central"
                      
                        stroke="black"
                        strokeWidth="0.3"
                        paintOrder="stroke fill"
                      >{'?'}
                          </text>
                        }
                    
                    </g>
                  );
                })}
              </svg>
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
              className="absolute left-0 top-0 block w-full h-[38px] bg-[#EA7146CC] text-white rounded-[8px] transition-transform duration-100 ease-in-out translate-y-[6px] group-active:translate-y-[3px] disabled:group-active:translate-y-[6px]"
              aria-hidden="true"
            ></span>

            <span
              className="relative text-base block leading-none px-10 py-[10px] h-[38px] box-border bg-[#EA7146] text-white rounded-[8px] transition-all duration-100 ease-in-out group-active:translate-y-[3px] opacity-100 disabled:opacity-70"
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