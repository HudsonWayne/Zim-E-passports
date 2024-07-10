import Link from "next/link";
import Image from "next/image";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <div className='flex items-center'>
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src="/assets/images/logo.svg"
            alt='logo'
            width={202}
            height={39}
            className='object-contain'
          />
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <Link href='/'>Popular documents</Link>
        <Link href='/about'>Reference</Link>
        <Link href='/contact'>Blog</Link>
      </div>
    </nav>
  </header>
);

export default NavBar;