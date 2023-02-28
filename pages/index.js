import Head from "next/head";
import Testimonies from "../components/Testimonies";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import CourseList from "../components/CourseList";
import Hero1 from "../components/Hero1";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Qraft Academy</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
        />
      </Head>

      <div>
        <Hero image='https://res.cloudinary.com/filipe256/image/upload/v1642172209/qraftstore/hero-bg_ytthxj.png' />

<Hero1 />
        {/* <Courses /> */}
        <CourseList />
        <Testimonies />
      </div>
    </>
  );
}
