import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import t1 from "../assets/Testimonial/test1.png"
import t2 from "../assets/Testimonial/test2.png"
import t3  from "../assets/Testimonial/test3.png"
import t4 from "../assets/Testimonial/test4.png"
import t5 from "../assets/Testimonial/test5.png"
import t6 from "../assets/Testimonial/test6.png"
import t7 from "../assets/Testimonial/test7.png"
import t8 from "../assets/Testimonial/test8.png"
import t9 from "../assets/Testimonial/test9.png"
import t10 from "../assets/Testimonial/test10.jpg"
import t11 from "../assets/Testimonial/test11.jpg"
import t12 from "../assets/Testimonial/test12.jpg"
import t13 from "../assets/Testimonial/test13.jpg"
import t14 from "../assets/Testimonial/test14.jpg"
import t15 from "../assets/Testimonial/test15.jpg"
import t16 from "../assets/Testimonial/test16.jpeg"
import t17 from "../assets/Testimonial/test17.jpeg"
import t18 from "../assets/Testimonial/test18.jpg"
import t19 from "../assets/Testimonial/test19.jpg"
import t20 from "../assets/Testimonial/test20.jpeg"
import t21 from "../assets/Testimonial/test21.jpeg"
import image from "../assets/Testimonial/image.jpg"

const testimonials = [
  {
    name: "Puja & Mihir",
    description:
      "We had the absolute best experience working with Eventrics for our multi-day destination wedding in Florida. From the very beginning—two years before our big day—their team was by our side, helping us navigate every step of the planning process. Our main planner,... Abigail, was a true rockstar. She was organized, timely, and worked tirelessly to find the perfect vendors within our budget who could also bring our vision to life. No request was too big, no detail too small.",
    fullText:
      "We had the absolute best experience working with Eventrics for our multi-day destination wedding in Florida. From the very beginning—two years before our big day—their team was by our side, helping us navigate every step of the planning process. Our main planner, Abigail, was a true rockstar. She was organized, timely, and worked tirelessly to find the perfect vendors within our budget who could also bring our vision to life. No request was too big, no detail too small. When issues arose with our hotel/venue and a conference, she worked relentlessly to sort out the mess. Then, two hurricanes threatened our events, and she didn't miss a beat—ensuring our welcome party and welcome boat experience were still perfect. Throughout the wedding weekend, Abigail and Whitney were behind the scenes, handling logistics, keeping vendors on schedule, and making sure we never had to stress. Brittany and Mercedes stepped in to capture behind-the-scenes clips and created amazing reels for us. After the wedding, Mercedes continued her magic, handling submissions to wedding publications and sharing our special moments. The level of care, effort, and dedication this team put into making our wedding weekend magical and stress-free is something we will forever be grateful for. We would absolutely recommend them again in a heartbeat.",
    image: t1,
  },
  {
    name: "Rushika & Neil",
    description:
      "Eventrics made our destination Indian wedding in Cancun an extraordinary celebration. Their incredible level of organization, responsiveness, and professionalism made our wedding weekend one of the best weekends of our lives and a truly memorable weekend for our...Eventrics made our destination Indian wedding in Cancun an extraordinary celebration. Their incredible level of organization",
    fullText:
      "Eventrics made our destination Indian wedding in Cancun an extraordinary celebration. Their incredible level of organization, responsiveness, and professionalism made our wedding weekend one of the best weekends of our lives and a truly memorable weekend for our guests. Every event was flawlessly executed (despite last minute venue changes due to weather) with meticulous attention to detail and minimal involvement from us or our families. We can't recommend them enough for an stress-free, and enjoyable wedding planning experience!",
    image:
      t2,
  },
  {
    name: "Anika & Michael",
    description:
      "From the moment I spoke with Brittany, I loved her energy and respected her voice. Throughout the entire planning process, Eventrics was really on top of it and helped us reach every deadline and overcome any obstacle. The platform they use with their clients to...",
    fullText:
      "From the moment I spoke with Brittany, I loved her energy and respected her voice. Throughout the entire planning process, Eventrics was really on top of it and helped us reach every deadline and overcome any obstacle. The platform they use with their clients to outline tasks per month is super organized and made me feel so much calmer during the process. I have a very Type A personality and this just gave me all the confidence in the Eventrics team. Abigail was our point person and really took the lead in helping us plan an amazing three day function. Due to our work schedule, planning during normal business hours is very difficult, but Abi was so flexible and really accommodated us by working around our schedules. Abi and Brittany advocated for what we wanted to our vendors and were able to re-visit subjects as many times as we needed in order to make us feel comfortable. We had a fusion Indian-Latin wedding with a Hindu Ceremony and Catholic Ceremony – the Eventrics team really showed their expertise in helping plan a fusion wedding, they gave us great ideas and followed up on any new ideas our families might have brought to the table. As the client, they really put you first and make sure that your vision is met. The Eventrics team worked so well with all my vendors and the vendors also commented on how amazing they are to work with. I learned that they really pay attention to the small details in the planning process which made all the difference in the end. Their execution of our events were flawless! We were always on time, any obstacle was handled with grace, they worked beautifully in coordinating vendors, took care of our families, and they always made sure that the Bride and Groom were happy and free from stress. I received numerous compliments from guests on their professionalism and work ethnic. An extra special thank you to Brittany and Abigail and the entire Eventrics Team in helping us have the most amazing wedding celebrations, we are forever grateful!!!",
    image:
      t3,
  },
  {
    name: "Pooja & Saajan",
    description:
      "Choosing Eventrics as our wedding planning team was the best decision that me and Saajan have ever made. We had gone through interviewing several companies prior but chose to work with Eventrics. Throughout the whole year of planning, they have helped countless hours...",
    fullText:
      "Choosing Eventrics as our wedding planning team was the best decision that me and Saajan have ever made. We had gone through interviewing several companies prior but chose to work with Eventrics. Throughout the whole year of planning, they have helped countless hours in making sure every single event went smooth. Saajan and I were long distance during half of our wedding planning and we are truly grateful Eventrics team were able to help us with all of our venue sorting, choosing vendors, and assisting in any minor details needed to be accomplished. We used the Monday board which was extremely helpful and very organized that kept us on track with tasks we needed to complete. During the wedding week, we felt zero stress since we had Eventrics handling anything that was happening which very much helped us enjoy our weekend. Our wedding week went flawless and we truly had an amazing time. We wouldn't have had this amazing & stress-free of a wedding without Eventrics. Thank you so much for truly helping me and Saajan get our dream wedding. We truly appreciate you guys!",
    image:
     t4,
  },
  {
    name: "Nisha & Arun",
    description:
      "Used Eventrics for our Indian wedding and they are absolutely amazing!!!! We had pretty busy schedules but they made sure to keep us on track without making it feel overwhelmed. Honestly the day of the events, I felt so stress free about everything because I knew they...",
    fullText:
      "Used Eventrics for our Indian wedding and they are absolutely amazing!!!! We had pretty busy schedules but they made sure to keep us on track without making it feel overwhelmed. Honestly the day of the events, I felt so stress free about everything because I knew they got it. They have multiple people on site running things behind the scenes so you don't have to worry even a tiny bit. I highly recommend!",
    image:
      t5,
  },
  {
    name: "Suyashi & Luke",
    description:
      "The Eventrics team did an amazing job from start to finish planning our wedding. They were always available to help, incredibly organized and dependable, and an absolute pleasure to work with. Not only is the team thorough and reliable, but also so kind and passionate...",
    fullText:
      "The Eventrics team did an amazing job from start to finish planning our wedding. They were always available to help, incredibly organized and dependable, and an absolute pleasure to work with. Not only is the team thorough and reliable, but also so kind and passionate about what they do. They were consistently a step ahead, and adapted quickly without causing stress for anyone else during hiccups (i.e. rain during ceremonies), and also made us feel so loved and special. We would recommend them to anyone, and miss working so closely with them over the past year!",
    image:
      t6,
  },
  {
    name: "Sumeen & Neeraj",
    image:
      t7,
    description:
      "Brittany and the Eventrics team were able to pull off what we thought was impossible: a cross country destination wedding, over three days, at three very unique venues - and all in under four months! Having witnessed their seamless work during my own sister's wedding,...",
    fullText:
      "Brittany and the Eventrics team were able to pull off what we thought was impossible: a cross country destination wedding, over three days, at three very unique venues – and all in under four months!Having witnessed their seamless work during my own sister's wedding, I knew when the time came, I wanted Eventrics as my planning team. I, personally, did not have a vision when it came to the planning process and their experience, guidance & immense knowledge on everything from venues, decor, vendors, timing, etc was so helpful in creating a wedding weekend that felt unique and special to us as a couple. Brittany and Abi are also great communicators; I felt comfortable to voice any concerns, questions, or vision/ideas and knew they would be taken into consideration and planned for accordingly.As a dynamic and all encompassing team, they successfully took the stress out of wedding planning. We still have guests commenting on how smoothly everything ran, and more importantly, how relaxed we were as the bride and groom. It was a relief knowing their expert team was managing all the moving parts and were the main point of contacts – which allowed us and our families to really enjoy the events we put so much thought into. Working with Eventrics was the first and easily the best decision we made throughout the wedding planning process.The level of detail and professionalism they put into EVERYTHING is what sets the team apart. I cannot recommend Eventrics highly enough to any couple looking to plan the best weekend of their life.",
  },
  {
    name: "Sarit & Reema",
    image:
      t8,
    description:
      "Looking back on the entire wedding process, hiring Eventrics was one of the best decisions we made. They guided every step of the way from helping us find our vendors to negotiating our contracts to working collaboratively with the resort to get us the services needed...",
    fullText:
      "Looking back on the entire wedding process, hiring Eventrics was one of the best decisions we made. They guided every step of the way from helping us find our vendors to negotiating our contracts to working collaboratively with the resort to get us the services needed to meet all our wedding needs.Brittany and the team are incredibly knowledgeable about and experienced with Indian weddings. There were multiple occasions where the team actually reminded us about some tradition aspects and rituals. Beyond this, Eventrics has figured out what it means to be organized. They use the platform Monday which basically houses a very organized and specific to-do list. It helped us keep track of which tasks needed to be done every week and every month. They were in communication with us and would have touch base calls with us at least once a week to make sure we were on track for everything from save the dates, outfits to dance choreography.During the wedding week, Brittany and the team were on top of everything and our wedding week went so smoothly. Our families and guests all said this was one of the most organized weddings they have attended! Eventrics is a must hire for planning your wedding and we are so happy we decided to choose them! ",
  },
  {
    name: "Erica & Shahzaad",
    image:
      t9,
    description:
      "Our 3 day long wedding weekend would not have turned out so perfectly without the amazing team behind Eventrics Weddings. Every aspect of our wedding was dealt with without a worry and we we were able to enjoy every minute! The planning was in depth and detailed for a...",
    fullText:
      "Our 3 day long wedding weekend would not have turned out so perfectly without the amazing team behind Eventrics Weddings. Every aspect of our wedding was dealt with without a worry and we we were able to enjoy every minute! The planning was in depth and detailed for a reason and it was so worth it and helped us create our dream wedding weekend. The ladies of Eventrics are very professional and worked so well with everyone that was our part of our big weekend!",
  },
  {
    name: "Janki & Krishna",
    image:
     t10,
    description:
      "It was such a pleasure working with the Eventrics team! Thank you for perfectly planning the best weekend of our lives!",
    fullText:
      "Thank you Eventrics for making our dream wedding come true. From decor to coordination, everything was magical and smooth. Guests are still praising it! It was such a pleasure working with the Eventrics team! Thank you for perfectly planning the best weekend of our lives!",
  },
  {
    name: "Palak & Alex",
    image:
      t11,
    description:
      "When people ask me how my wedding was I say… \"It was great, and I never want to do it again !\" They often reply \"why? Was it that stressful?\" And I say \"no it just couldn't have been any more perfect! I can't imagine doing it again any better than it already was.\" A....",
    fullText:
      "When people ask me how my wedding was I say… \"It was great, and I never want to do it again !\"They often reply \"why? Was it that stressful?\"And I say \"no it just couldn't have been any more perfect! I can't imagine doing it again any better than it already was.\"A lot of that is attributed to everything eccentrics did to make it so seamless!We'd choose them over and over again.",
  },
  {
    name: "Monika & Dhruv",
    image: t12,
    description:
      "Where do I begin? I spoke to Eventrics about 15 months before my wedding, and I interviewed about 5 potential planners. From the first meeting, Brittany was thorough and professional and kept it very transparent with us. She was the best person I interviewed and we...",
    fullText:
      "Where do I begin? I spoke to Eventrics about 15 months before my wedding, and I interviewed about 5 potential planners. From the first meeting, Brittany was thorough and professional and kept it very transparent with us. She was the best person I interviewed and we had to hire them!As far as the wedding planning went, with me not being from Florida, they were able to be in touch with all our vendors, our venue and kept me on top of things and tasks.The cherry on top was how they handled my wedding planning. Everyone came up to us after the wedding and stated how effortlessly things ran, and how much things were on time, something they had never seen before. All thanks to Brittany, Whitney and Abi. They were our life savers that weekend. They handled everything so well and told our entire family where to be and what to do, and all we had to do was show up. They even went and got me gum because I wasn't feeling well. Overall, my wedding was such a success and I'm so glad we hired them. My entire family will hire them in the future for family weddings. Thank you Eventrics!",
  },
  {
    name: "Menka & Eric",
    image: t13,
    description:
      "Eric and I are so grateful we chose Eventrics Weddings to help us plan our wedding. We interviewed about 8-10 different planners, and as soon as I met Brittany on that first Zoom call, I knew this was the right team for us. We chose them before finalizing our wedding...",
    fullText:
      "Eric and I are so grateful we chose Eventrics Weddings to help us plan our wedding. We interviewed about 8-10 different planners, and as soon as I met Brittany on that first Zoom call, I knew this was the right team for us. We chose them before finalizing our wedding venue, and I am so glad we did! Not only were they so knowledgeable in planning Indian weddings, but they were also willing to help create new ideas. Being a Catholic Hindu fusion wedding, we wanted to make sure both cultures were seen and experienced. Brittany and her team, from the very beginning, kept us on track with weekly/monthly phone calls and to-do lists and made sure we were not taking on more than we needed to when it wasn't due yet. So many people asked how we were feeling with the wedding planning process, and they were all surprised every time we commented that it's been great and we feel stress-free. This is all thanks to Brittany and her team.We had our wedding in Mexico, and they were innovative enough to find people that could help with any language barriers. They worked seamlessly with all our vendors and were resourceful when things came up that we couldn't get in America and had to source locally. There were so many things I felt I was asking which was out of the ordinary but they never let on and always said if it was possible they would do their best to achieve it. They gave us wonderful ideas on decor, florals, and how to achieve a beautiful culturally blended wedding. Britt, Eric and I cannot thank you (and the rest of your team) enough for the absolute perfection and dream of our wedding weekend! We couldn't have done it without you all. We received so many compliments on how amazing and well-organized our wedding was (and the fact that it started on time despite being an Indian wedding) and that's a lot thanks to you all. Britt, I know you handled so much behind the scenes and I'm sure there were a lot of mishaps happening but you kept us so stress-free all weekend and we appreciate that and appreciate you. Eric and I are truly grateful for all your efforts. From our eyes, everything turned out great!! Thank you again!!! I highly recommend this team for your own wedding planning if you want it to be organized, timely, and highly stress-free!",
  },
  {
    name: "Ayeesha & Aashil",
    image:
    t14,
    description:
      "Working with Brittany and the Eventrics team was the first decision we made in our planning process and for due reason. After working for Brittany as an intern, even 7 years ago, I knew I needed her to plan my wedding. The teams professionalism and organization kept...",
    fullText:
      "Working with Brittany and the Eventrics team was the first decision we made in our planning process and for due reason. After working for Brittany as an intern, even 7 years ago, I knew I needed her to plan my wedding. The teams professionalism and organization kept us on task throughout the year of wedding planning and the weekend itself went incredibly smooth. My family and I didn't have to worry about a thing, as Brittany and her team handled every small and large detail there was. Every vendor we spoke with and hired reaffirmed that Brittany was the best in the industry as well! Unfortunately, our original wedding venue in Fort Myers became flooded due to Hurricane Ian 2 weeks before our wedding day and Brittany seamlessly stepped in and handled the venue switch to Orlando with all of our vendors, leaving us with no stress despite the circumstances. Hiring Eventrics was the best decision we made and we can't thank them enough! – Ayeesha, Bride",
  },
  {
    name: "Khusbu & Michael",
    image:
      t15,
    description:
      "I do not know where to even start with this wonderful team. We were skeptical about hiring a full-service event planner and were originally going to hire just a day of coordinator for our wedding because we thought we could handle the planning ourselves, but we felt a...",
    fullText:
      "I do not know where to even start with this wonderful team. We were skeptical about hiring a full-service event planner and were originally going to hire just a day of coordinator for our wedding because we thought we could handle the planning ourselves, but we felt a sense of ease from the second we talked to Brittany and knew that we needed to hire them as a full-service event planner, and I am so glad we did because the wedding would have been a hot mess without them. They used the Monday Platform to make sure we knew what tasks we needed to get done each month, which allowed us to be organized and confident throughout the wedding planning process. They were also in constant communication through the Monday board about these tasks and updated us with any pertinent information. They even brought up points that we would never have thought about or considered if we were doing the planning on our own, but they have tons of knowledge due to their past experiences. Our families said it was the most organized wedding that they have ever attended! EVERYTHING was on time, which as we know is rare for a South Asian event. Since they have been in the event planning business for so long, they have very strong relationships with vendors, which helped us tremendously during our search for a DJ, hair & makeup, food, and decor. Everyone they recommended to us ended up being amazing and the vendors themselves were happy to hear that Eventrics was our wedding planning team because they have always had a positive experience with them. As I am sure all couples experience during wedding planning, we did have some hiccups along the way with our venue and vendors, but Eventrics was always right there by our side guiding us and assuring us that we will get through all the obstacles and have an amazing wedding and THEY DID NOT DISSAPOINT! Trust me you want them on your side throughout this crazy journey you are about to start!",
  },
  {
    name: "Amie & Aman",
    image:
      t16,
    description:
      "The Eventrics team was amazing to work with! I had found them based on a recommendation from a friend and just from my first intro phone call with Brittany I knew it was going to be the right fit. I live in NYC and was having a destination wedding in Orlando so it was...",
    fullText:
      "The Eventrics team was amazing to work with! I had found them based on a recommendation from a friend and just from my first intro phone call with Brittany I knew it was going to be the right fit. I live in NYC and was having a destination wedding in Orlando so it was important for me to pick a team that was knowledgeable about the local venues and vendors to help facilitate the planning process.Planning during COVID had so many challenges but Brittany/Whitney and the whole team really knew how to guide us with the changing times. They were with us every step of the way and really allowed us to enjoy our wedding without feeling stressed out on the day of our events. We even had many guests comment on their professionalism, punctuality, and planning expertise throughout the weekend.They are also very responsive which I felt was super important being far away and they were very accommodating to my schedule as I work full time and only have finite times to do vendor calls. I would recommend them without hesitation! They will truly help create a memorable experience for your wedding.",
  },
  {
    name: "Alexandra & Viraj",
    image:
      t17,
    description:
      "The team at Eventrics Weddings did the most amazing job with our wedding. They helped us stay on track throughout the whole planning process, gave us the best recommendations for vendors, and did the best job with executing the big day. I'm so grateful for them and...",
    fullText:
      "The team at Eventrics Weddings did the most amazing job with our wedding. They helped us stay on track throughout the whole planning process, gave us the best recommendations for vendors, and did the best job with executing the big day. I'm so grateful for them and can't recommend the team enough. – Alexandra & Viraj (Bride & Groom)",
  },
  {
    name: "Anisha & Ronak",
    image:
     t18,
    description:
      "Brittany and the entire Eventrics team were a DREAM! After the first phone call, we knew they were the team for us. We began working together just before the pandemic, and had originally planned for a Spring 2021 wedding. However, as the pandemic continued, we...",
    fullText:
      "Brittany and the entire Eventrics team were a DREAM! After the first phone call, we knew they were the team for us. We began working together just before the pandemic, and had originally planned for a Spring 2021 wedding. However, as the pandemic continued, we postponed it to 2022. They worked tirelessly alongside us to navigate numerous complications with our wedding venue that ensued.The Eventrics team handled every hurdle with ease, and truly went above and beyond to make our wedding dreams come true. No matter how stressed I became during issues with the planning process, I could always trust Eventrics was on top of it. They worked seamlessly with our vendor team to ensure our vision came to fruition.We received so many compliments from friends and family on how effortless and well planned the weekend felt. No one but Eventrics could have pulled it off and we are so thankful to Brittany, Whitney, Abi, Taylor and the entire Eventrics team! – Anisha, Bride",
  },
  {
    name: "Karishma & Michael",
    image: t19,
    description:
      "Eventrics is a must have vendor when planning your wedding. They supported me from the beginning all the way to the last hour of my wedding night. Their professionalism and attention to detail is unmatched. Not only did they do the first line of vetting of all my...",
    fullText:
      "Eventrics is a must have vendor when planning your wedding. They supported me from the beginning all the way to the last hour of my wedding night. Their professionalism and attention to detail is unmatched. Not only did they do the first line of vetting of all my vendors so that my vendor selection was easier on me, but they made sure to be a part of every conversation so that the process stayed on track. Their best contribution was their ability to communicate with all parties on my behalf. They were able to ensure all vendors had the items and accommodations necessary. They then supported my family and vendor team by creating timelines and assisting day of so that we stayed on schedule.Absolutely blown away but not only their professional expertise throughout the whole process, but also their attention to client service and detail. They make sure your every request is met. My wedding went off without a hitch all due to the Eventrics team. They work extremely hard and I could not recommend them more. Hiring them makes your experience as a bride so much more enjoyable and manageable. They truly made my wedding the success that it was and I honestly could not have done it without them. – Karishma & Michael",
  },
  {
    name: "Gurteg & Evleen",
    image:
      t20,
    description:
      "The Eventrics team was phenomenal to work with. We were originally introduced to them at a friend's wedding, saw their work in action and were blown away with their ability to run such a large event so smoothly. Throughout the planning process, Brittany and her team...",
    fullText:
      "The Eventrics team was phenomenal to work with. We were originally introduced to them at a friend's wedding, saw their work in action and were blown away with their ability to run such a large event so smoothly.Throughout the planning process, Brittany and her team were very attentive to each detail, kept us on track to complete tasks in a timely manner, and ensured we weren't running around chasing vendors.During the events, the team was terrific in following through with each detail of our vision, no matter how intricate and with so many guests. The team ensured that our event ran on time and we were amazed that the wedding activities went on with pinpoint accuracy to what was scheduled.Could not be happier with choosing Eventrics. They truly made us feel as part of their family and were passionate to bring our wedding vision to life. – Gurteg, Groom",
  },
  {
    name: "Pooja & Matt",
    image:
      t21,
    description:
      "We are so grateful we had Brittany and the Eventrics Weddings team as our wedding planners. They helped us plan a double wedding (two sisters getting married the same weekend), during Covid, and pulled it off spectacularly. It was definitely double the planning and...",
    fullText:
      "We are so grateful we had Brittany and the Eventrics Weddings team as our wedding planners. They helped us plan a double wedding (two sisters getting married the same weekend), during Covid, and pulled it off spectacularly. It was definitely double the planning and I'm sure double the opinions, but Eventrics handled our whole family gracefully. It was the best wedding we have ever been to and all of our guests said the same!!Unfortunately, it did rain on our wedding weekend, but due to the great work of Eventrics and their reliable vendors, everyone remarked that they did not even realize the wedding ceremonies were meant to be held outdoors since Plan B was executed so flawlessly. We know there were a lot of changes last minute, but as the brides, we did not hear about any issues or concerns. We got to truly be present for our own weddings and each others', and to us, that is the ultimate service that the Eventrics team was able to give us during our once-in-a-lifetime weekend. We cannot recommend them more! ",
  },
];

const TestimonialsUnified = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false);
  const [uploadedImages, setUploadedImages] = useState({});

  // Handle opening detail view
  const handleTestimonialClick = (testimonial, index) => {
    setSelectedTestimonial({ ...testimonial, index });
    setIsDetailView(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle going back to grid view
  const handleBackClick = () => {
    setIsDetailView(false);
    setSelectedTestimonial(null);
  };

  // Smooth scrolling animation using CSS
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Allura:wght@400&display=swap');
      .font-allura { font-family: 'Allura', cursive; }
      .line-clamp-3 { 
        display: -webkit-box; 
        -webkit-line-clamp: 3; 
        -webkit-box-orient: vertical; 
        overflow: hidden; 
      }
      .line-clamp-4 { 
        display: -webkit-box; 
        -webkit-line-clamp: 4; 
        -webkit-box-orient: vertical; 
        overflow: hidden; 
      }
      .transition-all-smooth {
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Detail View Component
  const DetailView = () => (
    <div className="min-h-screen px-4 py-12 bg-[#f8f6f2] space-y-16 transition-all-smooth mt-5">
      {/* Detail Section */}
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-10 items-stretch mt-5">
        {/* Left - Image */}
        <div className="w-full md:w-1/2 relative h-[450px] sm:h-[300px] md:h-[500px]">
          <div className="absolute -top-4 -left-4 w-full h-full rounded-xl bg-black/10 transform -rotate-3 z-0 shadow-lg"></div>
          <img
            src={uploadedImages[selectedTestimonial?.index] || selectedTestimonial?.image}
            alt={selectedTestimonial?.name}
            className="relative border-2 border-black z-10 rounded-xl w-full h-full object-cover shadow-xl"
          />
        </div>

        {/* Right - Content */}
        <div className="w-full md:w-1/2 min-h-[400px] flex flex-col justify-between">
          <div>
            {/* Back Button */}
            <button
              onClick={handleBackClick}
              className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium text-[#3A2F25] bg-white border border-[#3A2F25] rounded-md hover:bg-[#f1ebe3] hover:shadow-lg transition-all duration-200 "
            >
              <ArrowLeft size={18} />
              Back to Testimonials
            </button>

            {/* Name */}
            <h3 className="text-4xl font-allura mb-4" style={{ color: "#b89433" }}>
              {selectedTestimonial?.name}
            </h3>

            {/* Full Text */}
            <p
              className="text-[15px] leading-relaxed font-serif"
              style={{ color: "#3A2F25" }}
            >
              {selectedTestimonial?.fullText}
            </p>
          </div>
        </div>
      </div>

      {/* More Testimonials */}
      <div className="max-w-6xl mx-auto px-2">
        <h2
          className="text-5xl font-allura text-center mb-8"
          style={{ color: "#b89433" }}
        >
          More Testimonials
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials
            .filter((t) => t.name !== selectedTestimonial?.name)
            .slice(0, 6)
            .map((t, i) => (
              <div
                key={i}
                className="bg-white border-2 border-black rounded-xl overflow-hidden shadow-md transition hover:shadow-lg cursor-pointer"
                onClick={() => handleTestimonialClick(t, testimonials.findIndex(test => test.name === t.name))}
              >
                {/* Image */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-[200px] object-cover"
                />

                {/* Content */}
                <div className="p-4 space-y-2">
                  {/* Name */}
                  <h3
                    className="text-2xl font-allura"
                    style={{ color: "#b89433" }}
                  >
                    {t.name}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm line-clamp-3 font-serif"
                    style={{ color: "#7A7A7A" }}
                  >
                    {t.description.length > 130
                      ? t.description.slice(0, 130) + "..."
                      : t.description}
                  </p>

                  {/* Read More Button */}
                  <button
                    className="text-white font-semibold py-1 px-3 rounded-full text-sm shadow-sm hover:shadow-md transition duration-300"
                    style={{
                      background: "linear-gradient(to right, #c87c38, #A07e7e)",
                    }}
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );

  // Grid View Component
  const GridView = () => (
    <div className="px-4 py-20 mt-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all-smooth">
      {/* Top Image Section */}
      <section className="w-full h-[70vh] flex justify-center items-center bg-white">
        <div className="w-full max-w-7xl h-full overflow-hidden">
          <img
            src= {image}
            alt="Bride and Groom Holding Hands"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            style={{ boxShadow: "none" }}
          />
        </div>
      </section>

      {/* Title Section With Background */}
      <div
        className="relative py-16 text-center mt-5 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #3A2F25, #b89433)",
        }}
      >
        {/* Decorative Elements */}
        <div className="absolute -top-10 -left-10 w-60 h-60 bg-[#b89433] opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#3A2F25] opacity-20 rounded-full blur-3xl animate-pulse"></div>

        <h1 className="relative z-10 text-4xl md:text-6xl font-allura text-white mb-4">
          Kind Words From Beautiful Clients
        </h1>
        <h2 className="relative z-10 text-2xl md:text-3xl font-allura text-white">
          Post-Event Testimonials
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-10 py-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            onClick={() => handleTestimonialClick(item, index)}
            className="w-full h-[520px] border-2 border-black rounded-2xl overflow-hidden shadow-xl bg-white flex flex-col transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
          >
            {/* Image */}
            <div className="relative group h-[55%]">
              <img
                src={uploadedImages[index] || item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between p-4">
              <div className="space-y-2">
                {/* Name */}
                <h3
                  className="text-4xl font-allura"
                  style={{ color: "#b89433" }}
                >
                  {item.name}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed font-serif line-clamp-4"
                  style={{ color: "#3A2F25" }}
                >
                  {item.description}
                </p>

                {/* Tagline */}
                <p
                  className="text-xs italic"
                  style={{ color: "#3A2F25" }}
                >
                  Cherished moments, captured forever.
                </p>
              </div>

              {/* Gradient Button */}
              <span
                className="text-sm font-semibold mt-3 self-start px-3 py-1 rounded-md bg-gradient-to-r from-[#c87c38] to-[#A07e7e] text-white inline-block transition duration-300 hover:opacity-90"
              >
                Read more
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Main render based on current view
  return (
    <div className="min-h-screen">
      {isDetailView ? <DetailView /> : <GridView />}
    </div>
  );
};

export default TestimonialsUnified;