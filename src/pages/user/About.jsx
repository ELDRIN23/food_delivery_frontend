import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Main Content */}
      <div className="flex-grow p-12 flex flex-col justify-center items-center text-center">
        <strong className="text-6xl font-bold text-gray-100 mb-8">
          About Us
        </strong>

        <p className="text-xl text-gray-300 max-w-5xl leading-relaxed">
          <strong className="text-gray-100">FOODIE Industries Pvt Ltd.</strong> was founded by 
          <strong> Eldrin Johnson</strong>, a visionary leader with an enduring passion for culinary innovation. 
          Since our inception in 2010, we have been committed to setting new benchmarks in the food industry. 
          Under Eldrin’s strategic leadership, FOODIE has grown from a humble startup to a globally recognized brand, 
          serving countless satisfied customers.
        </p>

        <br />

        <p className="text-xl text-gray-300 max-w-5xl leading-relaxed">
          At <strong className="text-gray-100">FOODIE Industries Pvt Ltd.</strong>, we adhere to the highest industry standards, 
          ensuring quality, safety, and compliance at every level. We are proud holders of an 
          <strong> FSSAI certification</strong> for food safety and hygiene, along with the 
          <strong> ISO 9001:2015 certification</strong>, which reflects our unwavering commitment to superior quality management. 
          Sustainability is at the heart of our operations, and we maintain eco-friendly practices while delivering premium culinary experiences.
        </p>

        <br />

        <p className="text-xl text-gray-300 max-w-5xl leading-relaxed">
          Our menu is a perfect blend of tradition and innovation, crafted by expert chefs dedicated to excellence. 
          From casual meals to fine dining, we take pride in offering delightful flavors, premium ingredients, 
          and exceptional service. Every dish we serve is backed by our trademark protection, ensuring authenticity 
          and originality in every bite.
        </p>

        <br />

        <p className="text-xl text-gray-300 max-w-5xl leading-relaxed">
          With three decades of experience, we continue to push the boundaries of the food industry. 
          Our mission is simple: to create memorable dining experiences while maintaining transparency, 
          legal compliance, and customer satisfaction.
        </p>

        <br />

        <strong className="text-4xl font-semibold text-gray-100 mt-8">
          "Foodie — Your Comfort, Our Pleasure."
        </strong>
      </div>
    </div>
  );
};

export default About;

