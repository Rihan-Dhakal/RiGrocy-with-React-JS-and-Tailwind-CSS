import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { TbCircleNumber3Filled } from "react-icons/tb";
import { TbCircleNumber4Filled } from "react-icons/tb";
import { PiFactory, PiPlantDuotone } from "react-icons/pi";
import { SlBadge } from 'react-icons/sl';
import { BsTruck } from 'react-icons/bs';

const Process = () => {
    const renderSteps = steps.map((step) => {
        return (
            <div className=''>
                <span className='text-8xl w-18 h-18  flex justify-center items-center outline-[3px] outline-zinc-800 outline-offset-7 outline-dashed rounded-full   '>{step.number}</span>
                <div className='flex items-center '>

                    <span className='flex bg-gradient-to-b from-orange-400 to-orange-500 text-white text-3xl w-20 h-15 justify-center items-center rounded-full mr-5 '>{step.icon}</span>

                    <div>
                        <h4 className='text-zinc-800 text-2xl font-bold'>{step.title}</h4>
                        <p className='text-zinc-600 mt-2'>{step.para}</p>
                    </div>
                </div>

            </div>


        )
    })

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-[3rem] py-[5rem]'>
                <div className='mr-auto w-fit '>
                    <Heading highlight='Our' heading='Process' />
                </div>

                {/* STEPS */}
                <div className='flex flex-1 gap-10 mt-20 items-center justify-center' >
                    {renderSteps}
                </div>


            </div>
        </section>
    )
}

export default Process;
const steps = [
    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: 'Sourcing',
        para: 'It is a long established fact that a reader',
        icon: <PiPlantDuotone />
    },
    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: 'Manufacturing',
        para: 'It is a long established fact that a reader',
        icon: <PiFactory />
    },
    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: 'Quality Control',
        para: 'It is a long established fact that a reader',
        icon: <SlBadge />
    },
    {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: 'Logistics',
        para: 'It is a long established fact that a reader',
        icon: <BsTruck />
    },

]