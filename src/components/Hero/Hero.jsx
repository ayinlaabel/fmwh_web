const baseUrl = process.env.PUBLIC_URL;

const Hero = () => {
  return (
    <div
      className={`relative w-full h-[35rem] bg-cover flex items-center justify-center overflow-hidden`}
    >
      <img
        src={
          baseUrl +
          "/behavioral-based-interview-woman-interviewing-candidate.webp"
        }
        alt=''
        className='object-cover'
      />
      <div className='absolute bg-[#000] opacity-90 h-full w-full top-0 right-0'></div>
    </div>
  );
};

export default Hero;
