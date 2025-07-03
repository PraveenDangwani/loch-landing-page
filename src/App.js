import './App.css';
import HeaderSection from './components/HeaderSection/HeaderSection';
import SignupSection from './components/SignupSection/SignupSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import WatchWhalesSection from './components/WatchWhalesSection/WatchWhalesSection';

function App() {
  return (
    <div className="font-sans text-gray-900">
      <div className="flex flex-col lg:flex-row min-h-screen">

        <div className="w-full lg:w-[60%] bg-[radial-gradient(circle_at_bottom_left,_#1FA911CF_20%,_#2F15D0_40%,_black_100%)] p-4">
          <HeaderSection />
          <WatchWhalesSection/>
          <TestimonialsSection/>
        </div>

        <div className="flex w-full lg:w-[40%] items-center justify-center bg-white p-16">
          <SignupSection />
        </div>
      </div>
    </div>
  );
}

export default App;
