import React from 'react'

type Props = {}

const index = (props: Props) => {
  return (
    <>
    <div className="border-b border-gray-700">
        <section id="" className="container">
            <div className="grid xl:grid-cols-2 gap-5 xl:gap- items-start">
                <div className="mt-[63px]">
                  <div className="flex items-center">
                    <img src="/images/the-big-idea-1@2x.png" alt="big-idea" />
                  </div>
                </div>

                <div className="mt-[193px]">
                  <div className="flex items-center justify-center">
                    <div className="f float-right">
                      <h2 className=''>Introduction to getlinked <span className='text text-fuchsia-600'>tech Hackathon 1.0</span></h2>
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