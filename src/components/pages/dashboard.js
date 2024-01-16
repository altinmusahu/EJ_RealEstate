import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [usersLoaded, setUsersLoaded] = useState(false);

  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/getusers");
        const data = await response.json();
        console.log("Response:", data); // Log the response
  
        // Log the structure of the first user in the array
        console.log("User structure:", data.users.length > 0 ? data.users[0] : null);
  
        setUsers(data.users);
        setUsersLoaded(true); // Set usersLoaded to true after successful data fetch

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    fetchUsers();
  }, []);
  
  useEffect(() => {
    console.log("Users state:", users);
  }, [users]);

  return (
    <div className="lg:flex justify-center">
      <div className="lg:relative lg-w-auto">
        <div className="w-full">
          <div className="text-black text-2xl font-normal font-['Open Sans'] leading-normal">
            Users
          </div>
          <div className="justify-start items-start gap-8 inline-flex mt-6">
            <div className="bg-blue-800 rounded-xl justify-center items-center flex p-2">
              <div className="px-4 justify-center items-center flex">
                <div className="px-2 justify-center items-center gap-2.5 flex">
                  <div className="text-white text-base font-bold font-['Open Sans'] leading-normal">
                    All Users
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto w-full h-96">
            <table className="min-w-full bg-stone-50 rounded-lg mt-8">
              <thead>
                <tr>
                  <th className="text-left px-4 py-2">Id</th>
                  <th className="text-left px-4 py-2">Username</th>
                  <th className="text-left px-4 py-2">Email</th>
                  <th className="text-left px-4 py-2">Password</th>
                  <th className="text-left px-4 py-2">Role</th>
                  
                </tr>
              </thead>
              <tbody>
              {users.map((user, index) => (
  <tr key={user.UserID}>
    <td className="border-t px-4 py-2">{user.UserID}</td>
    <td className="border-t px-4 py-2">{user.Username}</td>
    <td className="border-t px-4 py-2">{user.Email}</td>
    <td className="border-t px-4 py-2">{user.Password}</td>
    <td className="border-t px-4 py-2">{user.Role}</td>
  </tr>
))}

</tbody>


            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
