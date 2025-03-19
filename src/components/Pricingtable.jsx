import React from "react";

const pricingPlans = [
  { name: "Basic", price: "₹749/mo", features: ["1 Website", "10GB Storage", "Basic Support"] },
  { name: "Standard", price: "₹2,299/mo", features: ["5 Websites", "50GB Storage", "Priority Support"], highlight: true },
  { name: "Premium", price: "₹3,999/mo", features: ["Unlimited Websites", "200GB Storage", "24/7 Support"] },
];

const PricingTable = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-8">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 bg-white rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ${plan.highlight ? "border-2 border-blue-500" : ""}`}
          >
            <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-4 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-1">✅ {feature}</li>
              ))}
            </ul>
            <button className="mt-4 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg transition duration-300 hover:bg-blue-600">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingTable;
