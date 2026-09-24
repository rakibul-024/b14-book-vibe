import Link from "next/link";


const navItems = ["Home", "Listed Books", "Pages to Read"];

const Navbar = () => {

  const navItems = <>
  <Link   className= "rounded-[12px] border border-[#37d16d] bg-[#f2f2f2] px-4 py-2 text-[1.02rem] "
               href="/">Home</Link>
  <Link href="/listed-books">Listed Books</Link>
  <Link href="/pages-to-read">Pages to Read</Link>
  </>
  return (
    <header className="w-full px-4 pt-6 pb-4 mb-4">
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 bg-transparent px-0">
        <div className="flex items-center">
          <a href="#" className="text-[2.1rem] font-black leading-none text-[#111111]">
            Book Vibe
          </a>
        </div>

        <div className="hidden items-center gap-8 md:flex">
        {navItems}
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-xl bg-[#35d26d] px-6 py-3 text-[1.02rem] font-semibold text-white">
            Sign In
          </button>
          <button className="rounded-xl bg-[#53c8e8] px-6 py-3 text-[1.02rem] font-semibold text-white">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;