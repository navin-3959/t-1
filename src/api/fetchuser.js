const API_URL = "https://jsonplaceholder.typicode.com/users";

const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export default fetchUsers;