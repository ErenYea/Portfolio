import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiWhatsappLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";
import { GrDocumentPdf } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { FcDocument } from "react-icons/fc";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"mailto:alikhanhamza434@gmail.com"}
        target="_blank"
        className=" hover:text-accent transition-all duration-300"
      >
        <AiOutlineMail />
      </Link>

      <Link
        href={"https://wa.me/+923161108546"}
        target="_blank"
        className=" hover:text-accent transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
      {/* <Link
        href={""}
        className=" hover:text-accent transition-all duration-300"
      >
        <RiTwitterLine />
      </Link> */}
      <Link
        href={"https://github.com/ErenYea"}
        target="_blank"
        className=" hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={
          "https://drive.google.com/file/d/1j0K5CoAhB7i-rd5JT2fUzMkITTKh9Tiq/view?usp=sharing"
        }
        target="_blank"
        className=" hover:text-accent transition-all duration-300"
      >
        <FcDocument className="text-white" />
      </Link>
    </div>
  );
};

export default Socials;
