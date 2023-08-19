import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BoxImg from '../public/assets/projects/box.png';
import ChatImg from '../public/assets/projects/chat.png'
import EcomImg from '../public/assets/projects/ecom.png'
import TicImg from '../public/assets/projects/tic.png'
import CnnImg from "../public/assets/projects/cnn.png"
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h2 className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </h2>
        <div className='grid md:grid-cols-2 gap-8 mt-5'>
          <ProjectItem
            title='Box office App'
            backgroundImg={BoxImg}
            projectUrl='/boxoffice'
            tech='React JS'
          />
          <ProjectItem
            title='Chat App'
            backgroundImg={ChatImg}
            projectUrl='/chat'
            tech='React JS-Firebase'

          />
          <ProjectItem
            title='Ecommerce App'
            backgroundImg={EcomImg}
            projectUrl='/ecom'
            tech='React JS-Commerce JS'

          />
          <ProjectItem
            title='Devanagari Character Recognition'
            backgroundImg={CnnImg}
            projectUrl='/cnn'
            tech='Python-Keras-Scikit Learn-Pandas'

          />
          <ProjectItem
            title='Tic Tac Toe Game'
            backgroundImg={TicImg}
            projectUrl='/tic'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;