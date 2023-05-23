import React from "react";
import MainLayout from "@/src/layout/MainLayout";
import { tronixImageUtils } from "@/src/utils/dummyData";

const index = () => {
  return (
    <MainLayout>
      <section className="w-full sm:h-[90vh] h-[40vh] tronix-hero"></section>
      <section className="w-full sm:px-56 px-4 py-10 space-y-8">
        <h2 className="text-4xl text-[#424141] uppercase font-Poppins font-[600]">
          tronix website redesign
        </h2>
        <h2 className="text-lg tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          introduction
        </h2>
        <p className="text-sm text-[#626262] font-Poppins leading-7 sm:pr-24">
          Tronix is an African laboratory that focuses on developing
          hardware-software products with the aim of making them usable,
          sustainable, accessible, and affordable. The company's goal is to
          provide people with more control and understanding over the things
          that affect their lives and businesses through the use of technology
          such as web, mobile, embedded systems, AI, and data, as well as smart
          design to simplify daily life. Tronix believes that technology has the
          power to improve lives and increase freedom.
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
            November 2022 - ongoing
          </p>
        </div>
        <div>
          <p className="text-base text-[#363535] tracking-wide font-Poppins font-[600]">
            Tools used
          </p>
          <p className="text-sm sm:pr-24 text-[#626262] font-Poppins leading-7">
            Figma, google forms, google docs, Miro
          </p>
        </div>
      </section>
      <section className="w-full bg-[#FFDFD1] py-12 sm:px-56 px-4 space-y-5">
        <h2 className="text-2xl text-[#313131] text-center uppercase font-[600] tracking-wide font-Poppins">
          problem statement
        </h2>
        <p className="text-sm text-[#363535] font-light w-full text-center leading-7 md:max-w-2xl mx-auto">
          Tronix's goal is to help people, brands, organizations, and industries
          achieve better performance, lower costs, and higher returns through
          the use of technology. However, their previous website was not an
          effective representation of this goal and did not provide an
          aesthetically pleasing or user-friendly experience.
        </p>
      </section>
      <section className="w-full sm:px-56 px-4 py-10 space-y-6">
        <h2 className="text-lg tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          understanding the problem
        </h2>
        <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24">
          During the course of this project, I attempted to grasp the objectives
          that the company hoped to accomplish with the website redesign. To
          this end, I conducted interviews with the company's stakeholders and a
          usability test with current users of the website.
        </p>
        <h2 className="text-lg tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          interview questions
        </h2>
        <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24">
          I conducted interviews with stakeholders to gather information about
          their needs, goals, and pain points. Some of the questions I asked
          during the interviews included:
        </p>
        <ul className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24 space-y-4 sm:pl-10 pl-4">
          <li className="list-disc">
            What is the primary purpose of the website?
          </li>
          <li className="list-disc">
            Who are the target users of the website?
          </li>
          <li className="list-disc">
            What tasks do you expect users to complete on the website?
          </li>
          <li className="list-disc">
            What are the most important elements or features that the website
            should have?
          </li>
          <li className="list-disc">
            How do you envision users navigating the website?
          </li>
          <li className="list-disc">
            Have there been any pain points or frustrations with the current
            website design?
          </li>
          <li className="list-disc">
            How does the website fit into your overall business or
            organizational goals?
          </li>
          <li className="list-disc">
            Are there any existing branding or design guidelines that should be
            taken into consideration for the redesign?
          </li>
          <li className="list-disc">
            Are there any specific technologies or platforms that the website
            should be compatible with?
          </li>
          <li className="list-disc">
            Do you have any examples of other websites that you like or dislike,
            and why?
          </li>
        </ul>
        <h2 className="text-lg tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          usability testing
        </h2>
        <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24">
          During the usability test, I watched users interacting with the
          website and identified any problems or difficulties they experienced.
        </p>
      </section>
      <section className="w-full sm:px-56 px-4 py-12 bg-[#FFDFD1]">
        <h2 className="w-full text-2xl text-[#313131] font-[600] font-Poppins uppercase tracking-wide">
          analyzing the problem
        </h2>
        <div className="text-sm sm:pr-24 text-[#626262] font-light w-full leading-7 font-Poppins mt-5">
          After conducting interviews with several stakeholders and conducting
          usability testing, I discovered the following:
          <ul className="text-sm sm:pr-24 sm:pl-10 pl-4 text-[#626262] font-light w-full leading-7 font-Poppins mt-4">
            <li className="list-disc">
              The website is outdated and does not reflect the current branding
              of the company.
            </li>
            <li className="list-disc">
              The website is difficult to navigate, resulting in a poor user
              experience.
            </li>
            <li className="list-disc">
              The website is not optimized for mobile devices, which can lead to
              a poor user experience for a significant portion of visitors.
            </li>
            <li className="list-disc">
              The website is not generating enough leads or conversions.
            </li>
            <li className="list-disc">
              The company wants to improve search engine rankings and needs to
              update the website to be more SEO-friendly.
            </li>
            <li className="list-disc">
              The company wants to add new features to the website.
            </li>
          </ul>
        </div>
      </section>
      <section className="w-full sm:px-56 px-4 py-10">
        <h2 className="text-lg mt-7 mb-5 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          user persona
        </h2>
        <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24">
          I developed a persona representing a typical user “James” of the
          Tronix website who is interested in learning about the company's
          products and making purchases through the website.
        </p>
        <div className="w-full mt-11 flex justify-center">
          <img src="/images/tronix-user.png" alt="" />
        </div>
        <h2 className="text-lg mt-14 mb-3 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          user journey map
        </h2>
        <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24">
          I took the additional step of creating a user journey map for James,
          who simply wants to learn about the company, its products, and make
          purchases through the website.
        </p>
        <div className="w-full mt-4 flex justify-center">
          <img src="/images/tronix-journey.png" alt="" />
        </div>
        <h2 className="text-lg mt-14 mb-3 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          information architecture
        </h2>
        <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24">
          I further created an information architecture of the overall framework
          and navigation of the website.
        </p>
        <div className="w-full mt-4 flex justify-center">
          <img src="/images/information-archi.png" alt="" />
        </div>
        <h2 className="text-lg mt-14 mb-3 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          wireframes
        </h2>
        <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24">
          After researching and testing with users to identify their pain
          points, I created sketches that were reviewed by the team. These
          sketches were then used to create wireframes.
        </p>
        <div className="w-full mt-4 flex justify-center">
          <img src="/images/tronix-wireframes.png" alt="" />
        </div>
        <h2 className="text-lg mt-14 mb-3 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          design
        </h2>
        <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24">
          Using the wireframes as a foundation, I developed high-fidelity
          mockups and prototypes that were reviewed and evaluated by the
          front-end developers.
        </p>
        <div className="w-full mt-4 flex justify-center">
          <img src="/images/tronix-design.png" alt="" />
        </div>
        <div className="w-full mb-5">
          {tronixImageUtils.map((item, i) => (
            <div className="w-full mt-14 flex justify-center" key={i}>
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default index;
