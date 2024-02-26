import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Style/Home.css'
const Home = ({ SetId }) => {
    const navigate = useNavigate()

    // State to store user details fetched from the API
    const [UserDetails, SetUserDetails] = useState([])

    // State to trigger re-rendering when a user is deleted
    const [DeleteData, SetDeleteData] = useState([])

    // Fetch user details from the API when the  component mounts or when DeleteData changes
    useEffect(() => {
        fetchData()
    }, [DeleteData])

    // Function to fetch user details from the API
    const fetchData = async () => {
        try {
            const response = await axios.get('https://65d7900c27d9a3bc1d7b508c.mockapi.io/api/Users');
            // Set the fetched user details to the state
            SetUserDetails(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleEdit = (id) => {
        // Set the ID of the user to edit in the parent component
        SetId(id);
        // Navigate to the edit page with the user ID as a parameter
        navigate(`/edit/${id}`);
    }

    // Function to handle deleting a user
    const handleDelete = async (id) => {
        try {
            // Make a DELETE request to delete the user from the API
            await axios.delete(`https://65d7900c27d9a3bc1d7b508c.mockapi.io/api/Users/${id}`);
            // Toggle the state to trigger re-rendering and fetch updated user details
            SetDeleteData(prevData => !prevData);
            // Display a success message using toast
            toast.success("Book Deleted Successfully");
        } catch (error) {
            console.log(error);
            // Display an error message using toast if deletion fails
            toast.error("Failed to delete user");
        }
    }
    // Function to navigate to the create page
    const handleCreate = () => {
        navigate('/create');
    }
    
    const handleDetails = (id)=>{
        SetId(id)
        navigate(`/bookdetails/${id}`)
    }

    return (
        <div className='container p-5 mt-1'>
            <h1 className='mb-5 text-center'> All Book Details</h1>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4">
                {/* Mapping through the UserDetails array to display user details */}
                {UserDetails.map((item, index) => {
                    return (
                        <div key={index} class="col">
                            <div class="card h-100" id="card-w">
                                <div class="card-body">
                                    <h2 class="card-title text-center mb-4">{item.book_title}</h2>
                                    <h5 class="card-text my-3">Author Name: {item.book_author}</h5>
                                    <h6 class="card-subtitle my-3 text-body-secondary mb-3">Published Year: {item.book_publish_year}</h6>
                                    <h5 class="card-text my-3">Publisher: {item.book_publisher}</h5>
                                    <p class="card-text my-3">ISBN-Number: {item.book_isbn}</p>
                                    {/* <p class="card-text">{BookDescription[index]}</p> */}
                                    {/* <a href="#" class="card-link">Card link</a> */}
                                    {/* <a href="#" class="card-link">Another link</a> */}
                                    <div class="d-flex justify-content-evenly mt-4">
                                        <div>
                                            <button className='btn btn-warning' onClick={() => { handleEdit(item.id) }}>Edit</button>
                                        </div>
                                        <div>
                                            <button className='btn btn-primary' onClick={() => { handleDetails(item.id) }}>Details</button>
                                        </div>
                                        <div>
                                            <button className='btn btn-danger' onClick={() => { handleDelete(item.id) }}>Delete</button>
                                        </div>
                                        {/* <button className='btn btn-success mt-4 w-100 back-btn' onClick={() => { navigate('/bookdetails') }}>Back</button> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                    )
                })}
            </div>
            <div class ="ms-1 mt-5"> 
               <h3>
                For Create New Book:
                  <button className='btn btn-success ms-2' onClick={() => { handleCreate() }}>Create</button>
                </h3> 
            </div>
        </div>
    );
};

export default Home;
