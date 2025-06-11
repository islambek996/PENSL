import React from 'react'
import Image1 from '../assets/start1.png'
import Image2 from '../assets/start2.png'
import Image3 from '../assets/start3.png'
import Image4 from '../assets/start4.png'
import Image5 from '../assets/start5.png'

const TeamSection = () => {
    const profiles = [
        {
            image: Image1,
            name: 'Leah Salomon',
            role: 'UI Designer'
        },
        {
            image: Image2,
            name: 'Colin Timmons',
            role: 'UX Designer'
        },
        {
            image: Image3,
            name: 'Miguel Osborne',
            role: 'Front-end Developer'
        },
        {
            image: Image4,
            name: 'Taylor Simon',
            role: 'Product Manager'
        },
        {
            image: Image5,
            name: 'Steven MacAlister',
            role: 'Copyrighter'
        },
    ]
    
    return (
        <div id="team-section" className='px-10 xl:px-20 py-32'>
            
            <div className='text-left max-w-[1000px]'>
                <h1 className='text-5xl mb-5'>Startup Crew</h1>

                <p className='text-lg mb-10'>The most important part of the Startup Framework is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks from UI Kit.</p>
            
                <div className='flex flex-col md:flex-row flex-wrap justify-stretch'>
                    {profiles.map((profile, index) => (
                        <div className='py-5 w-40  mb-10 md:mb-0 mx-auto md:mx-0 md:mr-20 lg:mr-40 md:w-[17%]' key={index}>
                            <img src={profile.image} alt="Profile" className='rounded-[50px] mb-5 h-20' />
                            <p className='text-lg'>{profile.name}</p>
                            <p className='text-sm'>{profile.role}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default TeamSection