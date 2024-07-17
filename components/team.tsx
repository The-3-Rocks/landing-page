import Image from 'next/image'
import TeamImage01 from '@/public/images/2.jpeg'
import TeamImage02 from '@/public/images/1.png'
import TeamImage03 from '@/public/images/4.png'
import TeamImage04 from '@/public/images/team-member-01.jpg'
import TeamImage05 from '@/public/images/team-member-05.jpg'
import TeamImage06 from '@/public/images/team-member-06.jpg'
import TeamImage07 from '@/public/images/team-member-07.jpg'
import TeamImage08 from '@/public/images/team-member-08.jpg'
import TeamImage09 from '@/public/images/team-member-09.jpg'
import TeamImage10 from '@/public/images/team-member-10.jpg'

export default function Team() {  
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto pb-12 md:pb-20">
    <h2 className="h2 font-red-hat-display mb-4 text-center">
        The<span className="text-teal-500">3</span>Rocks Team
    </h2>
    <br></br>
    <p className="text-xl text-gray-600 dark:text-gray-400 text-left">
        A family mining business, passed down through generations, combines traditional methods with modern techniques. 
        This enduring enterprise adapts to technological and market changes while preserving inherited practices and values.
    </p>
    <p className="text-xl text-gray-600 dark:text-gray-400 mt-4 text-left">
        <span className="text-teal-500 font-bold">Structure and Management:</span><br></br>
        The mine is family-owned, with each member contributing based on experience and skills. 
        Three heads of the last generation manage operations, making key decisions collectively.
    </p>
    <p className="text-xl text-gray-600 dark:text-gray-400 mt-4 text-left">
        <span className="text-teal-500 font-bold">Generational Transition:</span><br></br>
        Management passes from one generation to the next, maintaining traditional values while encouraging innovation.
    </p>
    <p className="text-xl text-gray-600 dark:text-gray-400 mt-4 text-left">
        <span className="text-teal-500 font-bold">Extraction Methods:</span><br></br>
        Honoring ancestors, the mine uses some traditional techniques and tools alongside advanced machinery like excavators 
        and modern drills to enhance efficiency and safety.
    </p>
    <p className="text-xl text-gray-600 dark:text-gray-400 mt-4 text-left">
        <span className="text-teal-500 font-bold">Diversification:</span><br></br>
        Beyond extraction, the family invests in sectors like mining tourism, offering guided tours to educate the public about 
        mining history and processes.
    </p>
    <p className="text-xl text-gray-600 dark:text-gray-400 mt-4 text-left">
        <span className="text-teal-500 font-bold">Marketing and Distribution:</span><br></br>
        Products are sold locally and internationally, supported by strong relationships with buyers and distributors. 
        The mine is renowned for quality, reliability, and excellence.
    </p>
    <p className="text-xl text-gray-600 dark:text-gray-400 mt-4 text-left">
        <span className="text-teal-500 font-bold">Challenges and Future:</span><br></br>
        Facing fluctuating mineral prices, regulations, and climate changes, the family plans long-term. 
        They aim to integrate emerging technologies, expand into new markets, and train future generations.
    </p>
</div>

          {/* Team members */}
          <div className="max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center -m-5 lg:-my-7" data-aos-id-team>

              {/* 1st member */}
              <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7" data-aos="fade-down" data-aos-anchor="[data-aos-id-team]">
                <div className="flex flex-col items-center">
                  <Image className="rounded-full mb-2" src={TeamImage01} width={80} height={80} alt="Team member 01" />
                  <h4 className="dark:text-gray-300 text-lg font-medium">Badr GADI</h4>
                  <h6> CEO of the<span className='text-teal-500'>3</span>rocks</h6>
                </div>
              </div>

              {/* 2nd member */}
              <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7" data-aos="fade-down" data-aos-delay="100" data-aos-anchor="[data-aos-id-team]">
                <div className="flex flex-col items-center">
                  <Image className="rounded-full mb-2" src={TeamImage02} width={80} height={80} alt="Team member 02" />
                  <h4 className="dark:text-gray-300 text-lg font-medium">Shym HAZIM</h4>
                  <h6> COO of the<span className='text-teal-500'>3</span>rocks</h6>
                </div>
              </div>

              {/* 3rd member */}
              <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7" data-aos="fade-down" data-aos-delay="200" data-aos-anchor="[data-aos-id-team]">
                <div className="flex flex-col items-center">
                  <Image className="rounded-full mb-2" src={TeamImage03} width={80} height={80} alt="Team member 03" />
                  <h4 className="dark:text-gray-300 text-lg font-medium text-center">Zack HAMEDOUN</h4>
                  <h6> CTO of the<span className='text-teal-500'>3</span>rocks</h6>
                </div>
              </div>

              {/* 4th member */}
              {/* <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-5 lg:py-7" data-aos="fade-down" data-aos-delay="300" data-aos-anchor="[data-aos-id-team]">
                <div className="flex flex-col items-center">
                  <Image className="rounded-full mb-2" src={TeamImage04} width={80} height={80} alt="Team member 04" />
                  <h4 className="dark:text-gray-300 text-lg font-medium">George Hurley</h4>
                  <a className="p-2" href="#0">
                    <svg width="16" height="13" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" fill="#1DA1F2" fillRule="nonzero" />
                    </svg>
                  </a>
                </div>
              </div> */}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}