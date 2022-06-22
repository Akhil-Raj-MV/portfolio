import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/dp.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h2 className='uppercase text-xl tracking-widest text-[#5651e5] justify-center'>
            About
          </h2>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I am a pre-final year undergraduate student at NIT Calicut,
            Working on different technologies in the field of Web development and 
            software development. What started out as a curiosity turned out into 
            love for programming and development.
          </p>
          <p>
            Currently, working on Front-end web development technologies. Looking forward to 
            expand my skillset to include both front-end and back-end technologies.

          </p>

        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;