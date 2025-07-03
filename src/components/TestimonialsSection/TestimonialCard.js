  

export default function TestimonialCard({ name, role, quote }) {
    return (
      <div className="bg-white text-left rounded-xl shadow-md p-4 w-auto max-w-[420px] shrink-0">
        <p className="font-inter font-semibold text-black text-base whitespace-nowrap">
          {name}{' '}
          <span className="text-gray-400 font-normal text-sm">{role}</span>
        </p>
        <p className="text-black mt-3 text-sm leading-relaxed font-inter">
          “{quote}”
        </p>
      </div>
    );
  }
  
  