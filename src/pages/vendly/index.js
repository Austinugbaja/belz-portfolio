import React from "react";
import MainLayout from "@/src/layout/MainLayout";
import { Button } from "@/src/components/button/Button";
import { vendlyAnalysisUtils } from "@/src/utils/dummyData";

const index = () => {
  return (
    <MainLayout>
      <section className="w-full h-[90vh] vendly-hero"></section>
      <section className="w-full px-56 py-10 space-y-8">
        <h2 className="text-4xl text-[#424141] uppercase font-Poppins font-[600]">
          vendly design
        </h2>
        <h2 className="text-lg tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          introduction
        </h2>
        <p className="text-sm text-[#626262] font-Poppins leading-7 pr-24">
          Vendly is a decentralized platform that enables small and medium-sized
          businesses to sell products and access financing without restrictions.
          It is a social commerce platform that allows sellers to start selling
          and earning money online within two minutes. <br /> The primary
          objective of this project is to provide an easy and convenient
          shopping and selling experience online. Vendly makes it simple for
          sellers to create and share products quickly and efficiently on the
          web
        </p>
        <h2 className="text-lg tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          role
        </h2>
        <div>
          <p className="text-base uppercase text-[#363535] tracking-wide font-Poppins font-[600]">
            product designer
          </p>
          <p className="text-sm text-[#626262] font-Poppins leading-7 pr-24">
            User research, Competitor research, user persona, information
            architecture, user flows, wire frames, prototyping, visual design,
            testing
          </p>
        </div>
        <div>
          <p className="text-base font-[600] uppercase text-[#363535] tracking-wide font-Poppins">
            duration
          </p>
          <p className="text-sm pr-24 text-[#626262] font-Poppins leading-7">
            User research, Competitor research, user persona, information
            architecture, user flows, wire frames, prototyping, visual design,
            testing
          </p>
        </div>
        <div>
          <p className="text-base text-[#363535] tracking-wide font-Poppins font-[600]">
            Tools used
          </p>
          <p className="text-sm pr-24 text-[#626262] font-Poppins leading-7">
            User research, Competitor research, user persona, information
            architecture, user flows, wire frames, prototyping, visual design,
            testing
          </p>
        </div>
        <Button title="visit platform" />
      </section>
      <section className="w-full bg-[#D3E9F6] py-12 px-56 space-y-3">
        <h2 className="text-2xl text-[#313131] text-center uppercase font-[600] tracking-wide font-Poppins">
          problem statement
        </h2>
        <p className="text-sm text-[#363535] font-light w-full text-center leading-7 md:max-w-2xl mx-auto">
          One of the biggest challenges faced by online vendors is effectively
          reaching and engaging their target audience, retaining customers, and
          managing their presence on various social media platforms. This can be
          a complex and time-consuming task that requires careful planning and
          execution.
        </p>
      </section>
      <section className="w-full px-56 py-10">
        <h2 className="text-lg mt-7 mb-5 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          background
        </h2>
        <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins pr-24">
          As the only designer on the team, which also included one UX writer
          and four engineers, I was in charge of conducting user research and
          creating the visual design for the platform. Although the hackathon
          was brief, we were able to accomplish several key achievements,
          including:
        </p>
        <ul className="text-sm text-[#626262] font-light w-full leading-7 space-y-5 font-Poppins pr-24 pl-10">
          <li className="list-disc">
            <b>
              We used design sprints as a way to guide and inform our process:
            </b>{" "}
            Through the use of design sprints, I was able to successfully
            identify the problem at hand, generate ideas for solutions, create
            prototypes, and ultimately produce the final product.
          </li>
          <li className="list-disc">
            <b>Implemented a design process for the project:</b> By implementing
            a design process, our team was able to establish more structure in
            how we approach our work and allow other teams to have visibility
            into our upcoming sprints. This has been beneficial in helping us to
            be more organized and efficient.
          </li>
          <li className="list-disc">
            <b>Creating a design system:</b> Having a design system in place
            helps to ensure that the overall visual identity and user experience
            remains consistent throughout the platform.
          </li>
          <li className="list-disc">
            <b>End to end execution:</b> The speed at which the engineers were
            able to turn the designs into code showed our efficiency and ability
            to work together as a team to deliver new features.∏
          </li>
        </ul>
        <h2 className="text-lg mt-10 mb-5 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          the process
        </h2>
        <p className="text-sm pr-24 text-[#626262] font-light w-full leading-7 font-Poppins">
          Our design process for vendly is based on the ‘Design thinking
          process’. We aim to incorporate the key phases of Product definition,
          Research, Analysis, design, and validation in our project.
        </p>
      </section>
      <section className="w-full px-56 py-4 bg-[rgb(245,245,245)]">
        <div className="w-full flex justify-center">
          <img src="/images/design-thinking.png" alt="" />
        </div>
      </section>
      <section className="w-full px-56 py-10">
        <h2 className="text-lg mt-10 mb-5 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          understanding the problem
        </h2>
        <p className="text-sm text-[#626262] font-light w-full leading-7 font-Poppins pr-24">
          The Design Thinking process is a structured approach to
          problem-solving that involves empathy, ideation, prototyping, and
          testing. By conducting interviews with five online vendors, I was able
          to gather valuable insights into their pain points. Through this
          process, I was able to understand their needs and problems in greater
          detail, which helped to design solutions that are tailored to their
          specific needs.
        </p>
        <h2 className="text-lg mt-10 mb-5 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          goals of the research
        </h2>
        <ul className="text-sm pr-24 text-[#626262] font-light w-full leading-7 font-Poppins pl-10">
          <li className="list-disc">
            To identify the difficulties and issues faced by online vendors.
          </li>
          <li className="list-disc">
            To determine the types of businesses owned by online vendors and
            those that are more successful in an online setting.
          </li>
          <li className="list-disc">
            To understand the online platforms currently being used by online
            vendors for their business.
          </li>
          <li className="list-disc">
            To learn about the techniques and approaches used by online vendors
            to manage their businesses and financial accounts online.
          </li>
          <li className="list-disc">
            To determine whether online vendors use sponsored advertisements to
            increase visibility and drive traffic to their businesses.
          </li>
        </ul>
        <p className="text-sm pr-24 text-[#626262] font-light w-full leading-7 font-Poppins mt-3">
          We conducted an online survey and received responses from 96 vendors
          and 52 buyers who have been actively engaged in online buying and
          selling for the past six months, based on which we analyzed the
          results.
        </p>
      </section>
      <section className="w-full px-56 py-10 bg-[#D3E9F6]">
        <h2 className="text-2xl text-[#313131] text-center uppercase font-[600] tracking-wide font-Poppins">
          analyzing the problem
        </h2>
        <p className="text-sm md:max-w-xl mx-auto text-[#626262] font-light w-full leading-7 font-Poppins mt-3 text-center">
          By collecting data from user interviews and surveys, my team and I
          were able to use a user persona, empathy map and a competitors
          analysis to identify and understand the pain points and challenges
          experienced by the users;
        </p>
        <div className="w-full grid grid-cols-2 gap-6 mt-8">
          {vendlyAnalysisUtils.map((item, i) => (
            <div
              className="w-full px-4 py-6 text-[#363535] text-sm font-[600] font-Poppins bg-[#F0F6FF] rounded-md"
              key={i}
            >
              {item.text}
            </div>
          ))}
        </div>
      </section>
      <section className="w-full px-56 py-10">
        <h2 className="text-lg mt-7 mb-5 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          user persona
        </h2>
        <div className="w-full mt-7 flex justify-center">
          <img src="/images/user-persona.png" alt="" />
        </div>
        <h2 className="text-lg mt-16 mb-5 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          empathy map
        </h2>
        <div className="w-full mt-7 flex justify-center">
          <img src="/images/empathy-map.png" alt="" />
        </div>
        <h2 className="text-lg mt-16 mb-5 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          competitors analysis
        </h2>
        <div className="w-full mt-7 flex justify-center">
          <img src="/images/competitors-analysis.png" alt="" />
        </div>
      </section>
      <section className="w-full px-56 py-12 bg-[#D3E9F6]">
        <h2 className="w-full text-3xl text-[#313131] font-[600] font-Poppins uppercase tracking-wide">
          product vision and solution
        </h2>
        <div className="text-sm pr-24 text-[#626262] font-light w-full leading-7 font-Poppins mt-5">
          From these findings, we decided as a product to identify key business
          goals:
          <ul className="text-sm pr-24 pl-10 text-[#626262] font-light w-full leading-7 font-Poppins mt-4">
            <li className="list-disc">
              Design the platform to be user-friendly and provide a social
              media-like experience for users.
            </li>
            <li className="list-disc">
              Design the platform to function as an online store that allows
              users to easily create and sell products without the need to
              navigate the complexities of a traditional e-commerce website
            </li>
            <li className="list-disc">
              We want users to have the ability to create and manage their own
              website and products.
            </li>
            <li className="list-disc">
              To be able to monitor and manage financial information We want
              users to be able to understand their target audience and how to
              effectively reach them
            </li>
          </ul>
        </div>
        <h2 className="w-full text-3xl text-[#313131] font-[600] font-Poppins uppercase tracking-wide mt-7 mb-7">
          mvp
        </h2>
        <ol className="text-sm pr-24 text-[#626262] font-light w-full leading-7 font-Poppins mt-4 list-decimal">
          <li>
            Create a product : We want users to be able to create products of
            their goods easily on the platform thereby getting all their
            products on a single storefront website
          </li>
          <li>
            Sell and share products: We want users to be able to sell products
            and share their links to customers using different means to gain a
            large audience.
          </li>
          <li>
            Receive payment : We want users to be able to receive payment in
            different currencies and crypto on the platform in order to reduce
            payment barriers.
          </li>
        </ol>
      </section>
      <section className="w-full px-56">
        <h2 className="text-lg mt-16 mb-5 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          information architecture
        </h2>
        <div className="w-full py-4 flex justify-center">
          <img src="/images/information-architecture.png" alt="" />
        </div>
        <h2 className="text-lg mt-16 mb-5 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          design
        </h2>
        <p className="text-sm pr-24 text-[#363535] font-light w-full leading-7 font-Poppins mt-4">
          Throughout the project, we conducted user testing at every stage to
          identify and address any problems or issues with the current version.
          After gathering feedback, we would update the prototypes and test
          again. In terms of branding, we aimed to design a minimalist, clean
          user interface that conveyed a sense of trustworthiness and
          forward-thinking for our target audience.
        </p>
        <h2 className="text-lg mt-12 mb-5 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          landing page
        </h2>
        <p className="text-sm pr-24 text-[#363535] font-light w-full leading-7 font-Poppins mt-4">
          I desired a landing page with a straightforward call-to-action that
          clearly communicates our goal and includes all other relevant
          information provided by the platform
        </p>
        <div className="w-full py-6 flex justify-center">
          <img src="/images/landing-page.png" alt="" />
        </div>
        <h2 className="text-lg mt-12 mb-5 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          sign up pages
        </h2>
        <p className="text-sm pr-24 text-[#363535] font-light w-full leading-7 font-Poppins mt-4">
          A streamlined registration page that enables users to either sign in
          or create a new account using their email, LinkedIn, or Google
          credentials.
        </p>
        <div className="w-full py-6 flex justify-center">
          <img src="/images/sign-up.png" alt="" />
        </div>
        <h2 className="text-lg mt-12 mb-5 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          home page
        </h2>
        <p className="text-sm pr-24 text-[#363535] font-light w-full leading-7 font-Poppins mt-4">
          The home page displays all products created by the seller and provides
          a menu for managing them, including a call-to-action button to create
          new projects.
        </p>
        <div className="w-full py-6 flex justify-center">
          <img src="/images/home-page.png" alt="" />
        </div>
        <h2 className="text-lg mt-12 mb-5 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          create product
        </h2>
        <p className="text-sm pr-24 text-[#363535] font-light w-full leading-7 font-Poppins mt-4">
          This illustrates a step-by-step method for creating a new product.
        </p>
        <div className="w-full py-6 flex justify-center">
          <img src="/images/create-product.png" alt="" />
        </div>
        <h2 className="text-lg mt-12 mb-5 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          account
        </h2>
        <p className="text-sm pr-24 text-[#363535] font-light w-full leading-7 font-Poppins mt-4">
          The account section displays detailed information about the seller and
          their business, which the buyer can review before making a purchase.
        </p>
        <div className="w-full py-6 flex justify-center">
          <img src="/images/account.png" alt="" />
        </div>
        <h2 className="text-lg mt-12 mb-5 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          insight
        </h2>
        <p className="text-sm pr-24 text-[#363535] font-light w-full leading-7 font-Poppins mt-4">
          Insight provides an overall view of the business performance, as well
          as specific information on how individual products are performing.
        </p>
        <div className="w-full py-6 flex justify-center">
          <img src="/images/insight.png" alt="" />
        </div>
        <h2 className="text-lg mt-12 mb-5 tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-l from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
          wallet
        </h2>
        <p className="text-sm pr-24 text-[#363535] font-light w-full leading-7 font-Poppins mt-4">
          The wallet feature is the financial management area of the platform,
          it displays sales, profit/loss, savings, and cryptocurrency finances.
          It also allows the seller to effectively manage their financial
          records, and sell or exchange various currencies.
        </p>
        <div className="w-full py-6 flex justify-center">
          <img src="/images/wallet.png" alt="" />
        </div>
      </section>
      <section className="w-full px-56 py-12 space-y-5 bg-[#D3E9F6]">
        <h2 className="w-full text-3xl font-Poppins font-[600] tracking-wider uppercase text-[#313131]">
          result and takeaways
        </h2>
        <p className="text-sm pr-24 text-[#363535] font-light w-full leading-7 font-Poppins">
          Working at an early-stage startup was a very steep learning curve. It
          was an enlightening experience that taught me a lot about the
          importance of being efficient and strategic in terms of where to focus
          my energy and efforts.
        </p>
        <h2 className="w-full text-lg font-Poppins font-[600] tracking-wider uppercase text-[#313131]">
          ‍some key takeaways from this project are:
        </h2>
        <ul className="text-sm pr-24 pl-10 text-[#363535] font-light w-full leading-7 font-Poppins">
          <li className="list-disc">
            Prioritize building a minimal viable product (MVP). As a startup, it
            is essential to be mindful of limited time and resources, so it is
            important to focus on the features that will provide the most value
            to users.
          </li>
          <li className="list-disc">
            Do not get too caught up in the details. Earlier on, I made the
            mistake of focusing too much on the appearance of the user
            interface. However, reevaluating the user flows helped me to refocus
            on the user experience.
          </li>
          <li className="list-disc">
            Keep the problem you are trying to solve for your users in mind.
            Ultimately, your goal is to address the pains and challenges of your
            users, so it is important to stay focused on that, even when you are
            busy with daily tasks.
          </li>
        </ul>
      </section>
    </MainLayout>
  );
};

export default index;
