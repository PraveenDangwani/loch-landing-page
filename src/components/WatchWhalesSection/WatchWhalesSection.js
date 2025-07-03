import cohorts from "../../assets/Cohorts.svg";
import EyeIcon from "../../assets/Eye.svg";

const WatchWhalesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-4 lg:mb-0 lg:grid-cols-2 w-full">
        <img src={cohorts} alt="cohorts" className="object-cover" />
      <div className="flex flex-col justify-start items-end text-right p-2 m-2 lg:m-0 lg:px-8 space-y-4">
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
