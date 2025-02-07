import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import { RiVercelLine } from "react-icons/ri";

const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
      <h1 className="mx-2 w-10 flex space-x-0.1 text-1xl font-bold">
    {["A",  "J","_____"].map((char, index) => (
      <span
        key={index}
        className={`inline-block ${
          char === " " ? "w-3" : ""
        } animate-updown`}
        style={{ animationDelay: `${index * 1}s` }}
      >
        {char}
      </span>
    ))}
  </h1>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/anil-janjal-b23697261/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="cursor-pointer hover:text-violet-700 transition" />
        </a>
        <a href="https://github.com/AnilJanjal" target="_blank" rel="noopener noreferrer">
          <FaGithub className="cursor-pointer hover:text-violet-700 transition" />
        </a>
        <a href="https://vercel.com/aniljanjals-projects" target="_blank" rel="noopener noreferrer">
          <RiVercelLine className="cursor-pointer hover:text-violet-700 transition" />
        </a>
      </div>

    </nav>
  
  };
  
  export default Navbar;
  