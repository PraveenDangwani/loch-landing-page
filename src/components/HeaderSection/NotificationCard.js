export default function NotificationCard({ icon, title, input, dropdown, subText, showSaveButton, selected, gradient , graph, clock }) {
    return (
        <div className={`rounded-xl p-4 shadow-sm w-full max-w-48 min-h-36 flex flex-col ${!showSaveButton ? "justify-between" : ""}  ${gradient ? 'bg-gradient-to-b from-white to-[#fbfdffcf]' : 'bg-white'}`}>
        <div className="flex justify-between items-start mb-3">
          <img src={icon} alt="icon" className="w-6 h-6" />
          {selected && (
            <span className="w-3 h-3 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white text-[7px] font-bold">✓</span>
            </span>
            )}
          {showSaveButton && <span className="text-xs text-black">Save</span>}
        </div>
            <div>
              <p className={` font-medium leading-snug ${graph ? 'mt-10' : clock ? 'mt-6' : ''}  ${showSaveButton? 'text-sm' : 'text-[11.2px]'}`} >{title}</p>
        
              {dropdown && (
                <select disabled className={`w-[45%] font-inter font-medium text-[9.1px] rounded leading-[120%] tracking-[0px] text-left align-middle border bg-gray-50 ${graph ? "p-0 mt-3" : clock? "p-1 mt-1" : ""}`}>
                  {dropdown.options.map((opt, i) => (
                    <option key={i} selected={opt === dropdown.value}>{opt}</option>
                  ))}
                </select>
              )}
        
              {input && (
                <input
                  disabled
                  type={input.type}
                  placeholder={input.placeholder}
                  className="w-full text-xs border rounded p-1 mt-1 bg-gray-50"
                />
              )}
        
              {subText && <p className="text-[11.2px] mt-1">{subText}</p>}
            </div>
      </div>
    );
  }
  