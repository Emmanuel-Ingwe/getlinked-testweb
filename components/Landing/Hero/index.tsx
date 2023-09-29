import React from 'react'
import Button from '../../global/Button'
import Image from 'next/image'
import Timer from '../../global/Timer'

type Props = {}

const index = (props: Props) => {
  return (
    <>
        <section id="" className="container">
            <div className="grid xl:grid-cols-2 gap- xl:gap- items-start">
                <div className="mt-[80px]">
                    <div className="relative">
                        <div className="flex justify-end relativ absolute right-[150px] -top-[44px]">
                            <img src="/Images/creative-1@2x.png" width={53} height={72} alt="creative" className='' />
                        </div>
                        <h1 className="text-[70px] font-extrabold">getlinked Tech</h1>
                    </div>
                    <div className="flex relative">
                        <h1 className="text-[70px] font-extrabold leading-none">Hackathon <span className='text text-fuchsia-600'>1.0</span></h1>
                        <div className="flex absolute -right-5 bottom-3">
                            <div className="">
                                <img src="/Images/chain.png" width={80} height={82} alt="chain" className='' />
                            </div>
                            <div className="">
                                <img src="/Images/bomb-img.png" width={78} height={32} alt="bomb" className='' />
                            </div>
                        </div>
                    </div>
                    <div className="w-[80%] mt-[8px]">
                        <p className="text-xl">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                    </div>
                    <Button
                    className='mt-[41px] mb-[77px]'
                        label='Register'
                     />

                     <Timer />
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