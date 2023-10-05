import Image from "next/Image";

import Link from "next/link";

import Socials from "../components/Socials";
const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center md:lg:xl:gap-y-6  md:lg:xl:py-8">
          <Link href={"/"}>
            <Image
              src={"/logom.png"}
              width={220}
              height={48}
              alt=""
              priority={true}
              className=""
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
