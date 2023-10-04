import React from 'react'

type Item = {
  leftText: string;
  number: number;
  rightText: string;
}

const index = () => {
  const items: Item[] = [
    {
      leftText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      number: 1,
      rightText: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      leftText: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      number: 2,
      rightText: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      leftText: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      number: 3,
      rightText: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
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
          <div className="bg-gray-200 p-4">
            {items.map((item, index) => (
              <div key={item.number} className="mb-4 p-4">
                <div className="flex items-center ">
                  <div className="w-1/3 text-left">
                    <p>{item.leftText}</p>
                  </div>
                  <div key={index} className="relative">  
                  <div className="h-[50px] w-3 bg-blue-500 absolute top-0 -mt-[50px]"></div>
                  <div className="rounded-full bg-blue-500 text-white w-16 h-16 flex items-center justify-center text-2xl font-semibold">
                    {item.number}
                  </div>
                </div>
                <div className="w-1/3 text-right">
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