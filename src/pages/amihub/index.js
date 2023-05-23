import React from "react";
import MainLayout from "@/src/layout/MainLayout";
import { Button } from "@/src/components/button/Button";

const index = () => {
  return (
    <MainLayout>
      <section className="w-full sm:h-[90vh] h-[40vh] amihub-hero"></section>
      <section className="w-full sm:px-56 px-4 py-10 space-y-8">
        <h2 className="sm:text-4xl text-2xl text-[#424141] uppercase font-Poppins font-[600]">
          ami hub website design
        </h2>
        <h2 className="text-lg tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          introduction
        </h2>
        <p className="text-sm text-[#626262] font-Poppins leading-7 sm:pr-24">
          AMI Hub is a platform that provides a technology-focused environment
          for businesses, entrepreneurs, inventors and innovators to connect and
          develop solutions that integrate technology, business strategy, and
          networking opportunities, whether they are established or new.
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
            November 2022 - January 2023
          </p>
        </div>
        <div>
          <p className="text-base text-[#363535] tracking-wide font-Poppins font-[600]">
            Tools used
          </p>
          <p className="text-sm sm:pr-24 text-[#626262] font-Poppins leading-7">
            Figma, google forms, google docs
          </p>
        </div>
        <Button title="visit website" />
      </section>
      <section className="w-full bg-[#D5DEFD] py-12 sm:px-56 px-4 space-y-5">
        <h2 className="text-2xl text-[#313131] text-center uppercase font-[600] tracking-wide font-Poppins">
          objective
        </h2>
        <p className="text-sm text-[#363535] font-light w-full text-center leading-7 md:max-w-2xl mx-auto">
          The main objective of the website design was to create an online
          presence for the company, provide information about their products and
          services, and generate leads.
        </p>
      </section>
      <section className="w-full sm:px-56 px-4 py-10">
        <h2 className="text-lg mt-7 mb-5 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          design process
        </h2>
        <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24">
          The design process began with a thorough analysis of the company's
          target audience and competitors. Based on this research, sketches of
          the new website was created, outlining the layout and functionality of
          each page.
        </p>
        <div className="w-full mt-11 flex justify-center">
          <img src="/images/amihub-design.png" alt="" />
        </div>
        <h2 className="text-lg mt-14 mb-3 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          the design
        </h2>
        <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24">
          I then created a visually appealing and easy-to-navigate website,
          using a clean and modern design that reflects the company's focus on
          sustainability.
        </p>
        <h2 className="text-lg mt-14 mb-3 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          home page
        </h2>
        <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24">
          The website's homepage includes a prominent call-to-action,
          encouraging visitors to learn more about the company's services.
        </p>
        <div className="w-full mt-11 flex justify-center">
          <img src="/images/amihub-home.png" alt="" />
        </div>
        <h2 className="text-lg mt-14 mb-3 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          about page
        </h2>
        <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24">
          The about page provides in-depth information regarding the company's
          operations and services, as well as profiles of key team members.
        </p>
        <div className="w-full mt-11 flex justify-center">
          <img src="/images/amihub-about.png" alt="" />
        </div>
        <h2 className="text-lg mt-14 mb-3 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          services page
        </h2>
        <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24">
          The website also includes a detailed "Services" page, where potential
          customers can learn more about the types of sustainable energy
          solutions offered by the company.
        </p>
        <div className="w-full mt-11 flex justify-center">
          <img src="/images/amihub-services.png" alt="" />
        </div>
        <h2 className="text-lg mt-14 mb-3 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          contact page
        </h2>
        <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24">
          A "Contact Us" page was also included, allowing visitors to easily get
          in touch with the company for more information.
        </p>
        <div className="w-full mt-11 flex justify-center">
          <img src="/images/amihub-contact.png" alt="" />
        </div>
        <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-20 mt-9">
          To increase the website's visibility, I also implemented on-page SEO
          techniques to improve the website's ranking on search engines.
        </p>
        <div className="w-full mt-12 space-y-5">
          <h2 className="text-lg mb-3 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
            result
          </h2>
          <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24">
            The website was launched in January 2023 and has since generated a
            significant number of leads for the company.
          </p>
          <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24">
            The website's clean and modern design has helped establish the
            company's professional image, and the clear and concise information
            provided on the website has made it easy for potential customers to
            understand the company's services.
          </p>
          <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24">
            The website's SEO strategies have also helped to increase the
            website's visibility on search engines, which has helped to generate
            organic traffic to the website.
          </p>
        </div>
        <div className="w-full mt-12 space-y-5">
          <h2 className="text-lg mb-3 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
            conclusion
          </h2>
          <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins pr-24">
            The launch of the AMI Hub website has been a triumph, giving them a
            web presence and creating potential business opportunities.
          </p>
          <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24">
            The website's sleek and contemporary layout, complemented by its
            easily understandable content, has strengthened the company's
            professional reputation and made it simple for potential clients to
            grasp their offerings.
          </p>
          <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins sm:pr-24">
            Additionally, the website's SEO techniques have assisted in boosting
            its visibility on search engines, resulting in increased organic
            traffic.
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default index;
