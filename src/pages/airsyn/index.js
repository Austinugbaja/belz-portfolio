import React from "react";
import MainLayout from "@/src/layout/MainLayout";
import { Button } from "@/src/components/button/Button";

const index = () => {
  const handleClick = () => {
    window.open(
      "https://www.figma.com/proto/lcyGR5tCLeFCnj6E6PfYbb/Tronix-Redesign?type=design&scaling=contain&page-id=0%3A1&starting-point-node-id=14%3A458&node-id=97-1459",
      "_blank"
    );
  };

  return (
    <MainLayout>
      <section className="w-full sm:h-[90vh] h-[40vh] airsyn-hero"></section>
      <section className="w-full sm:px-56 px-4 py-10 space-y-8">
        <h2 className="text-4xl text-[#424141] uppercase font-Poppins font-[600]">
          airsyn design
        </h2>
        <h2 className="text-lg tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          introduction
        </h2>
        <p className="text-sm text-[#626262] font-Poppins leading-7 sm:pr-24">
          The AirSyn Monitor is a sensor device that uses 7 sensors to detect
          and measure various gas pollutants, such as Carbon monoxide and excess
          cooking gas, in your environment.
        </p>
        <p className="text-sm text-[#626262] font-Poppins leading-7 sm:pr-24">
          The AirSyn Monitor comes with a software that detects the presence of
          various gaseous pollutants and the level of pollution in the
          environment. It also alerts individuals of any potential hazards in
          the surrounding area.
        </p>
        <h2 className="text-lg tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          role
        </h2>
        <div>
          <p className="text-base uppercase text-[#363535] tracking-wide font-Poppins font-[600]">
            product designer
          </p>
          <p className="text-sm text-[#626262] font-Poppins leading-7 sm:pr-24">
            User research, Competitor research, user persona, information
            architecture, user flows, wire frames, prototyping, visual design,
            testing
          </p>
        </div>
        <div>
          <p className="text-base font-[600] uppercase text-[#363535] tracking-wide font-Poppins">
            duration
          </p>
          <p className="text-sm sm:pr-24 text-[#626262] font-Poppins leading-7">
            June 2022 - ongoing
          </p>
        </div>
        <div>
          <p className="text-base text-[#363535] tracking-wide font-Poppins font-[600]">
            Tools used
          </p>
          <p className="text-sm sm:pr-24 text-[#626262] font-Poppins leading-7">
            Figma, google forms, google docs, whimsical
          </p>
        </div>
        <div onClick={handleClick}>
          <Button title="see prototype" />
        </div>
      </section>
      <section className="w-full bg-[#FCD0D0] py-12 sm:px-56 px-4 space-y-3">
        <h2 className="text-2xl text-[#313131] text-center uppercase font-[600] tracking-wide font-Poppins">
          problem statement
        </h2>
        <p className="text-sm text-[#363535] font-light w-full text-center leading-7 md:max-w-2xl mx-auto">
          Users of the air monitoring software reported difficulty in
          understanding the data provided by the software and the hardware
          device. They also reported difficulty in interpreting the data and
          taking action based on the information provided. Additionally, users
          had difficulty in setting up the hardware device properly and
          connecting it to the software
        </p>
      </section>
      <section className="w-full sm:px-56 px-4 py-10 space-y-6">
        <h2 className="text-lg tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          background
        </h2>
        <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24">
          Air pollution is a major public health concern, with poor air quality
          linked to a range of health issues such as respiratory problems, heart
          disease, and cancer. To address this issue, our team developed an air
          monitoring software that tracks and reports on the quality of the air
          in a specific location. The software is used in conjunction with a
          hardware device that detects and measures various pollutants in the
          air.
        </p>
        <h2 className="text-lg tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          understanding the problem
        </h2>
        <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24">
          To understand the problem, we conducted user research by interviewing
          users and observing them using the software and hardware device. We
          found out the following;
        </p>
        <ul className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24 sm:pl-10 pl-4">
          <li className="list-disc">
            Users had a difficult time understanding the data provided by the
            device, as the information was presented in a confusing and
            technical manner.
          </li>
          <li className="list-disc">
            Additionally, users had trouble interpreting the data and taking
            action based on the information provided.
          </li>
        </ul>
      </section>
      <section className="w-full sm:px-56 px-4 py-12 bg-[#FCD0D0]">
        <h2 className="w-full text-2xl text-[#313131] font-[600] font-Poppins uppercase tracking-wide">
          project vision and solutions
        </h2>
        <div className="text-sm sm:pr-24 text-[#626262] font-light w-full leading-7 font-Poppins mt-5">
          To address these issues from our research, we decided to redesigned
          the software interface to;
          <ul className="text-sm sm:pr-24 sm:pl-10 pl-4 text-[#626262] font-light w-full leading-7 font-Poppins mt-4">
            <li className="list-disc">
              Make it more user-friendly and easier to understand.
            </li>
            <li className="list-disc">
              Used clear and simple language to present the data.
            </li>
            <li className="list-disc">
              Added visual aids to help users interpret the information.
            </li>
            <li className="list-disc">
              Create a step-by-step guide for setting up the hardware device and
              connecting it to the software, to make the process easier for
              users.
            </li>
          </ul>
          <p className="text-sm sm:pr-24 text-[#626262] font-light w-full leading-7 font-Poppins mt-4">
            To begin, we conducted market research on competitors to explore
            what was currently available in the market and to gather inspiration
            for features we liked in existing platforms. I then led a 15-minute
            sketching session to allow team members to visually communicate
            their ideas for the solution.
          </p>
        </div>
      </section>
      <section className="w-full sm:px-56 px-4 py-10">
        <h2 className="text-lg mt-7 mb-5 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          defining the mvp
        </h2>
        <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24">
          From the sketching sessions, it became clear that there were shared
          themes in our product vision. The following key user stories were
          identified:
        </p>
        <ul className="text-sm text-[#626262] font-light w-full leading-7 space-y-5 font-Poppins sm:pr-24 sm:pl-10 pl-4 mt-4">
          <li className="list-disc">
            <b>Find devices:</b>&nbsp;Users can locate the various AirSyn
            devices that are registered to them.
          </li>
          <li className="list-disc">
            <b>Check for pollutants:</b>&nbsp;Users can view the pollutants
            present and the level of pollution in the environment on their
            dashboard.
          </li>
          <li className="list-disc">
            <b>Creating a design system:</b>&nbsp;Having a design system in
            place helps to ensure that the overall visual identity and user
            experience remains consistent throughout the platform.
          </li>
          <li className="list-disc">
            <b>Generate reports:</b>&nbsp;Users can generate reports for various
            pollutants and track their levels over a specific period of time.
          </li>
        </ul>
        <div className="w-full mt-11 flex justify-center">
          <img src="/images/airsyn-mvp.png" alt="" />
        </div>
        <h2 className="text-lg mt-12 mb-5 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          designs
        </h2>
        <p className="text-sm sm:pr-24 text-[#363535] font-light w-full leading-7 font-Poppins mt-4">
          Based on our sketches, I began designing the main screens, and then
          moved on to the styling. We decided to use a dark theme for the
          design.
        </p>
        <h2 className="text-lg mt-11 mb-3 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          registration
        </h2>
        <p className="text-sm sm:pr-24 text-[#363535] font-light w-full leading-7 font-Poppins mt-4">
          For the registration screens, I created a straightforward sign-up and
          login form.
        </p>
        <div className="w-full mt-7 flex justify-center">
          <img src="/images/airsyn-register.png" alt="" />
        </div>
        <h2 className="text-lg mt-11 mb-3 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          onboarding
        </h2>
        <p className="text-sm sm:pr-24 text-[#363535] font-light w-full leading-7 font-Poppins mt-4">
          The process of onboarding users to set up their devices was made more
          user-friendly by breaking it down into smaller, manageable modules to
          avoid overwhelming the user.
        </p>
        <div className="w-full mt-7 flex justify-center">
          <img src="/images/onboarding.png" alt="" />
        </div>
        <h2 className="text-lg mt-11 mb-3 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          dashboard
        </h2>
        <p className="text-sm sm:pr-24 text-[#363535] font-light w-full leading-7 font-Poppins mt-4">
          The dashboard displays information about all devices, including which
          ones are active, safe, and unsafe, as well as the overall status of
          the environment and any notifications.
        </p>
        <div className="w-full mt-7 flex justify-center">
          <img src="/images/dashboard.png" alt="" />
        </div>
        <h2 className="text-lg mt-11 mb-3 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          devices
        </h2>
        <p className="text-sm sm:pr-24 text-[#363535] font-light w-full leading-7 font-Poppins mt-4">
          The devices display information about the pollutants measured by a
          specific device, including its location and status, as well as any
          related notifications.
        </p>
        <div className="w-full mt-7 flex justify-center">
          <img src="/images/devices.png" alt="" />
        </div>
        <h2 className="text-lg mt-11 mb-3 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          report
        </h2>
        <p className="text-sm sm:pr-24 text-[#363535] font-light w-full leading-7 font-Poppins mt-4">
          The report feature enables users to generate reports on one or
          multiple pollutants at various time intervals and export them as PDFs.
        </p>
        <div className="w-full mt-7 flex justify-center">
          <img src="/images/report.png" alt="" />
        </div>
        <h2 className="text-lg mt-11 mb-3 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          profile
        </h2>
        <p className="text-sm sm:pr-24 text-[#363535] font-light w-full leading-7 font-Poppins mt-4">
          The profile section holds information about the users and their
          subscription details.
        </p>
        <div className="w-full mt-7 flex justify-center">
          <img src="/images/profile.png" alt="" />
        </div>
      </section>
      <section className="w-full sm:px-56 px-4 py-12 space-y-7 bg-[#FCD0D0]">
        <h2 className="w-full text-2xl font-Poppins font-[600] tracking-wider uppercase text-[#313131]">
          evaluation
        </h2>
        <p className="text-sm sm:pr-24 text-[#363535] font-light w-full leading-7 font-Poppins">
          We evaluated the effectiveness of the redesign by conducting user
          testing with a group of users. We found that users were able to;
        </p>
        <ul className="text-sm sm:pr-24 sm:pl-10 pl-4 text-[#363535] font-light w-full leading-7 font-Poppins">
          <li className="list-disc">
            Understand the data provided by the device more easily.
          </li>
          <li className="list-disc">
            Had an easier time interpreting the information and taking action
            based on it.
          </li>
          <li className="list-disc">
            Users found the step-by-step guide for setting up the hardware
            device helpful.
          </li>
        </ul>
        <h2 className="w-full text-2xl font-Poppins font-[600] tracking-wider uppercase text-[#313131]">
          conclusion
        </h2>
        <p className="text-sm sm:pr-24 text-[#363535] font-light w-full leading-7 font-Poppins">
          Our redesign of the air monitoring software and the addition of a
          step-by-step guide for setting up the hardware device improved the
          user experience for users. By making the data provided by the device
          more understandable and actionable, we were able to help users take
          steps to improve the air quality in their location.
        </p>
      </section>
    </MainLayout>
  );
};

export default index;
