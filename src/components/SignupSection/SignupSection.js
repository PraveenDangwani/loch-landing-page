
import { useState } from 'react';

export default function SignupSection() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setError('Please enter a valid email');
    } else {
      setError('');
      window.location.href = 'https://app.loch.one/welcome';
    }
  };

  return (
    <div className="w-full text-left lg:px-6 lg:py-8 mx-auto">
      <h2 className="font-inter font-medium text-[39px] leading-[120%] tracking-[0] text-[#B0B1B3] align-middle mb-6">
        Sign up for <br /> exclusive access.
      </h2>

        <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-4 rounded-lg border border-gray-300 placeholder-gray-400 text-base text-black bg-white 
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
            hover:border-gray-500 transition-all duration-200 shadow-sm mb-4"
        />

      <button
        onClick={handleSubmit}
        className="w-full bg-black text-white py-4 rounded-lg text-base font-medium hover:bg-gray-900 transition"
      >
        Get started
      </button>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <p className="text-sm text-gray-600 mt-6 font-inter font-semibold leading-[120%] tracking-tighter align-middle">
        You’ll receive an email with an invite link to join.
      </p>
    </div>
  );
}
