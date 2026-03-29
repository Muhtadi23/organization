import Image from 'next/image';
import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const page = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 bg-white rounded-xl shadow-sm">
            {/* Form */}
            <div className="bg-white10 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Subject</label>
                        <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Message</label>
                        <textarea rows={5} className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition w-full"
                    >
                        Send Message →
                    </button>
                </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold">Contact Information</h2>

                <div className="flex items-start gap-4">
                    <span className="text-blue-500 text-xl">📍</span>
                    <div>
                        <h4 className="font-semibold">Address</h4>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <span className="text-blue-500 text-xl">📞</span>
                    <div>
                        <h4 className="font-semibold">Phone</h4>
                        <p>+880 1322-69516</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <span className="text-blue-500 text-xl">📧</span>
                    <div>
                        <h4 className="font-semibold">Email</h4>
                        <p>codespheresagency@gmail.com</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <span className="text-blue-500 text-xl">🕒</span>
                    <div>
                        <h4 className="font-semibold">Business Hours</h4>
                        <p>Monday – Friday: 9:00 AM – 6:00 PM<br />Saturday – Sunday: Closed</p>
                    </div>
                </div>

                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9268441556285!2d90.41932571543197!3d23.75090369460809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a4c8740c6f%3A0x5de3516ad73cb97!2sGulshan%202%2C%20Dhaka%201213!5e0!3m2!1sen!2sbd!4v1617728930013!5m2!1sen!2sbd"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-md shadow"
                    />
                </div>
            </div>
        </section>
    );
};

export default page;
