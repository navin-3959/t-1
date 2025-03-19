import React from 'react';

const Contact = () => {
    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100 p-6'>
            <form
                action="https://formspree.io/f/xldjebqy"
                method='POST'
                className='bg-white shadow-lg rounded-lg p-8 max-w-lg w-full'
            >
                <h2 className='text-2xl font-bold text-center mb-6'>Contact Us</h2>
                <input
                    type="text"
                    placeholder='Enter your name..'
                    name='username'
                    required
                    className='w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input
                    type="email"
                    placeholder='Email'
                    name='email'
                    required
                    className='w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    required
                    className='w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    rows="4"
                ></textarea>
                <button
                    type='submit'
                    className='w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300'
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;