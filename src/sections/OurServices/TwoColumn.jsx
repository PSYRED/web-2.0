import React from 'react'
import corpo from '../../assets/corpo.jpg'
import webdev from '../../assets/webdev.jpg?format=webp&quality=80'
import mobdev from '../../assets/mobiledev.jpg?format=webp&quality=80'
import digital from '../../assets/digitalmark.jpg?format=webp&quality=80'

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
            A fresh new look to bed covers and how they are used. The BRP comes with a
hidden storage that is unlocked by the touch of a key. The key used is an RFID
tag encoded with a unique, tamper‑resistant identifier that ensures only
authorized access. Its sealed design is built to withstand harsh weather and
rugged environments, keeping your cargo secure from theft and the elements.
The BRP is customizable for every person’s uniques need.

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
            Still in development process, the BRP 2 builds on the original design with
expanded storage capacity and the same secure, touch‑activated locking
system. The key used is an RFID tag encoded with a unique, tamper‑resistant
identifier that ensures only authorized access. Its sealed design is built to
withstand harsh weather and rugged environments, keeping your cargo
protected from theft and the elements. The BRP 2 also features raised side
railings for hanging tools and gear, along with an integrated third brake light to
enhance visibility and road safety. Sign up for the waiting list.
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
            Larger and more robust to weather conditions and heavy materials, BRP III has
the capability to store and hang tools at a larger extent. Available in 2027.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TwoColumn