const Button = ({ className }) => {
  return (
    <button
      type='button'
      className={`border border-neutral-900 rounded-md text-base font-bold leading-[150%] -tracking-[0.16px] px-4 cursor-pointer hover:duration-500 hover:ease-in-out  ${className}`}
    >
      Request Beta Access
    </button>
  );
};
export default Button;
