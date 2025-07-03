import NotificationCarousel from "./NotificationCarousel";
import BellIcon from "../../assets/Bell.svg";

const HeaderSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
      
      <div className="px-6 lg:px-4 lg:py-0 lg:my-0 p-2 m-2 lg:pt-4 lg:mt-6">
        <img src={BellIcon} alt="bell icon" className="w-8 h-8 mb-4" />
        
        <h4 className="font-inter lg:px-2 font-light text-[28px] lg:text-[31px] leading-[120%] text-white mb-4">
          Get notified when a highly correlated whale makes a move
        </h4>

        <p className="font-inter text-sm text-gray-400 leading-[120%]">
          Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.
        </p>
      </div>

      <div className="lg:pt-8">
        <NotificationCarousel />
      </div>
    </div>
  );
};

export default HeaderSection;
