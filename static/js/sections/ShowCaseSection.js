import React from 'react'
import Button from '../components/Button';
import Image1 from '../assets/show1.png';
import Image2 from '../assets/show2.png';
import Image3 from '../assets/show3.png';
import Image4 from '../assets/show4.png';
import SlideInLeftDiv from '../components/SlideInLeftDiv';

const ShowCaseSection = () => {
    const projects = [
        {
            name: 'Mozart Project',
            desc: 'UI KIT',
            image: Image1,
        },
        {
            name: 'Startup Framework 2.0',
            desc: 'FRAMEWORK',
            image: Image2,
        },
        {
            name: 'Fromo the Sky',
            desc: 'UI PHOTOS',
            image: Image3,
        },
        {
            name: 'Air Forces',
            desc: 'Pictures',
            image: Image4,
        },
    ]
  
    return (
        <div className='px-10 py-20'>
            <div className='w-full max-w-[1000px] mx-auto flex justify-between mb-10'>
                <h1>Last Works</h1>
                
                <div className='w-40 items-center hidden md:flex'>
                    <Button text="View all Works" type="primary" />
                </div>
            </div>

            <div className='md:flex md:flex-wrap mx-auto max-w-[1000px] gap-8'>
                {projects.map((project, index) => (
                    <SlideInLeftDiv
                        key={index}
                        duration={0.6} 
                        className='p-5 md:w-[calc(50%-1rem)] mb-10 text-left border-2 border-transparent hover:border-[#E93A7D] rounded-md
                                cursor-pointer duration-500'
                    >
                        <img className="w-full mb-5" src={project.image} alt="Project" />
                        <p className='mb-2 text-sm'>{project.desc}</p>
                        <h3 className='text-2xl lg:text-3xl'>{project.name}</h3>
                    </SlideInLeftDiv>
                ))}
            </div>

            <div className='flex items-center md:hidden justify-center'>
                <Button text="View all Works" type="primary" />
            </div>
        </div>
    )
}

export default ShowCaseSection