const { default: Hero } = require("../components/Hero/Hero");
const { default: Navbar } = require("../components/navbar/Navbar");

const Home = () => {
  return (
    <>
      <Hero />
      <div className='h-[35rem] py-6 px-[6rem] flex items-center justify-center'>
        <div>
          <div className='flex items-center justify-center font-bold mb-5'>
            <span>About Mobile App</span>
          </div>
          <div className='flex items-center justify-center font-bold text-[34px] mb-[14px]'>
            <h2>Download Mobile App</h2>
          </div>
          <div className='mb-[14px]'>
            <p className='text-center'>
              Lorem Ipsum è un testo segnaposto utilizzato nel settore della
              tipografia e della stampa. Lorem Ipsum è considerato il testo
              segnaposto standard sin dal sedicesimo secolo, quando un anonimo
              tipografo prese una cassetta di caratteri e li assemblò per
              preparare un testo campione. È sopravvissuto non solo a più di
              cinque secoli, ma anche al passaggio alla videoimpaginazione,
              pervenendoci sostanzialmente inalterato.
            </p>
          </div>
          <div className='flex items-center justify-center'>
            <button className='px-10 py-2 bg-[#04724D] rounded-[14px] text-white font-medium'>
              Download
            </button>
          </div>
        </div>
      </div>
      <div className='h-[35rem] py-6 px-[6rem] flex items-center justify-center bg-[#F4F4F4]'>
        <div>
          <div className='flex items-center justify-center font-bold mb-5'>
            <span>Steps</span>
          </div>
          <div className='flex items-center justify-center font-bold text-[34px] mb-[14px]'>
            <h2>User Acceptance Testing</h2>
          </div>
          <div className='mb-[14px]'>
            <p className='text-center'>
              Lorem Ipsum è un testo segnaposto utilizzato nel settore della
              tipografia e della stampa. Lorem Ipsum è considerato il testo
              segnaposto standard sin dal sedicesimo secolo, quando un anonimo
              tipografo prese una cassetta di caratteri e li assemblò per
              preparare un testo campione. È sopravvissuto non solo a più di
              cinque secoli, ma anche al passaggio alla videoimpaginazione,
              pervenendoci sostanzialmente inalterato.
            </p>
          </div>
          <div className='flex items-center justify-center'>
            <button className='px-10 py-2 bg-[#04724D] rounded-[14px] text-white font-medium'>
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
