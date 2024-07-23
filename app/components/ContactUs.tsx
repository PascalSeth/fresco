import React from 'react';

type Props = {};

export default function ContactUs({}: Props) {
  const contactDetails = {
    address: "123 Main Street, Anytown, USA",
    phone: "+1 (555) 123-4567",
    email: "info@gurupalace.com",
    openingHours: [
      { day: "Monday - Friday", hours: "10:00 AM - 10:00 PM" },
      { day: "Saturday", hours: "11:00 AM - 11:00 PM" },
      { day: "Sunday", hours: "11:00 AM - 9:00 PM" },
    ],
  };

  const image = { src: 'https://i.pinimg.com/736x/13/01/3a/13013af9e74460cb7e4842ba22d50c8b.jpg', alt: 'Restaurant Interior' };

  return (
    <div className="max-w-4xl overflow-hidden mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-black mb-8">Contact Us</h1>
      <div className="flex flex-col lg:flex-row items-center">
        {/* Contact Details Section */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-2"><strong>Address:</strong> {contactDetails.address}</p>
          <p className="mb-2"><strong>Phone:</strong> {contactDetails.phone}</p>
          <p className="mb-2"><strong>Email:</strong> <a href={`mailto:${contactDetails.email}`} className="text-blue-600">{contactDetails.email}</a></p>
          <h3 className="text-lg font-semibold mt-6 mb-2">Opening Hours</h3>
          <ul>
            {contactDetails.openingHours.map((hours, index) => (
              <li key={index} className="mb-1">
                <strong>{hours.day}:</strong> {hours.hours}
              </li>
            ))}
          </ul>
          <button className="bg-orange-500 mt-6 rounded-lg text-white font-semibold px-6 py-3 hover:bg-orange-600 transition-colors">
            Visit Us
          </button>
        </div>
        {/* Image Section */}
        <div className="w-80 h-80 rounded-[12px] overflow-hidden shadow-lg mt-8 lg:mt-0 lg:ml-8">
          <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
