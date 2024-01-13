import React, { useState, useEffect } from "react";
import EditUserModal from "./EditUserModal";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/getusers");
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

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
          // Include the necessary data for the request
          UserID: selectedUser.UserID,
          Username: editedUser.Username,
          Email: editedUser.Email,
          Role: editedUser.Role,
        }),
      });

      // Update the users state with the edited data
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
  };
  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };
  
  
  return (
    <div className="lg:flex justify-center">
      <div className="lg:relative lg-w-auto">
        <div className="w-full">
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
                        <th className="text-left px-4 py-2">ID</th>
                        <th className="text-left px-4 py-2">Username</th>
                        <th className="text-left px-4 py-2">Email</th>
                        <th className="text-left px-4 py-2">Role</th>
                        <th className="text-left px-9 py-2">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.UserID}>
                                <td className="border-t px-4 py-2">{user.UserID}</td>
                                <td className="border-t px-4 py-2">{user.Username}</td>
                                <td className="border-t px-4 py-2">{user.Email}</td>
                                <td className="border-t px-4 py-2">{user.Role}</td>
                                <td className="border-t px-4 py-2">
                                    <div className="flex m-2">
                                    <button onClick={() => handleEditClick(user)} className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Edit</button>
                                    <svg onClick={() => handleDeleteClick(user)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-4 mt-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                    </div>
                                </td>
                            </tr>
                            ))}
                    </tbody>
                </table>
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
