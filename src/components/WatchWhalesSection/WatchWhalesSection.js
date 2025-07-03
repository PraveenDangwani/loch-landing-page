import cohorts from "../../assets/Cohorts.svg";
import EyeIcon from "../../assets/Eye.svg";

const WatchWhalesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-4 lg:mb-0 lg:grid-cols-2 w-full">
        <img src={cohorts} alt="cohorts" className="object-cover order-2 md:order-1 md:ml-[-20px]" />
      <div className="order-1  md:pt-10 lg:pt-16 md:order-2 ml-6 md:ml-0 md:pr-16 flex flex-col justify-start items-start md:items-end lg:items-end text-left md:text-right lg:text-right p-2 m-2 lg:m-0 space-y-4">
        <img src={EyeIcon} alt="eye icon" className="w-8 h-8" />
        <h4 className="font-inter font-medium text-[16px] md:text-[20px] lg:text-[31px] leading-[120%] text-white">
          Watch what the whales are doing
        </h4>
        <p className="text-sm leading-[120%] text-gray-200 lg:text-gray-400 font-medium font-inter max-w-sm">
          All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.
        </p>
      </div>
    </div>
  );
};

export default WatchWhalesSection;
