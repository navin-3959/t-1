import React from 'react'
import { FaCode, FaMobileAlt, FaCloud } from "react-icons/fa"
const Servicecards = () => {
    const services = [
        { icon: <FaCode size={40} />, title: "Web Development", description: "Build modern and responsive websites." },
        { icon: <FaMobileAlt size={40} />, title: "Mobile Apps", description: "Create seamless mobile experiences." },
        { icon: <FaCloud size={40} />, title: "Cloud Solutions", description: "Deploy scalable cloud applications." },
    ]
    return (
        <div className='py-16 bg-gray-100'>
            <div className='container mx-auto text-center'>
                <h2 className='text-4xl font-bold mb-8'>Our Services</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {services.map((service, index) => (
                        <div key={index} className='p-6 bg-white rounded-xl shadow-lg hover:scale-100 transition-transform duration-300'>
                            <div className="text-blue-500 mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Servicecards