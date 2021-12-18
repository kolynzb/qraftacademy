import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link"
import Image from "next/image"
import Head from "next/head";
import { useUser } from '@auth0/nextjs-auth0';
import CourseList from "../components/CourseList";
import MentorList from "../components/MentorList";

export default function Marketing() {

    //get loggedIn user
    const { user } = useUser();


    return (
        <>
            <Head>
                <title>Digital Marketing</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            {/* hero section */}
            <header className="h-screen">
                <div className=" absolute inset-0 overflow-hidden top-12 ">
                    <Image
                        alt="Background Image"
                        src="/img/hero-bg.png"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
                <div className="px-4 py-36 text-left text-white md:max-w-none md:text-center z-10 relative">
                    <h1 className="text-4xl font-extrabold leading-10 tracking-tight md:text-center sm:leading-none md:text-6xl lg:text-7xl">
                        <span className="inline-block md:block">Digital Marketing</span>
                    </h1>

                    <div className="mx-auto mt-5 md:mclst-12 md:max-w-xl md:text-center lg:text-lg">
                        Beat the stats and stereotypes, explore and stand out.
                        Build products and a porfolio you are proud to show off and earn from it.
                    </div>
                    {!user &&
                        <span className="inline-flex w-full md:w-auto mt-12">
                            <Link href="marketing/register"><a className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 rounded-full md:w-auto bg-[#4092CF] hover:bg-blue-400 transition duration-300">
                                Sign in to apply
                            </a></Link>
                        </span>
                    }
                    {user &&
                        <span className="inline-flex w-full md:w-auto mt-12">
                            <Link href="marketing/register"><a className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 rounded-full md:w-auto bg-[#4092CF] hover:bg-blue-400 transition duration-300">
                                Apply</a></Link>
                        </span>
                    }
                </div>
            </header>

            {/* content section */}
            <div className="flex flex-col space-y-4 p-8">
                <blockquote>
                    <h1 className="text-blue-900 font-black text-3xl">Digital Marketing</h1>
                    <p>Incididunt ex incididunt magna officia et. Ut ipsum anim sunt magna nulla.
                        Officia sint deserunt consectetur aliquip mollit tempor sit adipisicing magna dolore voluptate reprehenderit.
                        Veniam sunt cupidatat minim laboris aliqua commodo. In sint incididunt commodo magna aliquip exercitation deserunt.
                        Incididunt cupidatat eiusmod nulla voluptate aliquip ea quis consectetur nisi.</p>
                </blockquote>

                <blockquote>
                    <h2 className="font-medium text-blue-900 text-xl">Where To Start</h2>
                    <p>Incididunt ex incididunt magna officia et. Ut ipsum anim sunt magna nulla.
                        Officia sint deserunt consectetur aliquip mollit tempor sit adipisicing magna dolore voluptate reprehenderit.
                        Veniam sunt cupidatat minim laboris aliqua commodo. In sint incididunt commodo magna aliquip exercitation deserunt.
                        Incididunt cupidatat eiusmod nulla voluptate aliquip ea quis consectetur nisi.</p>
                </blockquote>

                <blockquote>
                    <h2 className="font-medium text-blue-900 text-xl">What It Takes</h2>
                    <p>Incididunt ex incididunt magna officia et. Ut ipsum anim sunt magna nulla.
                        Officia sint deserunt consectetur aliquip mollit tempor sit adipisicing magna dolore voluptate reprehenderit.
                        Veniam sunt cupidatat minim laboris aliqua commodo. In sint incididunt commodo magna aliquip exercitation deserunt.
                        Incididunt cupidatat eiusmod nulla voluptate aliquip ea quis consectetur nisi.</p>
                </blockquote>

                <blockquote>
                    <h2 className="font-medium text-blue-900 text-xl">What You Will Do</h2>
                    <p>Incididunt ex incididunt magna officia et. Ut ipsum anim sunt magna nulla.
                        Officia sint deserunt consectetur aliquip mollit tempor sit adipisicing magna dolore voluptate reprehenderit.
                        Veniam sunt cupidatat minim laboris aliqua commodo. In sint incididunt commodo magna aliquip exercitation deserunt.
                        Incididunt cupidatat eiusmod nulla voluptate aliquip ea quis consectetur nisi.</p>
                </blockquote>

                <blockquote>
                    <h2 className="font-medium text-blue-900 text-xl">Career Path And Progression</h2>
                    <p>Incididunt ex incididunt magna officia et. Ut ipsum anim sunt magna nulla.
                        Officia sint deserunt consectetur aliquip mollit tempor sit adipisicing magna dolore voluptate reprehenderit.
                        Veniam sunt cupidatat minim laboris aliqua commodo. In sint incididunt commodo magna aliquip exercitation deserunt.
                        Incididunt cupidatat eiusmod nulla voluptate aliquip ea quis consectetur nisi.</p>
                </blockquote>

                <CourseList />
                
                <MentorList />

                {!user &&

                    <span className="inline-flex w-full md:w-auto mt-12">
                        <Link href="marketing/register"><a className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 rounded-full md:w-auto bg-[#4092CF] hover:bg-blue-400 transition duration-300">
                            Sign in to apply</a></Link>
                    </span>
                }

                {user &&
                    <span className="inline-flex w-full md:w-auto mt-12">
                        <Link href="marketing/register"><a className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 rounded-full md:w-auto bg-[#4092CF] hover:bg-blue-400 transition duration-300">
                            Apply</a></Link>
                    </span>
                }
            </div>
        </>
    );
}

