/* eslint-disable react/prop-types */
export const TimerCount = () => {
  const className =
    "text-[18px] font-bold text-[#fff] bg-[#1e2a53] w-[30px] h-[45px] rounded-[4px] flex justify-center items-center";
  return (
    <div className="flex items-center gap-1">
      <span className={className}>0</span>
      <span className={className}>1</span>
      <span>:</span>
      <span className={className}>1</span>
      <span className={className}>9</span>
    </div>
  );
};

export const CardInput = ({ text, isBold, isActive }) => {
  return (
    <span
      className={`font-semibold lg:text-[24px] text-[18px] ${
        isActive
          ? "text-[#035fff]"
          : `${isBold ? "text-[#1e2a53]" : "text-[#8e96a390]"}`
      }`}
    >
      {text}
    </span>
  );
};
