import React, { useRef } from 'react';
import { Camera } from 'react-camera-pro';
import { CameraOff } from 'lucide-react';

const CameraView = ({ showCamera, handleTakePhoto, setShowCamera }) => {
  const camera = useRef(null);

  return (
    <div className="flex justify-center">
      {showCamera ? (
        <div className="relative w-64 h-64 border border-gray-400 mb-4">
          <Camera ref={camera} aspectRatio="cover" className="absolute top-0 left-0 w-full h-full object-cover" />
          <button
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-[#2eb1b6] text-white px-4 py-2 rounded"
            onClick={() => handleTakePhoto(camera)}
          >
            Capture
          </button>
        </div>
      ) : (
        <button onClick={() => setShowCamera(true)} className="bg-[#2eb1b6] text-white px-4 py-2 rounded">Open camera</button>
      )}
      {showCamera && (
        <button onClick={() => setShowCamera(false)} className="bg-red-500 text-white px-4 py-2 h-64 rounded ml-4">
          <CameraOff color="white" size={24} />
        </button>
      )}
    </div>
  );
};

export default CameraView;
