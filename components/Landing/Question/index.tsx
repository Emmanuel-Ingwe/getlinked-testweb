import React from 'react'

type para = {
  span: string;
  i: string;
};


const index = () => {
  const items: para[] = [
    {
      span: "Can I work on a project I started before the hackathon?",
      i: "+"
    },
    {
      span: "What happens if I need help during the hackathon?",
      i: "+"
    },
    {
      span: "What happens if I don't have an idea for a project?",
      i: "+"
    },
      {
      span: "Can I join a team or do I have to come with one?",
      i: "+"
    },
    {
      span: "What happens after the hackathon ends",
      i: "+"
    },
    {
      span: "Can I work on a project I started before the hackathon?",
      i: "+"
    },
];
  return (
    <>
    <div className="border-b border-gray-700">
        <section id="" className="container">
            <div className="grid xl:grid-cols-2 mt-[150px] items-center justify-center">
                <div className="it flex flex-col">
                  <div className="mb-[16px]">
                    <h1 className="text-[32px] font-bold">Frequently Asked</h1>
                    <h1><span className='text-[32px] font-bold text text-fuchsia-600'>Questions</span></h1>
                  </div>
                  <div className="lead leading-[27px]">
                    <p className="text-[14px]">We got answers to the questions that you might</p>
                    <p className="text-[14px] mb-[26px]">want to ask about getlinked Hackathon 1.0</p>
                  </div>
                  <div className="mb-[30px] mt-[68px]">
                        {items.map((item, index) => {
                            return (
                          <div className="flex justify-between w-[427px]">
                            <div className="">
                              <p className='font-montserrat text-[14px] mb-[26px]'>{item.span}</p>
                            </div>
                            <div className="j flex justify-end">
                              <span>{item.i}</span>
                            </div>
                          </div>
                        )})}
                    </div>
                </div>

                <div className="">
                  <div className="">
                    <img src="/Images/.svg" alt="" />
                  </div>
                  <div className="">
                    <img src="/Images/cwok-casual-21-1@2x.png" alt="casual" />
                  </div>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default index