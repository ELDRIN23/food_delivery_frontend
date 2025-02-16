import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form Data:', formData);
      setStatus('Message sent successfully!');
    } catch (error) {
      setStatus('Failed to send message. Try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 sm:p-10 max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-gray-400 text-center mb-4">
          Have a question? Fill out the form and we'll get back to you!
        </p>

        {status && <p className="text-center text-green-400 mb-4">{status}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
            className="w-full bg-gray-700 text-white border border-gray-600 p-2 rounded focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
            className="w-full bg-gray-700 text-white border border-gray-600 p-2 rounded focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            required
            className="w-full bg-gray-700 text-white border border-gray-600 p-2 rounded h-32 focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="font-semibold text-gray-300">📍 Our Location</p>
          <p>thrissur foodStreet, kerala, india</p>
          <p className="font-semibold text-gray-300 mt-2">📞 Contact</p>
          <p>+91 12345 67890</p>
          <p>support@foodieapp.com</p>

          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="text-blue-400 hover:underline">Facebook</a>
            <a href="#" className="text-blue-300 hover:underline">Twitter</a>
            <a href="#" className="text-pink-400 hover:underline">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
