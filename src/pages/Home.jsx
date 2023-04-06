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
      <div className='h-[50rem] py-6 px-[6rem] flex items-center justify-center bg-[#F4F4F4]'>
        <div>
          <div className='flex items-center justify-center font-bold mb-2'>
            <span>Steps</span>
          </div>
          <div className='flex items-center justify-center font-bold text-[34px] mb-[36px]'>
            <h2>User Acceptance Testing</h2>
          </div>
          <div className='flex'>
            <div className='bg-[#fff] w-[20rem] h-[25rem] rounded-[20px] shadow-md hover:scale-[1.1] hover:cursor-pointer transition-all ease-in-out py-8 px-4 mx-4'>
              <div className='px-4 bg-[#000] w-fit text-white rounded-xl mx-auto mb-7'>
                <span>Step 1</span>
              </div>
              <div className='text-[24px] text-center font-bold mb-4'>
                <h2>Lorem ipsum dolor</h2>
              </div>
              <div className='text-center mb-[16px]'>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias alias fuga non fugit earum odit voluptatum est
                  eveniet, quod ipsa maiores inventore beatae sunt repellendus
                  cumque animi. Vero, placeat saepe.
                </p>
              </div>
              <div className='h-[3rem] w-[3rem] rounded-full shadow-md mx-auto flex items-center justify-center hover:cursor-pointer'>
                <div className='text-[24px]'>
                  <p className='hidden'>Next</p>
                  <i class='fa-solid fa-arrow-right'></i>
                </div>
              </div>
            </div>
            <div className='bg-[#fff] w-[20rem] h-[25rem] rounded-[20px] shadow-md hover:scale-[1.1] hover:cursor-pointer transition-all ease-in-out py-8 px-4 mx-4'>
              <div className='px-4 bg-[#000] w-fit text-white rounded-xl mx-auto mb-7'>
                <span>Step 2</span>
              </div>
              <div className='text-[24px] text-center font-bold mb-4'>
                <h2>Lorem ipsum dolor</h2>
              </div>
              <div className='text-center mb-[16px]'>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias alias fuga non fugit earum odit voluptatum est
                  eveniet, quod ipsa maiores inventore beatae sunt repellendus
                  cumque animi. Vero, placeat saepe.
                </p>
              </div>
              <div className='h-[3rem] w-[3rem] rounded-full shadow-md mx-auto flex items-center justify-center hover:cursor-pointer'>
                <div className='text-[24px]'>
                  <p className='hidden'>Next</p>
                  <i class='fa-solid fa-arrow-right'></i>
                </div>
              </div>
            </div>
            <div className='bg-[#fff] w-[20rem] h-[25rem] rounded-[20px] shadow-md hover:scale-[1.1] hover:cursor-pointer transition-all ease-in-out py-8 px-4 mx-4'>
              <div className='px-4 bg-[#000] w-fit text-white rounded-xl mx-auto mb-7'>
                <span>Step 3</span>
              </div>
              <div className='text-[24px] text-center font-bold mb-4'>
                <h2>Lorem ipsum dolor</h2>
              </div>
              <div className='text-center mb-[16px]'>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Molestias alias fuga non fugit earum odit voluptatum est
                  eveniet, quod ipsa maiores inventore beatae sunt repellendus
                  cumque animi. Vero, placeat saepe.
                </p>
              </div>
              <div className='h-[3rem] w-[3rem] rounded-full shadow-md mx-auto flex items-center justify-center hover:cursor-pointer'>
                <div className='text-[24px]'>
                  <p className='hidden'>Next</p>
                  <i class='fa-solid fa-arrow-right'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
