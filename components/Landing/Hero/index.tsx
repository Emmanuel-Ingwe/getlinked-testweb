import React from 'react'

type Props = {}

const index = (props: Props) => {
  return (
    <>
        <section id="" className="container">
            <div className="grid xl:grid-cols-2 gap-8 xl:gap-20 items-center">
                <div className="ml-[64px] mt-[68px] order-2 xl:order-1">
                    <div className="">
                        <div className="">
                            <img src="/Images/star@2x.png" width={26} height={32} alt="star2x" className='animate-pulse' />
                        </div>
                        <h1 className="text-61xl">getlinked Tech</h1>
                    </div>
                    <div className="">
                        <h1 className="text-61xl">Hackathon <span>1.0</span></h1>
                        <div className="">
                            <img src="/Images/star@2x.png" width={26} height={32} alt="star2x" className='animate-pulse' />
                            <img src="/Images/star@2x.png" width={26} height={32} alt="star2x" className='animate-pulse' />
                        </div>
                    </div>
                    <div className="">
                        <p className="">Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                    </div>
                </div>
                <div className="">
                <div>
                    #
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default index