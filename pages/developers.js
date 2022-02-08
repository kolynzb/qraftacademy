import Link from "next/link"
import Image from "next/image"
import Head from "next/head";
import { useUser } from '@auth0/nextjs-auth0';
import ReactPlayer from 'react-player/lazy';


export default function Developers() {

    //get loggedIn user
    const { user } = useUser();

    return (
        <>
            <Head>
                <title>Software Developers</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            {/* hero section */}
            <header className="h-screen">
                <div className=" absolute inset-0 overflow-hidden top-12 ">
                    <Image
                        alt="Background Image"
                        src="https://res.cloudinary.com/filipe256/image/upload/v1642172209/qraftstore/hero-bg_ytthxj.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
                <div className="px-4 py-36 text-left text-white md:max-w-none md:text-center z-10 relative">
                    <h1 className="text-4xl font-extrabold leading-10 tracking-tight md:text-center sm:leading-none md:text-6xl lg:text-7xl">
                        <span className="inline-block md:block">Software Development</span>
                    </h1>

                    <div className="mx-auto mt-5 md:mt-12 md:max-w-xl md:text-center lg:text-lg">
                        Great talent and products are made, not born. Collaborate with
                        industry experts and earn badges that matter, while building
                        products that actually fix the world&#39;s biggest bugs.
                    </div>
                    {!user &&
                        <span className="inline-flex w-full md:w-auto mt-12">
                            <Link href="developer/register"><a className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 rounded-full md:w-auto bg-[#4092CF] hover:bg-blue-400 transition duration-300">
                                Sign in to apply
                            </a></Link>
                        </span>
                    }
                    {user &&
                        <span className="inline-flex w-full md:w-auto mt-12">
                            <Link href="developer/register"><a className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 rounded-full md:w-auto bg-[#4092CF] hover:bg-blue-400 transition duration-300">
                                Apply</a></Link>
                        </span>
                    }

                </div>
            </header>

            {/* card section */}
            <div className="grid sm:max-w-full sm:grid-cols-2 gap-y-8 place-content-center p-8">
                <div className="flex justify-center">
                    <div className="block p-6 rounded-2xl shadow-lg bg-white w-72 bg-gray-300">
                        <h5 className="text-gray-900 leading-tight font-bold mb-2 text-sm">Product Design Course</h5>
                        <div className="flex justify-center text-xs">
                            <ul className="bg-white rounded-lg w-96 text-gray-900">
                                <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">Course Overview</li>
                                <li className="px-6 py-2 border-b border-gray-200 w-full">Curriculum Overview</li>
                                <li className="px-6 py-2 border-b border-gray-200 w-full">Course Goals</li>
                                <li className="px-6 py-2 border-b border-gray-200 w-full">Hands on Projects</li>
                                <li className="px-6 py-2 w-full rounded-b-lg">FAQ</li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-center space-y-2 pt-8">
                            <p className="font-black tracking-wide text-sm">Starts On 07.March.2022</p>

                            {!user &&
                                <span className="">
                                    <Link href="developer/register"><a className="inline-block px-6 py-2.5 rounded-full text-white font-medium text-xs bg-[#4092CF] hover:bg-blue-400 transition duration-300">Sign in to apply</a></Link>
                                </span>
                            }
                            {user &&
                                <span className="">
                                    <Link href="developer/register"><a className="inline-block px-6 py-2.5 rounded-full text-white font-medium text-xs bg-[#4092CF] hover:bg-blue-400 transition duration-300">Apply Now</a></Link>
                                </span>
                            }
                        </div>
                    </div>
                </div>
                {/*start of about video area*/}
                <div className="overflow-hidden h-48 sm:h-auto sm:w-10/12">
                    <ReactPlayer
                        controls
                        light="https://res.cloudinary.com/filipe256/image/upload/v1643388795/qraftstore/software_development_gz8lpn.jpg"
                        playing
                        url="https://res.cloudinary.com/filipe256/video/upload/v1643972099/videos/product_design_ltfkbs.mp4"
                        width='100%'
                        height='100%'/>
                        
                </div>

            </div>
            <div className="flex flex-col space-y-4 px-4 container mx-auto max-w-3xl">
                <blockquote className="flex flex-col">
                    <h1 className="text-blue-900 font-bold">Course Overview</h1>
                    <p>Our curriculum includes a career development to help you put to use the skills leant, a video and audio lectures, assignments, and live sessions, hands on projects and mentors to help you grow</p>
                </blockquote>

                <blockquote>
                    <h1 className="text-blue-900 font-bold">Goal</h1>
                    <ul className="list-disc px-4 sm:px-0">
                        <li>Become an entry-level software developer</li>
                        <li>Become job ready</li>
                        <li>Identify the type of developer or developer role you want top pursue </li>
                    </ul>
                </blockquote>

                <blockquote className="flex flex-col space-y-2">
                    <div>
                        <h1 className="text-blue-900 font-bold">What You&#39;ll Learn</h1>
                        <p className="font-bold inline">Fundamentals of Product Design: </p><span>Explore Tools, and frameworks, principle in UX design and identify alternatives roles of designers</span>
                    </div>
                    <div>
                        <p className="font-bold inline">Low-Fidelity Design: </p><span>To create simple and low-tech concepts, all you need to get started is a pen and paper. The goal is to turn your ideas into testable artifacts that you can then use to collect and analyze feedback in the early stages</span>
                    </div>
                    <div>
                        <p className="font-bold inline">High-Fidelity Design: </p><span>Create computer-based, and allow realistic (mouse-keyboard) user interactions. High-fidelity prototypes take you as close as possible to a true representation of the user interface</span>
                    </div>
                    <div>
                        <p className="font-bold inline">Personal Branding: </p><span>Create an online portfolio to showcase UX design work and also learn best practices for building a professional network</span>
                    </div>
                </blockquote>
{/* ----------------------------------------------------------- */}
                <blockquote>
                    <div>
                        <div className="pb-4">
                            <h1 className="text-blue-900 font-bold">Projects</h1>
                            <p>Each Participant will select the Project to work on throughout the course</p>
                        </div>
                        <div className="flex flex-col items-center sm:flex-row space-y-2 sm:space-x-8 py-8">
                            <div>
                                <h1 className="text-blue-900 font-bold text-center mb-2">Benefits</h1>
                                <div className="block p-6 rounded-2xl shadow-lg bg-white w-48 bg-gray-300">
                                    <ul className="space-y-8 text-baset text-center font-medium">
                                        <li>One one career mentorship</li>
                                        <li>Free Apprenticeship</li>
                                        <li>Community of Designers</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-blue-900 font-bold text-center mb-2">Pricing</h1>
                                <div className="block p-6 rounded-2xl shadow-lg bg-white w-48 bg-gray-300">
                                    <ul className="space-y-8 text-baset text-center font-medium">
                                        <li className="font-bold">Beginner Level</li>
                                        <li className="font-bold">$200</li>
                                        <li>Best Value for entry</li>
                                        <li>
                                            {!user &&
                                                <span className="">
                                                    <Link href="developer/register"><a className="inline-block px-6 py-2.5 rounded-full text-white font-medium text-xs bg-[#4092CF] hover:bg-blue-400 transition duration-300">Sign in to apply</a></Link>
                                                </span>
                                            }
                                            {user &&
                                                <span className="">
                                                    <Link href="developer/register"><a className="inline-block px-6 py-2.5 rounded-full text-white font-medium text-xs bg-[#4092CF] hover:bg-blue-400 transition duration-300">Apply Now</a></Link>
                                                </span>
                                            }
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-blue-900 font-bold text-center mb-2">Pricing</h1>
                                <div className="block p-6 rounded-2xl shadow-lg bg-white w-48 bg-gray-300">
                                    <ul className="space-y-8 text-baset text-center font-medium">
                                        <li className="font-bold">Advanced Level</li>
                                        <li className="font-bold">$250</li>
                                        <li>Advance your career</li>
                                        <li>
                                            {!user &&
                                                <span className="">
                                                    <Link href="developer/register"><a className="inline-block px-6 py-2.5 rounded-full text-white font-medium text-xs bg-[#4092CF] hover:bg-blue-400 transition duration-300">Sign in to apply</a></Link>
                                                </span>
                                            }
                                            {user &&
                                                <span className="">
                                                    <Link href="developer/register"><a className="inline-block px-6 py-2.5 rounded-full text-white font-medium text-xs bg-[#4092CF] hover:bg-blue-400 transition duration-300">Apply Now</a></Link>
                                                </span>
                                            }
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </blockquote> 
            </div> 
        </>
    );
}

