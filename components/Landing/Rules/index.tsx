import React from 'react'

type Props = {}

const index = (props: Props) => {
  return (
    <>
    <div className="border-b border-gray-700">
        <section id="" className="container">
            <div className="grid xl:grid-cols-2 gap-5 xl:gap- items-start">
                <div className="mt-[63px] order-2">
                  <div className="flex items-center">
                    <img src="/images/sitting.png" width={664} height={664} alt="big-idea" />
                  </div>
                </div>

                <div className="mt-[193px] order-1">
                  <div className="flex flex-col">
                    <div className="">
                      <h2 className='text-[32px] font-bold'>Rules and</h2>
                      <h2><span className='text-[32px] font-bold text text-fuchsia-600'>Guidelines</span></h2>
                    </div>
                    <div className="mt-[16px] mr-[48px] xl:w-[535px] xl:h-[165px]">
                      <p className='fon font-montserrat text-[14px]'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                            clear as day: to shape the future. Whether you're a coding genius, a 
                            design maverick, or a concept wizard, you'll have the chance to transform 
                            your ideas into reality. Solving real-world problems, pushing the boundaries
                            of technology, and creating solutions that can change the world,
                            that's what we're all about!
                      </p>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default index