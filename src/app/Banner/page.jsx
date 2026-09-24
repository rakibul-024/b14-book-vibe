import Image from 'next/image';

const Banner = () => {
  return (
    <section className="px-4 pb-10 md:px-8">
      <div className="mx-auto max-w-[1240px] rounded-[26px] bg-[#f1f1f1] px-6 py-8 md:px-10 md:py-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="flex flex-col items-start justify-center lg:pl-8">
            <h1 className="max-w-[620px] text-[2.1rem] font-normal leading-[0.9] tracking-[-0.08em]  md:text-[3.2rem] lg:text-[4.5rem] flex flex-col gap-4">
              <span className="block">Books to freshen up</span>
              <span className="block">your bookshelf</span>
            </h1>

            <button className="mt-10 rounded-[14px] bg-[#35d26d] px-8 py-4 text-[1.1rem] font-semibold text-white md:px-10 md:py-4">
              View The List
            </button>
          </div>

<div className="flex justify-center lg:justify-end">
  <Image
    src="/assets/banner-img.png"
    alt="Book cover"
    width={420}
    height={520}
    priority
    className="w-70 md:w-82.5 -rotate-2 transform-gpu transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:rotate-0 hover:scale-105 drop-shadow-xl"
  />
</div>
        </div>
      </div>
    </section>
  );
};

export default Banner;