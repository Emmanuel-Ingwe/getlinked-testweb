import React from 'react'
import Button from '../../global/Button'

type Props = {}

const index = (props: Props) => {
  return (
    <>
        <section id="" className="container">
            <div className="grid xl:grid-cols-2 gap-8 xl:gap-20 items-center">
                <div className="ml-[64px] mt-[68px] w-/5">
                    <div className="">
                        <div className="">
                            <img src="/Images/creative-1@2x.png" width={26} height={32} alt="star2x" className='animate-pulse' />
                        </div>
                        <h1 className="text-[70px] font-extrabold">getlinked Tech</h1>
                    </div>
                    <div className="flex">
                        <h1 className="text-[70px] font-extrabold">Hackathon <span>1.0</span></h1>
                        <div className="flex">
                            <img src="/Images/bomb-img.png" width={26} height={32} alt="bomb" className='animate-pulse' />
                            <img src="/Images/chain.png" width={26} height={32} alt="chain" className='animate-pulse' />
                        </div>
                    </div>
                    <div className="">
                        <p className="">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                    </div>
                    <Button
                        label='Register'
                     />
                </div>

                <div className="flex">
                    <div className='flex'>
                        <img src="/Images/hero-img.png" alt="" />
                        <img src="/Images/image-1@2x.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default index