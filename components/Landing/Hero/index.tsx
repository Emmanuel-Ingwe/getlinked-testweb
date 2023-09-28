import React from 'react'
import Button from '../../global/Button'
import Image from 'next/image'

type Props = {}

const index = (props: Props) => {
  return (
    <>
        <section id="" className="container">
            <div className="grid xl:grid-cols-2 gap-8 xl:gap-20 items-center">
                <div className="">
                    <div className="">
                        <div className="">
                            <img src="/Images/creative-1@2x.png" width={26} height={32} alt="star2x" className='animate-pulse' />
                        </div>
                        <h1 className="text-[70px] font-extrabold">getlinked Tech</h1>
                    </div>
                    <div className="flex">
                        <h1 className="text-[70px] font-extrabold">Hackathon <span>1.0</span></h1>
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
                            <Image src="/Images/hero-img.png" alt="" width={928} height={715} className='' />
                            <img src="/Images/image-1@2x.png" alt=""  height={641} width={667} className='absolute' />
                </div>
            </div>
        </section>
    </>
  )
}

export default index