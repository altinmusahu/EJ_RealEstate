import React, { useState, useEffect } from "react";
import EditUserModal from "./EditUserModal";



const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);
  const [newUser, setNewUser] = useState({
    Username: "",
    Email: "",
    Password: "",
    Role: "",
  });
 ;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/getusers");
        const data = await response.json();
        setUsers(data.users);
        setUsersLoaded(true); // Set usersLoaded to true after successful data fetch

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
      
    };
    fetchUsers();
  }, [showDeleteModal]);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleEditModalClose = () => {
    setSelectedUser(null);
    setShowEditModal(false);
  };

  const handleEditSubmit = async (editedUser) => {
    try {
      await fetch("http://localhost:4000/api/edituser", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          UserID: selectedUser.UserID,
          Username: editedUser.Username,
          Email: editedUser.Email,
          Role: editedUser.Role,
        }),
      });

      // Updates the users state with the edited data
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.UserID === editedUser.UserID ? { ...user, ...editedUser } : user
        )
      );

      handleEditModalClose();
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  const handleInputChange = (e) => {
    setEditedUser({
      ...editedUser,
      [e.target.name]: e.target.value,
    });

    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateSubmit = async () => {
    console.log(JSON.stringify(newUser));
    try {
      const response = await fetch("http://localhost:4000/api/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();

      if (data.success) {
        // Optionally, update the UI to reflect the new user
        setUsers((prevUsers) => [...prevUsers, data.user]);
        setNewUser({
          Username: "",
          Email: "",
          Password: "",
          Role: "",
        });
        alert("User added successfully!");
      } else {
        alert("Error adding user: " + data.message);
      }
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const handleDeleteClick = async (user) => {
    console.log("Deleting user with ID:", user.UserID);
    try {
      await fetch(`/api/deleteuser/${user.UserID}`, {
        method: "DELETE",
      });

      console.log("User deleted successfully");
      setUsers((prevUsers) => prevUsers.filter((u) => u.UserID !== user.UserID));
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleAddUserModalOpen = () => {
    setShowAddUserModal(true);
  };

  const handleAddUserModalClose = () => {
    setShowAddUserModal(false);
  };

  return (
    <div className="lg:flex min-h-screen justify-center h-full">
      {/* Sidebar */}
      <div className="lg:w-1/4 bg-gray-800 text-white p-4">
        <div className="text-2xl font-bold mb-4 tracking-widest">Dashboard</div> 
        <ul className="mt-14">
          <li>
            <button className="hover:text-gray-300 flex flex-row" onClick={() => window.location.href = '/'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-6 pr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Home
            </button>
            <div className="border-b border-gray-600"></div>
          </li>
          <li className="">
            <button className="hover:text-gray-300 flex flex-row mt-2" onClick={handleAddUserModalOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-6 pr-2 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
              Add a New User
            </button>
            <div className="border-b border-gray-600"></div>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="lg:w-3/4 mt-20">
        <div className="w-full">
          <div className="justify-start items-start gap-8 inline-flex mt-6">
            <div className="justify-center items-center flex p-2">
              <div className="px-4 justify-center items-center flex">
                <div className="px-2 justify-center items-center gap-2.5 flex">
                  <div className="text-black text-base font-bold font-['Open Sans'] leading-normal">
                    All Users
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[90%] h-96">
            <table className="w-[90%] bg-stone-50 rounded-lg mt-8 ml-10">
              <thead>
                <tr>
                  <th className="text-left px-4 py-2">ID</th>
                  <th className="text-left px-4 py-2">Username</th>
                  <th className="text-left px-4 py-2">Email</th>
                  <th className="text-left px-4 py-2">Role</th>
                  <th className="text-left px-9 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users
                  .slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage) //pagination
                  .map((user, index) => (
                    <tr key={user.UserID}>
                      <td className="border-t px-4 py-2">{user.UserID}</td>
                      <td className="border-t px-4 py-2">{user.Username}</td>
                      <td className="border-t px-4 py-2">{user.Email}</td>
                      <td className="border-t px-4 py-2">{user.Role}</td>
                      <td className="border-t px-4 py-2">
                        <div className="flex m-2">
                          <button
                            onClick={() => handleEditClick(user)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-7 mt-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>                           
                          </button>
                          <svg
                            onClick={() => {
                              console.log(user);
                              handleDeleteClick(user);
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-10 h-7 ml-4 mt-2 cursor-pointer"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>

            <div className="flex items-center mt-2 justify-center">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                type="button"
                className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-gray-700 hover:text-white px-3"
              >
                <div className="flex flex-row align-middle">
                  <svg
                    className="w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className="ml-2">Prev</p>
                </div>
              </button>

              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === Math.ceil(users.length / usersPerPage)}
                className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-gray-700 hover:text-white px-3"
              >
                <div className="flex flex-row align-middle">
                  <span className="mr-2">Next</span>
                  <svg
                    className="w-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>


          {showEditModal && (
            <EditUserModal
              editedUser={editedUser}
              handleInputChange={handleInputChange}
              handleEditSubmit={handleEditSubmit}
              handleEditModalClose={handleEditModalClose}
              user={selectedUser}
              onClose={handleEditModalClose}
              onSave={handleEditSubmit}
            />
          )}


            {showAddUserModal && (
            <div className="w-full fixed inset-0 overflow-y-auto">
              {/* Modal content */}
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                  
                </span>
                <div className="inline-grid  bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all align-middle">
                  
                  <h2 className="text-xl font-bold mb-2">Add New User</h2>
                  <label htmlFor="newUsername">Username:</label>
                  <input
                    type="text"
                    id="newUsername"
                    name="Username"
                    value={newUser.Username}
                    onChange={handleInputChange}
                    required
                    className="w-60 border border-gray-300 rounded-md px-3 py-2 mb-2"
                  />
                  
                  <label htmlFor="newEmail">Email:</label>
                  <input
                    type="email"
                    id="newEmail"
                    name="Email"
                    value={newUser.Email}
                    onChange={handleInputChange}
                    required
                    className="w-60 border border-gray-300 rounded-md px-3 py-2 mb-2"
                  />

                  <label htmlFor="newPassword">Password:</label>
                  <input
                    type="password"
                    id="newPassword"
                    name="Password"
                    value={newUser.Password}
                    onChange={handleInputChange}
                    required
                    className="w-60 border border-gray-300 rounded-md px-3 py-2 mb-2"
                  />

                  <label htmlFor="newRole">Role:</label>
                  <input
                    type="text"
                    id="newRole"
                    name="Role"
                    value={newUser.Role}
                    onChange={handleInputChange}
                    required
                    className="w-60 border border-gray-300 rounded-md px-3 py-2 mb-2"
                  />
                  
                  <button type="button" onClick={handleCreateSubmit} className="mt-3 ml-10 w-40 inline-flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                    Add User
                  </button>
                  <button
                    onClick={handleAddUserModalClose}
                    type="button"
                    className="mt-3 ml-10 w-40 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-500 hover:bg-red-900 text-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
