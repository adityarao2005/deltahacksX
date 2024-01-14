import React from "react";


export default function AboutPage() {
  return (
    <div className="flex-1 grid grid-cols-2 gap-4 bg-[url('/quake-2.jpg')]">
      <div className="animate-slideInLeft">
        <div className="bg-cover mt-3 h-80 rounded-2xl bg-[url('/earthquake2.jpg')] mb-4 p-3"></div>
        <h1 className="text-4xl font-bold text-gray-100 mb-4 p-3">
          Solution
        </h1>
        <p className="text-gray-100 p-3">
          QuakeGuard relies on Earthquake API's, Pandas analysis and a machine
          learning model to accurately tell a user what is the chances that an
          earthquake will occur in their area, its strength and the expected
          date it will happen. Why are we different?
        </p>
        <div className="animate-slideInLeft">
          <h1 className="text-3xl font-bold text-gray-100 p-2">
            AI and Machine Learning Powered
          </h1>
          <p className="text-gray-100 p-2">
            Uses AI and Machine Learning predicting earthquakes with higher
            accuracy, enabling timely and informed decisions by authorities and
            communities!
          </p>
        </div>
        <div className="animate-slideInLeft">
          <h1 className="text-3xl font-bold text-gray-100 p-2">
            Global Community & Support
          </h1>
          <p className="text-gray-100 p-2">
            Unlike traditional models, QuakeGuard involves an active amount of
            users to allocatively rationing resources to high-risk areas,
            helping the ones who most need it!
          </p>
          <h1 className="text-3xl font-bold text-gray-100 p-2">
            Holistic Analysis
          </h1>
          <p className="text-gray-100 p-2">
            Our analysis considers latitude and longitude, depth of earthquake,
            date and its Richter rating from a diverse dataset providing more
            accurate outputs and more comprehensive summary results!
          </p>
        </div>
      </div>
      <div className="animate-slideInRight">
        <div className="flex-1 p-4">
          <div className="pb-4 p-4">
            <h1 className="text-3xl font-bold text-gray-100 py-4">
              The Product
            </h1>
            <p className="text-gray-100 py-4 leading-relaxed">
              As rising condo and urban living are increasing, dangers due to
              earthquakes continue to rise. As such, the need for a proactive and
              data-driven earthquake risk prediction has never been more
              critical. Our initiative, QuakeGuard, harnesses ML capabilities to
              revolutionize earthquake risk assessment. QuakeGuard is committed in
              providing information to empowering authorities, communities, and
              first responders with actionable insights for resource allocation
              and prevention by geographical, longitudinal, and latitudinal
              analysis.
            </p>
          </div>
          <div className="pb-4 p-4 leading-relaxed">
            <h1 className="text-3xl font-bold text-gray-100">The Inspiration</h1>
            <p className="text-gray-100 py-4 leading-relaxed">
              Our inspiration for this project rose from the devastating
              earthquakes that struck Turkey recently. As environmental
              enthusiasts, we knew we wanted to help. Our goal was to make
              something new and exciting that combined elements we were familiar
              with such as Node.js, React, and TailwindCSS, as well as elements we
              wanted to learn more about such as ML. And so began our journey to
              create an extraordinary hack that not only addresses a current
              problem but also paves the way for a brighter future.
            </p>
          </div>
          <div className="bg-cover h-80 rounded-2xl bg-[url('/mockup3.jpg')] p-3"></div>
        </div>
      </div>
    </div>
  );
}