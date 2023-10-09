import React from 'react'

type Item = {
  leftTexth1: string;
  leftTextp: string;
  number: number;
  rightText: string;
}

const index = () => {
  const items: Item[] = [
    {
      leftTexth1: "Hackathon Announcement",
      leftTextp: "The getlinked tech hackathon 1.0 is formally announced",
      number: 1,
      rightText: "November 18, 2023",
    },
    {
      leftTexth1: "Hackathon Announcement",
      leftTextp: "The getlinked tech hackathon 1.0 is formally announced",
      number: 2,
      rightText: "November 18, 2023",
    },
    {
      leftTexth1: "Hackathon Announcement",
      leftTextp: "The getlinked tech hackathon 1.0 is formally announced",
      number: 3,
      rightText: "November 18, 2023",
    },
    {
      leftTexth1: "Hackathon Announcement",
      leftTextp: "The getlinked tech hackathon 1.0 is formally announced",
      number: 4,
      rightText: "November 18, 2023",
    },
    {
      leftTexth1: "Hackathon Announcement",
      leftTextp: "The getlinked tech hackathon 1.0 is formally announced",
      number: 5,
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
          </div>

          <div className="pt-36">
            {items.map((item, index) => {
              return(
                <div className='grid grid-cols-3'>

                    <div className="flex flex-col text-right">
                      <h1 className="">{item.leftTexth1}</h1>
                      <p className="text-[14px]">{item.leftTextp} <br /> to the general public and teams begin to get ready to register</p>
                    </div>
                    
                    <div key={index} className="flex justify-center relative">  
                      <div className="h-[96px] w-[4px] bg-fuchsia-500 absolute top-0 -mt-[106px]"></div>
                      <div className="rounded-full bg-gradient-general text-white w-10 h-10 flex items-center justify-center text-2xl font-semibold mb-[125px]">
                        {item.number}
                      </div>
                    </div>

                    <div className="flex">
                      <h1 className="">{item.rightText}</h1>
                    </div>
                </div>
               )})}
          </div>
      </section>
    </>
  )
}

export default index