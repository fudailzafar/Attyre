import React from "react";
import { Pipette } from "lucide-react";

export const EyeDropperColorPicker = ({ color, onChange, label }) => {
  const [isSupported, setIsSupported] = React.useState(false);
  const [showManualInput, setShowManualInput] = React.useState(false);

  React.useEffect(() => {
    // Check if EyeDropper API is supported
    setIsSupported('EyeDropper' in window);
  }, []);

  const handleEyeDropperClick = async () => {
    if (!isSupported) {
      setShowManualInput(true);
      return;
    }

    try {
      const eyeDropper = new window.EyeDropper();
      const result = await eyeDropper.open();
      onChange(result.sRGBHex);
    } catch (error) {
      // User cancelled or error occurred
      console.log('EyeDropper cancelled or error:', error);
    }
  };

  const handleManualColorChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col w-20 items-center justify-center gap-1">
      <div className="relative group">
        <div
          className="w-[60px] h-[60px] rounded-full border-[2.5px] border-solid border-black cursor-pointer transition-all duration-200 hover:scale-105"
          style={{ backgroundColor: color }}
          onClick={handleEyeDropperClick}
        />
        
        {/* Pipette icon overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div className="bg-black/70 rounded-full p-2">
            <Pipette className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
      
      <p className="h-[23px] font-['Playfair',Helvetica] font-semibold text-[#0b111d] text-xl text-center leading-[30px] whitespace-nowrap">
        {label}
      </p>

      {/* Manual input fallback for unsupported browsers */}
      {showManualInput && (
        <div className="mt-2">
          <input
            type="color"
            value={color}
            onChange={handleManualColorChange}
            className="w-8 h-8 rounded border-none cursor-pointer"
            title="Pick a color"
          />
          <button
            onClick={() => setShowManualInput(false)}
            variant="ghost"
            size="sm"
            className="ml-1 text-xs"
          >
            ✕
          </button>
        </div>
      )}

      {/* Show browser compatibility info */}
      {!isSupported && !showManualInput && (
        <p className="text-xs text-gray-500 mt-1 text-center">
          Click for manual picker
        </p>
      )}
    </div>
  );
};