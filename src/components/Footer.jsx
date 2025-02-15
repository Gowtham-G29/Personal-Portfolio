import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#fe5617] text-white py-6">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center space-y-2">
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} Gowtham G-29. All rights reserved.
        </p>
        <p className="text-sm md:text-base font-medium">
          Made with ❤️ by{" "}
          <a href="#" className="underline hover:text-[#ffffff]">
            Gowtham G
          </a>
        </p>
        <div className="flex justify-center gap-4 mt-2">
        <a
            href="https://github.com/Gowtham-G29"
            className="hover:text-[#fe5617]"
          >
            <FaGithub size={29} />
          </a>
          <a
            href="https://www.linkedin.com/in/gowtham-g-b21b26282/"
            className="hover:text-[#fe5617]"
          >
            <FaLinkedin size={29} />
          </a>
          {/* <a
            href="https://www.instagram.com/immucoder/?__pwa=1"
            className="hover:text-[#fe5617]"
          >
            <FaInstagram size={29} />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
