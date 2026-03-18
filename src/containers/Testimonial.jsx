// images
import JeremySmall from "../assets/image-jeremy-small.png";
import JeremyLarge from "../assets/image-jeremy-large.png";
import PatternCurved from "../assets/pattern-curved-line-2.svg";
import PatternBlur from "../assets/pattern-blur.svg";

const TestimonialContainer = () => {
  return (
    <div className='md:px-8 xl:px-41.5 2xl:px-60 z-2'>
      <article className='bg-neutral-900 rounded-2xl mt-60 pb-10 flex flex-col gap-6 z-1 sm:px-12 lg:flex-row lg:h-133.75 lg:justify-center lg:mt-40'>
        {/* image and path container */}
        <div className='flex flex-col items-center gap-6 relative lg:flex-row'>
          {/* jeremy image container */}
          <div className='w-63 h-[412.91px] -mt-44 z-3 lg:h-[589.56px] lg:w-[359.81px] lg:-mt-4'>
            <picture>
              <source media='(min-width: 768px)' srcSet={JeremyLarge} />
              <img
                src={JeremySmall}
                alt='Jeremy image'
                className='w-full h-full block object-cover overflow-visible'
              />
            </picture>
          </div>
          <div className='w-100 h-100 absolute -bottom-5 z-2 lg:w-150 lg:h-150 lg:-right-10 lg:top-10'>
            <img
              src={PatternBlur}
              alt=''
              className='w-full h-full block rounded-full'
              aria-hidden='true'
            />
          </div>
          {/* path container */}
          <div className='w-16 lg:-mt-35'>
            <img
              src={PatternCurved}
              alt=''
              className='w-full h-full'
              aria-hidden='true'
            />
          </div>
        </div>
        {/* testimonial content */}
        <div className='flex flex-col gap-6 text-center justify-center lg:text-start'>
          {/* testimonial text container */}
          <div className='flex flex-col gap-8'>
            <h2 className='text-neutral-0 text-5xl leading-[120%] -tracking-[0.5px]'>
              It just <span className='font-bold'>works.</span>
            </h2>
            <p className='text-neutral-200 text-xl leading-[160%] tracking-[0.11px] font-normal lg:w-87.5'>
              "I really like how it is an all-in-one solution that handle many
              of the tasks that you would normally need separate tools to do the
              same job. This thing is a miracle worker."
            </p>
          </div>
          {/* testimonial author container */}
          <div className='flex flex-col'>
            <h3 className='text-neutral-0 text-lg font-bold leading-[160%] uppercase -tracking-[0.18px]'>
              Jeremy Robinson
            </h3>
            <p className='text-neutral-200 text-base font-normal leading-[150%] tracking-[2.5px]'>
              CMO, FYLO
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
export default TestimonialContainer;
