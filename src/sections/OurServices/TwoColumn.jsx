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
            BRP I
          </h2> 
          <p className="font-nunito lg:text-lg ">
            Heavy-duty steel construction, maximum load capacity, and designed for long-lasting durability. Ideal for work, hauling, and off-road adventures
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row-reverse flex-col space-y-4 lg:space-y-0 mt-0 py-0">
        <div className="lg:w-1/2 w">
          <img src={mobdev} alt="" />
        </div>
        <div className="lg:w-1/2 flex-col flex justify-center px-4 mx-8 space-y-4">
          <h2 className="lg:text-4xl text-2xl  font-semibold font-nunito">
            BPR II
          </h2>
          <p className="font-nunito lg:text-lg ">
            Lightweight yet strong, modular design for tents, bikes, and cargo. Easy to install and reconfigure for any adventure.
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 mt-8 py-8">
        <div className="lg:w-1/2 w">
          <img src={digital} alt="" />
        </div>
        <div className="lg:w-1/2 flex-col flex justify-center px-4 mx-8 space-y-4">
          <h2 className="lg:text-4xl text-2xl  font-semibold font-nunito">
            BPR III
          </h2>
          <p className="font-nunito lg:text-lg ">
            Precision-engineered for exact vehicle fit. Offers customizable features and accessories for a personalized rack experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TwoColumn