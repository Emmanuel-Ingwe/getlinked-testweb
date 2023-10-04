import React from 'react'

type Item = {
  leftText: string;
  number: number;
  rightText: string;
}

const index = () => {
  const items: Item[] = [
    {
      leftTexth1: "Hackathon Announcement",
      leftTextp: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
      number: 1,
      rightText: "November 18, 2023",
    },
  ];
  return (
    <>
      <section className='container'>
        <div className="flex flex-col items-center mt-[72px]">
          <div className="">
            <h1 className="text-[32px] font-bold text-center">Timeline</h1>
            <p className="xl:w-[346px] text-center text-[14px] mt-[12px]">Here is the breakdown of the time we anticipate using for the upcoming event.</p>
          </div>  

          <div className="">
          <div className="p-4">
            {items.map((item, index) => (
              <div key={item.number} className="mb-4 p-4">
                <div className="flex items-center">
                  <div className="w-1/3 text-left flex flex-col items-center justify-between">
                    <p>{item.leftText}</p>
                  </div>
                  <div key={index} className="relative">  
                  <div className="h-[50px] w-3 bg-fuchsia-500 absolute top-0 -mt-[50px]"></div>
                  <div className="rounded-full bg-gradient-general text-white w-16 h-16 flex items-center justify-center text-2xl font-semibold">
                    {item.number}
                  </div>
                </div>
                <div key={item.number} className="w-1/3 text-right">
                <p>{item.rightText}</p>
              </div>
            </div>
            </div>
             ))}
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default index