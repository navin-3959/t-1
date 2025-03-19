import React from 'react';
import HeroSection from "../components/Herosection";
import ServiceCards from "../components/Servicecards";
import PricingTable from "../components/Pricingtable";
import Contact from "../components/Contact";
import UserList from '../components/Userlist';
const Home = ({users}) => {
  return (
    <div className="w-full">
      <HeroSection />
      <ServiceCards />
      <PricingTable />
      <UserList users={users} />
      <Contact />
    </div>
  );
};

export default Home;
