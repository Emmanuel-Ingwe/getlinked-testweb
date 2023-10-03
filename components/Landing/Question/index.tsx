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
            <div className="grid xl:grid-cols-2 gap-5 xl:gap- items-start">
                <div className="">
                  <div className="">
                    <h1 className="">Frequently Asked</h1>
                    <h1><span className='text-[32px] font-bold text text-fuchsia-600'>Questions</span></h1>
                  </div>
                  <div className="">
                    <p className="">We got answers to the questions that you might want to ask about getlinked Hackathon 1.0</p>
                  </div>
                  <div className="mb-[30px] mt-[21px]">
                        {items.map((item, index) => {
                            return (
                          <p className='font-montserrat text-[14px] mb-[26px]'>{item.span} {''} {item.i}</p>
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