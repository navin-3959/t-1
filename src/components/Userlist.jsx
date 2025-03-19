import React, { useState, useEffect } from "react";
import debounce from "../utils/debounce";
import Trie from "../utils/trie";

const UserList = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [trie, setTrie] = useState(null);

  useEffect(() => {
    if (users.length === 0) return;

    const newTrie = new Trie();
    users.forEach((user) => newTrie.insert(user.name.toLowerCase()));
    setTrie(newTrie);
    setFilteredUsers(users);
  }, [users]);

  const handleSearch = debounce((value) => {
    if (!trie || !value.trim()) {
      setFilteredUsers(users);
      return;
    }

    const matchedNames = trie.searchPrefix(value.toLowerCase());
    const matchedUsers = users.filter((user) => matchedNames.includes(user.name.toLowerCase()));
    setFilteredUsers(matchedUsers);
  }, 300);

  return (
    <section className="py-16 text-center bg-gray-100">
      <h2 className="text-4xl font-bold mb-6">Our Users</h2>
      <input
        type="text"
        placeholder="Search users..."
        className="w-1/2 p-3 border border-gray-300 rounded-lg mb-6"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li
              key={user.id}
              className="p-4 bg-white shadow-md rounded-lg border hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">{user.phone}</p>
            </li>
          ))
        ) : (
          <p className="text-gray-500 col-span-3">No users found</p>
        )}
      </ul>
    </section>
  );
};

export default UserList;
