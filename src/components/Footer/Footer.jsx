import black from "../../assets/Black.png";

const Footer = () => {
  {
    /* footer black --> */
  }
  return (
    <div class="bg-black">
      {/* flex-container --> */}
      <div class="container flex flex-col-reverse justify-between px-6 py-10 pt-[10rem] mx-auto space-y-8 md:space-y-0">
        <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-row md:space-y-0 md:items-start">
          <div class="mx-auto my-6  text-center text-white md:hidden">
            Copyright &copy; All rights reserved.
          </div>
          {/* logo container --> */}
          <div>
            <img src={black} className="h-[12rem]" alt="" />
          </div>
          {/* social links container --> */}
          <div class="flex justify-center space-x-4">
            {/* link1 --> */}
            <a href="/">
              <img src="./img/icon-facebook.svg" class="h-8" alt="" />
            </a>
            {/* link2 --> */}
            <a href="/">
              <img src="./img/icon-youtube.svg" class="h-8" alt="" />
            </a>
            {/* link3 --> */}
            <a href="/">
              <img src="./img/icon-twitter.svg" class="h-8" alt="" />
            </a>
            {/* link4 --> */}
            <a href="/">
              <img src="./img/icon-pinterest.svg" class="h-8" alt="" />
            </a>
            {/* link1 --> */}
            <a href="/">
              <img src="./img/icon-instagram.svg" class="h-8" alt="" />
            </a>
          </div>
          {/* list container  */}
          <div class="flex justify-around space-x-32">
            <div class="flex flex-col space-y-3 text-white">
              <a href="" class="hover:underline text-white">
                About
              </a>
              <a href="#services" class="text-white">
                Services
              </a>
              <a href="/" class="hover:text-pink-100">
                Products
              </a>
              <a href="/" class="hover:text-pink-100">
                About
              </a>
            </div>
            <div class="flex flex-col space-y-3 text-white">
              <a href="/" class="hover:text-brightRed">
                Careers
              </a>
              <a href="/" class="hover:text-brightRed">
                Community
              </a>
              <a href="/" class="hover:text-brightRed">
                Privacy
              </a>
            </div>
          </div>

          <div class="flex flex-col justify-between">
            <form action="">
              <div class="flex space-x-3">
                <input
                  type="text"
                  class="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Update in your inbox"
                  id=""
                />

                <button class="bg-white px-6 py-2 text-black rounded-full hover:bg-brightRedLight focus:outline-none">
                  Go
                </button>
              </div>
            </form>
            <div class="hidden text-white md:block mt-6">
              Copyright &copy; 2022; All reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
