import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const Room = () => {
  const { roomId } = useParams(); // Get the room ID from the URL parameters
  const containerRef = useRef(null); // Create a reference for the container div

  useEffect(() => {
    const Mymeeting = async () => {
      const appID = 1181415195;
      const serverSecret = "41b639304edd235a722d7499e41069be";

      // Generate the kit token for the video conference
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID, 
        serverSecret, 
        roomId, 
        Date.now().toString(), 
        'username'
      );
      
      // Create the ZegoUIKitPrebuilt instance
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      
      // Join the room with the given configuration
      zp.joinRoom({
        container: containerRef.current,
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
      });
    };

    Mymeeting(); // Call the function to set up the meeting when the component mounts
  }, [roomId]); // Dependency array ensures this effect runs only when roomId changes

  return (
    <div className='room-page'>
      <div className='chat-container' ref={containerRef} />
    </div>
  );
};

export default Room;
