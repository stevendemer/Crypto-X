import React from 'react';

interface IProps {

};

const Hero = (props: IProps) => {
  return (
    <>
        <div className="relative">
            <div className="brightness-50">
                <video src='video.mp4' autoPlay loop muted />
            </div>
            <div className="absolute top-0 right-0 left-0 text-center mt-60 brightness-80">
                <div className="text-4xl text-white font-pop italic font-semibold">The definite source for crypto</div>
                <div className="text-2xl text-white font-pop italic">The only website for crypto.</div>
            </div>
            {/* Hero title */}
        </div>
    </>
  );
}

export default Hero;