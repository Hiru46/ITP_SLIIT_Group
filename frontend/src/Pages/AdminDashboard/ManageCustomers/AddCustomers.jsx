import React, { useState } from 'react';
import SideNavBar from '../../../components/Dashboards/SideNavBar';
import Header from '../../../components/Dashboards/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddCustomers() {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [input, setInput] = useState({
        FirstName: "",
        LastName: "",
        Address: "",
        MobileNumber: "",
        NIC: "",
        Email: "",
        Password: "",
    });

    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [e.target.name]: "",
        }));
    };

    const validate = () => {
        let validationErrors = {};
        if (!input.FirstName) validationErrors.FirstName = "First name is required";
        if (!input.LastName) validationErrors.LastName = "Last name is required";
        if (!input.NIC) validationErrors.NIC = "NIC is required";
        if (!input.Email) {
            validationErrors.Email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(input.Email)) {
            validationErrors.Email = "Email is invalid";
        }
        if (!input.MobileNumber) {
            validationErrors.MobileNumber = "Mobile number is required";
        } else if (input.MobileNumber.length !== 10) {
            validationErrors.MobileNumber = "Mobile number should be 10 digits long";
        }
        if (!input.Address) validationErrors.Address = "Address is required";
        if (!input.Password) {
            validationErrors.Password = "Password is required";
        } else if (input.Password.length < 6) {
            validationErrors.Password = "Password should be at least 6 characters long";
        }

        return validationErrors;
    };

    const checkEmailExists = async (email) => {
        try {
            const response = await axios.get(`http://localhost:5000/AdminCustomers/check-email?email=${email}`);
            return response.data.exists;
        } catch (error) {
            console.error("Error checking email:", error);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const emailExists = await checkEmailExists(input.Email);
        if (emailExists) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                Email: "This email is already registered",
            }));
            return;
        }

        await sendRequest();
        navigate("/cus_details");
    };

    const sendRequest = async () => {
        await axios.post("http://localhost:5000/AdminCustomers", {
            FirstName: String(input.FirstName),
            LastName: String(input.LastName),
            Address: String(input.Address),
            MobileNumber: Number(input.MobileNumber),
            NIC: String(input.NIC),
            Email: String(input.Email),
            Password: String(input.Password),
        });
    };
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavBar />

            <div className="flex-1 flex flex-col">
                <Header />

                <main className="flex-1 flex flex-col overflow-auto p-8">
                    <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-center p-4 rounded-md shadow-lg">
                        <h1 className="text-3xl text-white font-bold">Add a Customer</h1>
                    </div>

                    <div className="mt-5 bg-white border border-gray-300 rounded-lg shadow-lg p-6">
                        <button
                            onClick={() => navigate(-1)}
                            className="mb-8 py-2 px-11 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition duration-300"
                        >
                            Back
                        </button>

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                {['FirstName', 'LastName', 'NIC', 'MobileNumber', 'Email', 'Address'].map((field) => (
                                    <div key={field}>
                                        <label className="block text-gray-700 font-semibold">{field.replace(/([A-Z])/g, ' $1')}</label>
                                        <input
                                            type={field === 'Email' ? 'email' : 'text'}
                                            name={field}
                                            value={input[field]}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 p-3 mt-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                            placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                                        />
                                        {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                                    </div>
                                ))}
                                <div className="col-span-2">
                                    <label className="block text-gray-700 font-semibold">Password</label>
                                    <input
                                        type="password"
                                        name="Password"
                                        value={input.Password}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 p-3 mt-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                        placeholder="Enter password"
                                    />
                                    {errors.Password && <p className="text-red-500 text-sm mt-1">{errors.Password}</p>}
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button
                                    type="submit"
                                    className="mt-4 w-1/4   py-3 bg-blue-600 text-white font-bold rounded-sm hover:bg-blue-700 transition duration-300"
                                >
                                    Confirm
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default AddCustomers;
