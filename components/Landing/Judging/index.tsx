import React from 'react'
import Button from '../../global/Button'


      type para = {
        span: string;
        para: string;
      };

   
const index = () => {
    const items: para[] = [
      {
        span: "Innovation and Creativity:",
        para: "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
      },
      {
        span: "Functionality:",
        para: "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
      },
      {
        span: "Impact and Relevance:",
        para: "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
      },
        {
        span: "Technical Complexity:",
        para: "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
      },
      {
        span: "Adherence to Hackathon Rules:",
        para: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
      },
    ];
  return (
    <>
    <div className="border-b border-gray-700">
        <section id="" className="container">
            <div className="grid xl:grid-cols-2 gap-5 xl:gap- items-start">
                <div className="mt-[193px]">
                  <div className="flex items-center">
                    <img src="/images/8046554-1@2x.png" width={710} height={587} alt="big-idea" />
                  </div>
                </div>

                <div className="mt-[63px] ">
                  <div className="flex flex-col">
                    <div className="">
                      <h2 className='text-[32px] font-bold'>Judging Criteria</h2>
                      <h2><span className='text-[32px] font-bold text text-fuchsia-600'>Key attributes</span></h2>
                    </div>
                    <div className="mt-[16px] mb-[100px]">
                    {items.map((item, index) => {
						             return (
                      <p className='font-montserrat text-[14px] xl:w-[535px] xl:h-[165px]'><span>{item.span}</span> {item.para}</p>
                     )}
                      )}
                    </div>
                    <div className="">
                      <Button label='Read More' />
                    </div>
                  </div>
                </div>
            </div>
        </section>
    </div>
    </>
  )}


export default index