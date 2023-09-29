import React from 'react'
import Button from '../../global/Button'
import Image from 'next/image'

type Props = {}

const index = (props: Props) => {
  return (
    <>
        <section id="" className="container">
            <div className="grid xl:grid-cols-2 gap- xl:gap- items items-start">
                <div className="mt-[80px]">
                    <div className="relative">
                        <div className="flex justify-end relativ absolute right-[150px] -top-[44px]">
                            <img src="/Images/creative-1@2x.png" width={53} height={72} alt="creative" className='' />
                        </div>
                        <h1 className="text-[70px] font-extrabold">getlinked Tech</h1>
                    </div>
                    <div className="flex">
                        <h1 className="text-[70px] font-extrabold">Hackathon <span className='text text-fuchsia-600'>1.0</span></h1>
                        <div className="flex">
                            <div className="">
                                <img src="/Images/chain.png" width={26} height={32} alt="chain" className='' />
                            </div>
                            <div className="">
                                <img src="/Images/bomb-img.png" width={26} height={32} alt="bomb" className='' />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                    </div>
                    <Button
                        label='Register'
                     />
                </div>

                <div className="flex justify-end relative">
                        <Image src="/Images/hero-img.png" alt="" width={940} height={715} className='' />
                        <img src="/Images/image-1@2x.png" alt=""  height={641} width={577} className='absolute animate-pulse -translate-x-9' />
                </div>
            </div>
        </section>
    </>
  )
}

export default index