
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import fetchUsers from "../src/api/fetchuser";

function App() {
  const [users, setusers] = useState([])
  useEffect(() => {
    const loadUsers = async () => {
      const userData = await fetchUsers();
      setusers(userData);
    };
    loadUsers();
  }, []);

  return (
    <>
      <Home users={users} />
    </>
  )
}

export default App
