import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from 'next/image'

type Props = {}

const index = (props: Props) => {
        const [text, count] = useTypewriter({
            words: ["Igniting a Revolution in HR Innovation"],
            loop: true,
            delaySpeed: 1050,
        });

  return (
    <>
        <section id="" className="container">
            <div className="grid xl:grid-cols-2 gap-8 xl:gap-20 items-center">
                <div className="ml-[64px] mt-[68px]">
                    <img src="/Images/star@2x.png" width={26} height={32} alt="star2x" className='animate-pulse' />
                </div>
                <div className="">
                <h1 className='text-[27px] font-[700] italic tracking-wider'>
					<span>{text}</span>
					<Cursor cursorColor='indigo' />
				</h1>
                </div>
            </div>
        </section>
    </>
  )
}

export default index