// images
import logo from "../assets/logo.svg";
import Button from "../reusableComponents/Button";
// images
import HeroImageMobile from "../assets/image-hero-landscape.png";
import HeroImageTablet from "../assets/image-hero-portrait.png";
import PatternCurved from "../assets/pattern-curved-line-1.svg";

const Main = () => {
  return (
    <article className='flex flex-col px-4 gap-16 pt-6 md:px-8 md:gap-20 xl:px-41.5 2xl:px-60 xl:pt-12.5 '>
      {/* navbar */}
      <nav className='flex justify-between items-center'>
        <div>
          <img
            src={logo}
            alt='suite company logo'
            className='w-full h-full block'
          />
        </div>
        <Button className='text-neutral-950 h-12 hover:bg-neutral-900 hover:text-neutral-0 focus:outline-3 focus:outline-neutral-900 focus:outline-offset-4 focus:bg-neutral-0 focus:text-neutral-900' />
      </nav>
      {/* hero content / image / fun facts */}
      <div className='flex flex-col gap-16 lg:flex-row'>
        {/* hero content / image */}
        <div className='flex flex-col gap-16 md:flex-row md:gap-0'>
          {/* hero content - title / paragraph / image */}
          <div className='flex flex-col gap-10 md:gap-12 md:w-158.75 md:justify-center xl:gap-16 xl:justify-end'>
            {/* title and paragraph / button*/}
            <div className='flex flex-col gap-6 md:gap-10 md:w-125 xl:w-156'>
              <h1 className='text-neutral-900 text-4xl leading-[110%] -tracking-[0.53px] md:text-[56px] md:-tracking:-0.78px] xl:text-7xl xl:-tracking-[1px] relative'>
                A{" "}
                <span className='font-bold'>
                  <span className='relative '>
                    super solution
                    <div className='w-[127.56px] h-4 absolute -top-5 right-2 md:w-71.75 md:h-8 md:-top-11 md:-right-27 xl:right-0'>
                      <img
                        src={PatternCurved}
                        className='block h-full w-full '
                        alt='black curved line'
                      />
                    </div>
                  </span>
                </span>{" "}
                for your
                <span className='font-bold'> business.</span>
              </h1>
              <p className='text-lg text-neutral-500 font-normal leading-[160%] tracking-[0.1px] md:w-87.5'>
                Our marketing and sales automations help you scale your outreach
                to get more leads for your company.
              </p>
            </div>
            <Button className='bg-neutral-900 text-neutral-0 h-15 w-58.75 hover:bg-[linear-gradient(135deg,#A060FF_0%,#CB30E3_49.21%,#FFA84E_100%)] hover:border-none focus:outline-3 focus:outline-neutral-900 focus:outline-offset-4 focus:bg-[linear-gradient(135deg,#000_0%,#000_49.21%,#000_100%)] focus:text-neutral-0' />
          </div>
          {/* image */}
          <div className='md:w-70 md:-ml-53 xl:w-87.5 xl:h-150 xl:-ml-41'>
            <picture>
              <source media='(min-width: 768px)' srcSet={HeroImageTablet} />
              <img
                src={HeroImageMobile}
                alt='vertical mobile phone  image'
                className='rounded-2xl block h-full w-full object-cover md:rounded-br-none md:rounded-tr-none  xl:rounded-2xl'
              />
            </picture>
          </div>
        </div>
        {/* fun facts */}
        <div className='flex flex-col gap-10 items-center md:flex-row md:justify-around lg:flex-col xl:justify-center'>
          <div className='text-center xl:text-start'>
            <p className='font-bold leading-[120%] text-5xl -tracking-[0.5px] text-neutral-900'>
              2K+
            </p>
            <p className='uppercase text-neutral-500 text-base leading-[150%] tracking-[2.5px]'>
              companies
            </p>
          </div>
          <div className='text-center xl:text-start'>
            <p className='font-bold leading-[120%] text-5xl -tracking-[0.5px]'>
              8
            </p>
            <p className='uppercase text-neutral-500 text-base leading-[150%] tracking-[2.5px]'>
              languages
            </p>
          </div>
          <div className='text-center xl:text-start'>
            <p className='font-bold leading-[120%] text-5xl -tracking-[0.5px]'>
              1.2M
            </p>
            <p className='uppercase text-neutral-500 text-base leading-[150%] tracking-[2.5px]'>
              leads
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
export default Main;
