import Image from 'next/image';


export default function VisionMission() {
    return (
        // start of vision and mission area
        <div className="flex justify-items-center justify-center items-center font-semiMedium text-lg font-sans text-left tracking-normal leading-relaxed text-gray-600" >
            <div className="grid min-w-xl min-h-full md:grid-cols-2">
                <div className="sm:m-10 mb-10">
                   <div className="px-4 sm:px-6 pb-6 bg-gray-50 drop-shadow-xl">
                        <div className="flex justify-between  mb-5">
                            <div>
                                <h3 className="text-2xl tracking-wider font-semiMedium leading-loose">
                                    VISION
                                </h3>
                            </div>
                            <div className="leading-3">
                                <Image 
                                    src="/img/logo.png" 
                                    alt="qraft-academy logo"
                                    width={60}
                                    height={60} 
                                    quality={100}
                                    className="rounded-full"
                                />
                            </div>
                            
                        </div>
                        <div>
                            <p className="">
                                <span className="text-7xl">&quot;</span>
                                To become a premier youth-led social enterprise accelerating youths&#39; skills development and mind-set transformation for an empowered next generation                                
                            </p>
                        </div>
                   </div>
                </div>
                <div className="sm:m-10">
                   <div className="px-4 sm:px-6 pb-6 bg-gray-50 drop-shadow-xl">
                        <div className="flex justify-between  mb-5">
                            <div>
                                <h3 className="text-2xl tracking-wider font-semiMedium leading-loose">
                                    MISSION
                                </h3>
                            </div>
                            <div className="leading-3">
                                <Image 
                                    src="/img/logo.png" 
                                    // src="/img/logo.png" 
                                    alt="qraft-academy logo"
                                    width={60}
                                    height={60} 
                                    quality={100}
                                    className="rounded-full"
                                />
                            </div>
                            
                        </div>
                        <div>
                            <p className="">
                                <span className="text-7xl">&quot;</span>
                                To empower the youth to discover and achieve their full potential and foster a desired societal change through provision of adaptable solutions with hands-on 21st Century business and entrepreneurship skills.                                
                            </p>
                        </div>
                   </div>
                </div>
            </div>
        </div>
        // end of vision and mission area
    )
}
