import Image from 'next/image';
import GetStarted from './GetStarted';
import Rating from './Rating';
import Link from 'next/link';

// data to be displayed into each course card
const data = [
    {
        id: 1,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1655885737/qraftstore/product_design_nf5mvk.jpg",
        courseTitle: "Product Designers",
        text1: "Start",
        text2: "01.September.2022",
        text3: "1 Month",
        altText: "Software Developers",
        url: "/developers"
    },
    {
        id: 2,
        courseImg: "https://res.cloudinary.com/filipe256/image/upload/v1655885737/qraftstore/software_developmen_ooqmhl.jpg",
        courseTitle: "Software Developers",
        text1: "Start",
        text2: "05.September.2022",
        text3: "3 Months",
        altText: "Digital Marketers",
        url: "/marketing"
    },
   
   
    {
        id: 5,
        courseImg: "https://cdn.pixabay.com/photo/2018/09/18/11/19/artificial-intelligence-3685928_960_720.png",
        courseTitle: "Data Scientists",
        // text1: "Start",
        text2: "Learn scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data.",
        // text3: "3 Months",
        altText: "data scientists",
        url: "/data-science-course"
    }
 

]

export default function TalentList(props) {
    return (
        <div className="mb-6 py-8 px-0 pt-24" id="talentList">
            <h2 className="font-medium text-blue-900 text-xl">Available Talent</h2>
            <div className="mt-4 grid gap-y-6 md:gap-x-10 xl:grid-cols-3 sm:grid-cols-2 sm:gap-10">
                {data.map(course => (
                    <div key={course.id} className=" flex justify-center xl:justify-even">
                        <div className=" rounded-lg shadow-2xl max-w-sm xl:max-w-ls hover:-translate-y-2 transform transition-500" >
                            <Image
                                src={course.courseImg}
                                alt={course.altText}
                                width={500}
                                height={500}
                                quality={100}
                                className="rounded-t-lg"
                            />
                            <div className="p-6 pt-0">

                                <h3 className="text-lg font-semibold mb-4 mt-2">{course.courseTitle}</h3>

                                <div className="flex justify-between">
                                    <span className="text-lg font-sm">{course.text1}</span>
                                    <span className="text-lg font-sm">{course.text2}</span>
                                </div>

                                <p className="text-lg font-sm mb-2">{course.text3}</p>

                                <Rating />

                                <div className="flex justify-center my-4 mt-8">
                                    <GetStarted props={course.url} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
