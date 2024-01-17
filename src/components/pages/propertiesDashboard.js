import React, { useState, useEffect } from "react";
import EditUserModal from "./EditUserModal";
import { NavLink } from 'react-router-dom';
import { logout } from "../../store/user-slice";
import { useDispatch, useSelector } from "react-redux";
import { MdLogout } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { deleteUsers } from "../../store/admin-slice";
import { fetchProperties } from "../../store/properties-slice"; // Import your action

const PropertiesDashboard = () => {

  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties.properties);
  
  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  const logoutHandler = () => {
    dispatch(logout());
  };


  const [prop, setProperties] = useState([]);
  const [selectedProp, setSelectedProp] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedProp, setEditedProp] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddPropModal, setShowAddPropModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [propperPage] = useState(4);


  const [newProp, setNewProp] = useState({
    PropertyName: "",
    PropertyTypeID: "",
    Price: "",
    Description: "",
    Address: "",
    City: "",
    Bedrooms: "",
    Bathrooms: "",
    SquareFeet: "",
    isAvailable: "",
    Image: "",
  });
 ;

 

  const handleEditClick = (prop) => {
    setSelectedProp(prop);
    setShowEditModal(true);
    setEditedProp({ ...prop });

  };

  const handleEditModalClose = () => {
    setSelectedProp(null);
    setShowEditModal(false);
    setEditedProp({});

  };

  const handleEditSubmit = async (editedProp) => {
    try {
      await fetch("http://localhost:4000/api/editproperty", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            PropertyID: selectedProp.PropertyID,
            PropertyName: editedProp.PropertyName,
            PropertyTypeID: editedProp.PropertyTypeID,
            Price: editedProp.Price,
            Description: editedProp.Description,
            Address: editedProp.Address,
            City: editedProp.City,
            Bedrooms: editedProp.Bedrooms,
            Bathrooms: editedProp.Bathrooms,
            SquareFeet: editedProp.SquareFeet,
            isAvailable: editedProp.isAvailable,
            Image: editedProp.Image,
        }),
      });
  
      // Updates the properties state with the edited data
      setProperties((prevProperties) =>
        prevProperties.map((property) =>
          property.PropertyID === editedProp.PropertyID
            ? { ...property, ...editedProp }
            : property
        )
      );
  
      handleEditModalClose();
    } catch (error) {
      console.error("Error editing property:", error);
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
  
    // Check if the input is a numeric field
    const isNumeric = ['Price', 'Bedrooms', 'Bathrooms', 'SquareFeet'].includes(name);
  
    setEditedProp((prevProp) => ({
      ...prevProp,
      [name]: isNumeric ? parseFloat(value) || 0 : value,
    }));
  
    setNewProp((prevNewProp) => ({
      ...prevNewProp,
      [name]: isNumeric ? parseFloat(value) || 0 : type === 'file' ? files[0] : value,
    }));
  };
  
  

  const handleCreateSubmit = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/addproperty", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedProp),
      });
  
      // Update the UI with the edited property
      setProperties((prevProperties) =>
        prevProperties.map((property) =>
          property.PropertyID === editedProp.PropertyID
            ? { ...property, ...editedProp }
            : property
        )
      );

      handleEditModalClose();
    } catch (error) {
      console.error("Error editing property:", error);
    }
  };
  

  

  const handleAddUserModalOpen = () => {
    setShowAddPropModal(true);
  };

  const handleAddUserModalClose = () => {
    setShowAddPropModal(false);
  };

  const handleImageChange = (e) => {
    setNewProp({
      ...newProp,
      Image: e.target.files[0], // Use e.target.files to get the selected file
    });
  };

  return (
    <div className="lg:flex min-h-screen justify-center h-full">
      {/* Sidebar */}
      <div className="lg:w-1/4 bg-gray-800 text-white p-4">
        <div className="text-2xl font-bold mb-4 tracking-widest">Dashboard</div>
        <ul className="mt-14">
          <NavLink to="/dashboard">
            <li className="p-4">
              <button className="hover:text-gray-300 flex flex-row">
              <FaUsers size={25} className="mr-2"/>
              Users
              </button>
              <div className="border-b border-gray-600"></div>
            </li>
          </NavLink>
          <NavLink to="/properties">
            <li className="p-4">
              <button className="hover:text-gray-300 flex flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-6 pr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              Properties
              </button>
              <div className="border-b border-gray-600"></div>
            </li>
          </NavLink>
          <NavLink to="/ptypesdashboard" >
            <li className="p-4">
              <button className="hover:text-gray-300 flex flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-6 pr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              Properties Type
              </button>
              <div className="border-b border-gray-600"></div>
            </li>
          </NavLink>
          <li className="p-4">
            <button className="hover:text-gray-300 flex flex-row mt-2" onClick={handleAddUserModalOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-6 pr-2 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
              Add a New Property
            </button>
            <div className="border-b border-gray-600"></div>
          </li>
          <li className="p-4 mt-16 flex items-center">
          <MdLogout size={25}/>
          <NavLink to='/home'>
              <button onClick={logoutHandler} className="rounded justify-start items-center font-semibold py-2 rounded sm:mx-4">
                Log out
              </button>
            </NavLink>
            <div className="border-b border-gray-600"></div>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="lg:w-3/4">
        <div className="w-full">
          <div className="justify-start items-start gap-8 inline-flex mt-6">
            <div className="justify-center items-center flex p-2">
              <div className="px-4 justify-center items-center flex">
                <div className="px-2 justify-center items-center gap-2.5 flex">
                  <div className="text-black text-base font-bold font-['Open Sans'] leading-normal">
                    All Properties
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <table className="w-[90%] bg-stone-50 rounded-lg mt-8 ml-10">
              <thead>
                <tr>
                  <th className="text-left px-4 py-2">ID</th>
                  <th className="text-left px-4 py-2">Property Name</th>
                  <th className="text-left px-4 py-2">Price</th>
                  <th className="text-left px-9 py-2">Description</th>
                  <th className="text-left px-4 py-2">City</th>
                  <th className="text-left px-9 py-2">SquareFeet</th>
                </tr>
              </thead>
              <tbody>
                {properties
                  .slice((currentPage - 1) * propperPage, currentPage * propperPage) //pagination
                  .map((properties, index) => (
                    <tr key={properties.PropertyID}>
                      <td className="border-t px-4 py-2">{properties.PropertyID}</td>
                      <td className="border-t px-4 py-2">{properties.PropertyName}</td>
                      <td className="border-t px-4 py-2">{properties.Price}</td>
                      <td className="border-t px-4 py-2">{properties.Description}</td>
                      <td className="border-t px-4 py-2">{properties.City}</td>
                      <td className="border-t px-4 py-2">{properties.SquareFeet}</td>

                      <td className="border-t px-4 py-2">
                        <div className="flex m-2">
                          <button
                            onClick={() => handleEditClick(prop)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-7 mt-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>                           
                          </button>
                          <svg
                            // onClick={() => {
                            //   dispatch(deleteUsers(user.UserID));
                            //   window.location.reload();
                            // }}
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
                disabled={currentPage === Math.ceil(prop.length / propperPage)}
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
              editedProp={editedProp}
              handleInputChange={handleInputChange}
              handleEditSubmit={handleEditSubmit}
              handleEditModalClose={handleEditModalClose}
              prop={selectedProp}
              onClose={handleEditModalClose}
              onSave={handleEditSubmit}
            />
          )}


            {showAddPropModal && (
            <div className="w-full fixed inset-0 overflow-y-auto">
              {/* Modal content */}
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                  
                </span>
                <div className="inline-grid  bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all align-middle">
                  
                  <h2 className="text-xl font-bold mb-2">Add New Property</h2>
                  <label htmlFor="newProperty">Property Name:</label>
                  <input
                    type="text"
                    id="newProperty"
                    name="PropertyName"
                    value={newProp.PropertyName}
                    onChange={handleInputChange}
                    required
                    className="w-60 border border-gray-300 rounded-md px-3 py-2 mb-2"
                  />
                  
                  <label htmlFor="newPropertyTypeID">PropertyTypeID:</label>
                  <input
                    type="text"
                    id="newPropertyTypeID"
                    name="PropertyTypeID"
                    value={newProp.PropertyTypeID}
                    onChange={handleInputChange}
                    required
                    className="w-60 border border-gray-300 rounded-md px-3 py-2 mb-2"
                  />

                  <label htmlFor="newPrice">Price:</label>
                  <input
                    type="text"
                    id="newPrice"
                    name="Price"
                    value={newProp.Price}
                    onChange={handleInputChange}
                    required
                    className="w-60 border border-gray-300 rounded-md px-3 py-2 mb-2"
                  />

                  <label htmlFor="newDescription">Description:</label>
                  <input
                    type="text"
                    id="newDescription"
                    name="Description"
                    value={newProp.Description}
                    onChange={handleInputChange}
                    required
                    className="w-60 border border-gray-300 rounded-md px-3 py-2 mb-2"
                  />
                  
                  <label htmlFor="newAddress">Address:</label>
                  <input
                    type="text"
                    id="newAddress"
                    name="Address"
                    value={newProp.Address}
                    onChange={handleInputChange}
                    required
                    className="w-60 border border-gray-300 rounded-md px-3 py-2 mb-2"
                  />

                  <label htmlFor="newCity">City:</label>
                  <input
                    type="text"
                    id="newCity"
                    name="City"
                    value={newProp.City}
                    onChange={handleInputChange}
                    required
                    className="w-60 border border-gray-300 rounded-md px-3 py-2 mb-2"
                  />

                  <label htmlFor="newBedrooms">Bedrooms:</label>
                  <input
                    type="text"
                    id="newBedrooms"
                    name="Bedrooms"
                    value={newProp.Bedrooms}
                    onChange={handleInputChange}
                    required
                    className="w-60 border border-gray-300 rounded-md px-3 py-2 mb-2"
                  />
                  <label htmlFor="newBathrooms">Bathrooms:</label>
                  <input
                    type="text"
                    id="newBathrooms"
                    name="Bathrooms"
                    value={newProp.Bathrooms}
                    onChange={handleInputChange}
                    required
                    className="w-60 border border-gray-300 rounded-md px-3 py-2 mb-2"
                  />

                  <label htmlFor="newSquareFeet">SquareFeet:</label>
                  <input
                    type="text"
                    id="newSquareFeet"
                    name="SquareFeet"
                    value={newProp.SquareFeet}
                    onChange={handleInputChange}
                    required
                    className="w-60 border border-gray-300 rounded-md px-3 py-2 mb-2"
                  />

                  <label htmlFor="newDescription">isAvailable:</label>
                  <input
                    type="text"
                    id="newDescription"
                    name="Description"
                    value={1}
                    onChange={handleInputChange}
                    required
                    className="w-60 border border-gray-300 rounded-md px-3 py-2 mb-2"
                  />

                  <label htmlFor="newImage">Image:</label>
                  <input
                    type="file"
                    id="newImage"
                    name="Image"
                    onChange={handleImageChange}
                    required
                    className="w-60 border border-gray-300 rounded-md px-3 py-2 mb-2"
                  />

                  <button type="button" onClick={handleCreateSubmit} className="mt-3 ml-10 w-40 inline-flex justify-center items-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
                    Add Property
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

export default PropertiesDashboard;
