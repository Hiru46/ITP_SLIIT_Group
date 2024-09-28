import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomerHeader from '../../../components/CustomerDashboard/CustomerHeader';
import CustomerSideBar from '../../../components/CustomerDashboard/CustomerSideBar';

function Profile() {
    const [userData, setUserData] = useState(null);
    const [customerDetails, setCustomerDetails] = useState({
        user: {
            FirstName: '',
            LastName: '',
            Address: '',
            MobileNumber: '',
            NIC: '',
            Email: '',
            Password: '',
        }
    });

    const [password, setPassword] = useState(''); // State for password

    // Fetch session data
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/Session');
                setUserData(response.data);
                console.log('User data fetched:', response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    // Fetch customer details when userData is available
    useEffect(() => {
        const fetchCustomerDetails = async () => {
            if (userData) {
                const URL = `http://localhost:5000/AdminCustomers/${userData.userId}`;
                try {
                    const response = await axios.get(URL);
                    setCustomerDetails(response.data); // Store the data directly
                    console.log('Customer details fetched:', response.data);
                } catch (error) {
                    console.error('Error fetching customer details:', error);
                }
            }
        };

        fetchCustomerDetails();
    }, [userData]); // Run when userData changes

    return (
        <div className="flex h-screen bg-gray-100">
            <CustomerSideBar />
            <div className="flex flex-col flex-grow">
                <CustomerHeader />
                <div className="p-8 flex-grow">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8">Profile</h1>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <div className="flex items-center mb-6">
                            <img
                                src="https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg"
                                alt="Profile"
                                className="w-24 h-24 rounded-full border-2 border-blue-500 mr-4"
                            />
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900 uppercase">
                                    {customerDetails.user.FirstName} {customerDetails.user.LastName}
                                </h2>
                                <span className="text-gray-500">User</span>
                            </div>
                            <div className="ml-auto flex space-x-4">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200">
                                    Edit
                                </button>
                                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-200">
                                    Delete Profile
                                </button>
                            </div>
                        </div>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                                    value={`${customerDetails.user.FirstName} ${customerDetails.user.LastName}`}
                                    disabled
                                />
                            </div>

                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    value={customerDetails.user.Email}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                                    disabled
                                />
                            </div>

                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-gray-700">Contact No</label>
                                <input
                                    type="text"
                                    value={`0${customerDetails.user.MobileNumber}`}

                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                                    disabled
                                />
                            </div>

                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-gray-700">NIC Number</label>
                                <input
                                    type="text"
                                    value={customerDetails.user.NIC}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                                    disabled
                                />
                            </div>

                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700">Address</label>
                                <textarea
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                                    rows="3"
                                    value={customerDetails.user.Address}
                                    disabled
                                />
                            </div>

                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    value={customerDetails.user.Password}
                                    disabled
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
