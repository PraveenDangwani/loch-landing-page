export default function NotificationCard({ icon, title, input, dropdown, subText, showSaveButton, selected, gradient }) {
    return (
        <div className={`rounded-xl p-4 shadow-sm w-full max-w-xs min-h-[250px] flex flex-col justify-between ${gradient ? 'bg-gradient-to-b from-white to-[#F9FBFF]' : 'bg-white'}`}>
        <div className="flex justify-between items-start mb-3">
          <img src={icon} alt="icon" className="w-6 h-6" />
          {selected && (
            <span className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
            </span>
            )}
          {showSaveButton && <span className="text-sm text-gray-500">Save</span>}
        </div>
  
        <p className="text-sm font-medium leading-snug mb-2">{title}</p>
  
        {dropdown && (
          <select disabled className="w-full text-sm border rounded p-2 bg-gray-50">
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
            className="w-full text-sm border rounded p-2 bg-gray-50"
          />
        )}
  
        {subText && <p className="text-sm mt-2">{subText}</p>}
      </div>
    );
  }
  