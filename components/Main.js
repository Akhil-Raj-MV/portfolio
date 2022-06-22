import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';


const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Akhil</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m a student and an avid learner focussing on 
            learning web and software technologies.
          </p>
          <div className='inline-flex' >
          <a
             href="https://drive.google.com/file/d/1aFIcBuqgnkWT4RZGlKwCSQdHP9BRHmFa/view?usp=sharing" 
             download
             rel="noopener noreferrer" 
             target="_blank"
            >
                 <button 
                  className="inline-flex items-center text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  >
                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        <span>Resume</span>
                </button>
            </a>
          </div>
          <div className='flex items-center justify-between max-w-[250px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/akhil-raj/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/Akhil-Raj-MV'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            {/* <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;