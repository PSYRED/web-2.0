 
import logo from '../../assets/logo.png'
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export function Footer2() {
  return (
    <Footer container className="  bg-purple-100 mt-16 ">
      <div className="w-full  ">
        <div className="grid w-full place-items-start   justify-center sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="w-20 mb-4  ">
            <img src={logo} className="rounded-full" alt="" />
          </div>
          <div className="grid      font-nunito   gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div className="text-black">
              <Footer.Title
                className="text-black text-lg font-nunito "
                title="Our Company"
              />
              <Footer.LinkGroup col>
                <Footer.Link href="/" className="text-lg">
                  Home
                </Footer.Link>
                <Footer.Link href="about" className="text-lg">
                  About Us
                </Footer.Link>
                <Footer.Link href="services" className="text-lg">
                  Our Services
                </Footer.Link>
                <Footer.Link href="portfolio" className="text-lg">
                  Portfolio
                </Footer.Link>
                <Footer.Link href="contact" className="text-lg">
                  Contact us
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-black text-lg" title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-lg">
                  LinkedIn
                </Footer.Link>
                <Footer.Link href="#" className="text-lg">
                  Instagram
                </Footer.Link>
                <Footer.Link href="#" className="text-lg">
                  X
                </Footer.Link>
                <Footer.Link href="#" className="text-lg">
                  Facebook
                </Footer.Link>
                <Footer.Link href="#" className="text-lg">
                  Whatsapp
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-black text-lg" title="Get in touch" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-lg">
                  +250784824525
                </Footer.Link>
                <Footer.Link href="#" className="text-lg">
                  Rwanda,Kigali City
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex  flex flex-col items-center sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="KaribuTech™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
