import React from "react";
import MainLayout from "@/src/layout/MainLayout";
import { Button } from "@/src/components/button/Button";

const index = () => {
  const handleDownloadCV = () => {
    window.open(
      "https://us.docworkspace.com/d/sICqKhIJYsbmyowY?sa=00&st=0t",
      "_blank"
    );
  };

  return (
    <MainLayout>
      <section className="w-full sm:px-56 px-4">
        <div className="w-full sm:h-[90vh] h-[40vh] about-hero"></div>
      </section>
      <section className="w-full sm:px-56 px-4 pt-5 sm:pb-10 pb-7 space-y-5">
        <h2 className="text-base tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          a little about me
        </h2>
        <p className="text-sm text-[#626262] font-Poppins min-w-full leading-7 sm:pr-24">
          My name is Belema George and I am deeply passionate about using design
          to enhance the lives of others. I am a continuous learner, always
          seeking new opportunities to grow and exchange ideas with like-minded
          individuals.
        </p>
        <p className="text-sm text-[#626262] font-Poppins min-w-full leading-7">
          Being a self-taught designer, I have acquired a wide range of skills
          and knowledge in the realm of UX/UI and product design through
          internships, contributing to open-source projects, workshops, reading
          blogs and learning on the job.
        </p>
        <p className="text-sm text-[#626262] font-Poppins min-w-full leading-7">
          I am an advocate of the big picture and I find joy in working on
          projects from concept development to final implementation."
        </p>
        <div onClick={handleDownloadCV}>
          <Button title="download cv" />
        </div>
      </section>
      <section className="w-full sm:px-56 px-4 sm:py-10 py-8 space-y-5 bg-[#F9F9F9]">
        <h2 className="text-base tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          my transition story
        </h2>
        <p className="text-sm text-[#626262] font-Poppins min-w-full leading-7">
          Transition can mean anything to anyone but to me, it meant deep
          learning and channeling my passion for art in the right places.
        </p>
        <p className="text-sm text-[#626262] font-Poppins min-w-full leading-7">
          After my graduation from the department of microbiology in 2020, I
          transitioned to Product design in 2021 by attending a virtual training
          booth camp organized by Zuri for 3 months.
        </p>
        <p className="text-sm text-[#626262] font-Poppins min-w-full leading-7">
          Seeing the necessity to connect and collaborate with other tech stacks
          and fellow designers, I also applied for a physical booth camp at the
          Rivers state ICT, Nigeria where I learnt for 3 months.
        </p>
        <p className="text-sm text-[#626262] font-Poppins min-w-full leading-7">
          My outstanding performance with my project presentation (Superbia
          branding and Website) gave me an internship position at Chigisoft, one
          of the most creative tech companies in Rivers state, where I worked on
          live projects like LandPay, Ayagigs, WIP Investment app.
        </p>
        <p className="text-sm text-[#626262] font-Poppins min-w-full leading-7">
          After my internship, I was offered a job at Tronix Labs as the Lead
          Product Designer of a small team of Designers, developers and hardware
          engineers. At Tronix, I designed the Tronix website, Airsyn and Proxie
          websites and the AMI Hub website which are all live and running.
        </p>
        <p className="text-sm text-[#626262] font-Poppins min-w-full leading-7">
          I also started contributing to open source products such as Open
          designers and CHAOSS where I designed the current CHAOSS website.
        </p>
        <p className="text-sm text-[#626262] font-Poppins min-w-full leading-7">
          In my spare periods, I love making illustrations to flex my creativity
          and colorful mind.
        </p>
        <p className="text-sm text-[#626262] font-Poppins min-w-full leading-7">
          When I'm not Designing, I read books and learn new language phrases.
        </p>
      </section>
      <section className="w-full sm:px-56 px-4 sm:py-10 py-7 space-y-9">
        <h2 className="sm:text-base text-sm tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          some fun illustrations i designed
        </h2>
        <div className="w-full grid grid-rows-2 grid-cols-2 gap-2">
          <div className="w-full">
            <img src="/images/illustration-one.png" alt="" />
          </div>
          <div className="w-full">
            <img src="/images/illustration-two.png" alt="" />
          </div>
          <div className="w-full">
            <img src="/images/illustration-three.png" alt="" />
          </div>
          <div className="w-full">
            <img src="/images/illustration-four.png" alt="" />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default index;
