import React from 'react'
import corpo from '../../assets/corpo.jpg'
import webdev from '../../assets/webdev.jpg'
import mobdev from '../../assets/mobiledev.jpg'
import digital from '../../assets/digitalmark.jpg'

const TwoColumn = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 mt-8 py-8">
        <div className="lg:w-1/2 w">
          <img src={webdev} alt="" />
        </div>
        <div className="lg:w-1/2 flex-col flex justify-center px-4 mx-8 space-y-4">
          <h2 className="lg:text-4xl text-2xl  font-semibold font-nunito">
            Web Development
          </h2>
          <p className="font-nunito lg:text-lg ">
            At Karibu Tech, we specialize in creating innovative, user-centric
            web solutions that help businesses thrive in the digital world. Our
            comprehensive web development services are designed to meet the
            unique needs of each client, ensuring a seamless and impactful
            online presence
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row-reverse flex-col space-y-4 lg:space-y-0 mt-0 py-0">
        <div className="lg:w-1/2 w">
          <img src={mobdev} alt="" />
        </div>
        <div className="lg:w-1/2 flex-col flex justify-center px-4 mx-8 space-y-4">
          <h2 className="lg:text-4xl text-2xl  font-semibold font-nunito">
            Mobile-App development
          </h2>
          <p className="font-nunito lg:text-lg ">
            We also create powerful, user-friendly mobile applications that
            transform how businesses interact with their customers. Our mobile
            app development services are designed to meet the unique needs of
            your business, ensuring a seamless and engaging user experience.
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 mt-8 py-8">
        <div className="lg:w-1/2 w">
          <img src={digital} alt="" />
        </div>
        <div className="lg:w-1/2 flex-col flex justify-center px-4 mx-8 space-y-4">
          <h2 className="lg:text-4xl text-2xl  font-semibold font-nunito">
            Digital Marketing
          </h2>
          <p className="font-nunito lg:text-lg ">
            At Karibu Tech we understand that a successful digital strategy goes beyond just
            having a great website or mobile app. Our comprehensive digital
            marketing services are designed to help you connect with your target
            audience, drive engagement, and achieve your business goals
          </p>
        </div>
      </div>
    </div>
  );
}

export default TwoColumn