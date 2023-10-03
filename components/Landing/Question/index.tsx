import React from 'react'

type Props = {}

const index = (props: Props) => {
  return (
    <>
    <div className="border-b border-gray-700">
        <section id="" className="container">
            <div className="grid xl:grid-cols-2 gap-5 xl:gap- items-start">
                <div className="">
                  <h1 className="">Frequently Asked</h1>
                  <h1><span className='text-[32px] font-bold text text-fuchsia-600'>Questions</span></h1>
                </div>
                <div className="">
                  <p className="">We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
                </div>

                <div className="">
                  <div className=""></div>
                  <div className="">
                    <img src="cwok-casual-21-1@2x.png" alt="casual" />
                  </div>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default index