const baseUrl = process.env.PUBLIC_URL;

const About = () => {
  return (
    <div>
      {/* Section- About Section  */}
      <div className='flex h-[30rem] w-full px-[5rem] items-center divide-x'>
        <div className='flex-none w-[45rem] px-6'>
          <div className='w-fit px-5 py-1 rounded-[50px] bg-[#FFDA22] text-[13px] font-bold mb-[10px] '>
            <span>About</span>
          </div>
          <div className='text-[36px] font-bold mb-[20px]'>
            <h2>A breif History about Lands Department</h2>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              dolores optio eos maiores quisquam totam praesentium tempora
              tenetur? Maiores expedita aspernatur officia voluptatibus facere
              fugiat dolores, saepe mollitia aut ad.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
              delectus beatae veritatis eos totam blanditiis dolorem iste
              molestiae placeat omnis illo sapiente sit est voluptates adipisci
              cupiditate. Sunt, harum maxime.
            </p>
          </div>
        </div>
        <div className='flex-1 px-6 flex justify-center'>
          <div className='h-[20rem] w-[20rem] overflow-hidden rounded-[20px] shadow-xl border-4'>
            <img
              src={baseUrl + "/fha-appraisals.jpg"}
              alt=''
              className='object-cover h-full w-full'
            />
          </div>
        </div>
      </div>
      {/* Section- Mission and Vission */}
      <div className='flex w-full h-[30rem]'>
        <div className='flex-1 bg-[#04724D] flex items-center justify-center'>
          <div className='w-full flex flex-col items-center px-9'>
            <div className='w-fit bg-[#FFDA22] px-4 py-1 rounded-[20px] mb-[24px] font-bold text-[#04724D]'>
              <span>Our Mission</span>
            </div>
            <div className='text-center font-medium text-white'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut id
                laboriosam labore dignissimos velit, rerum culpa, sunt qui
                exercitationem fugiat commodi blanditiis et voluptas explicabo
                fuga repellendus sit, provident cumque!
              </p>
            </div>
          </div>
        </div>
        <div className='flex-1 bg-[#56876D] flex items-center justify-center'>
          <div className='w-full flex flex-col items-center px-9'>
            <div className='w-fit bg-[#FFDA22] px-4 py-1 rounded-[20px] mb-[24px] font-bold text-[#56876D]'>
              <span>Our Vission</span>
            </div>
            <div className='text-center font-medium text-white'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut id
                laboriosam labore dignissimos velit, rerum culpa, sunt qui
                exercitationem fugiat commodi blanditiis et voluptas explicabo
                fuga repellendus sit, provident cumque!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
