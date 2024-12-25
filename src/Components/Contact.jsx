import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-black overflow-hidden text-white p-6">
            <div className="flex-1 text-center md:text-left w-full md:w-1/2 p-4">
                <h2 className="text-4xl font-bold mb-2">Ready to Get Started?</h2>
                <p className="text-lg mb-6">Please fill out the form to book a demo with our team. We'll contact you as soon as we can.</p>
                <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                <div className="mb-8">
                    <div className="mb-6">
                        <p className="text-lg">Phone</p>
                        <p className="text-md">56778699878</p>
                    </div>
                    <div className="mb-6">
                        <p className="text-lg">Email</p>
                        <p className="text-md">fgvyug@gmail.com</p>
                    </div>
                    <div className="mb-6">
                        <p className="text-lg">Office</p>
                        <p className="text-md">gvhjbuuy</p>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
                <div className='flex-1 bg-white items-center justify-center text-black p-8 rounded-lg shadow-lg mt-8 md:mt-14 ml-0 md:ml-10'>
                    <div className="flex items-center mb-6">
                        <img src="https://via.placeholder.com/50" alt="Expert" className="relative rounded-full border-gold border-2" />
                        <img src="https://via.placeholder.com/50" alt="Expert" className="absolute rounded-full ml-10 border-gold border-2" />
                        <img src="https://via.placeholder.com/50" alt="Expert" className="absolute rounded-full ml-20 border-gold border-2" />
                        <h3 className="ml-28 text-xl font-bold">Book a demo with one of our experts</h3>
                    </div>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1" htmlFor="name">Name*</label>
                            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded p-2" placeholder="Name" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1" htmlFor="email">Business Email*</label>
                            <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded p-2" placeholder="Email" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1" htmlFor="phone">Phone*</label>
                            <div className="flex">
                                <select id="country" name="country" className="border-gray-300 rounded-l p-2 bg-gray-100">
                                    <option value="IN">India (+91)</option>
                                    <option value="US">USA (+1)</option>
                                    {/* Add more options as needed */}
                                </select>
                                <input type="tel" id="phone" name="phone" className="flex-grow border border-gray-300 rounded-r p-2" placeholder="+91" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">How many events do you host annually?*</label>
                            <div className="flex flex-wrap space-x-2">
                                <label className="flex items-center">
                                    <input type="radio" name="events" value="moreThan10" className="mr-2" /> More than 10
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="events" value="6to10" className="mr-2" /> 6 to 10
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="events" value="2to5" className="mr-2" /> 2 to 5
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="events" value="onlyOne" className="mr-2" /> Only one
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1" htmlFor="message">How can we help you?*</label>
                            <textarea id="message" name="message" className="w-full border border-gray-300 rounded p-2" rows="4" placeholder="To help us prepare for the call, please tell us more about your events and challenges."></textarea>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">By filling out this form and clicking submit you agree to our <a href="#" className="underline">terms and conditions</a> and <a href="#" className="underline">privacy policy</a>.</p>
                        <button type="submit" className="w-fit bg-black text-white p-2 px-7 rounded-3xl font-semibold hover:bg-gray-800">Book a Call</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
