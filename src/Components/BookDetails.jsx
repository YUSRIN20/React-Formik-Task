import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style/Bookdetails.css'
const BookDetails = ({ id }) => {
    const navigate = useNavigate()

    // State to store edited data
    const [editBooks, SetEditBooks] = useState({
        book_title: '',
        book_author: '',
        book_publish_year: '',
        book_publisher: ''
    })

    // Fetch data from the API when the component mounts
    useEffect(() => {
        fetchG()
    }, [])

    // Function to fetch data from the API
    const fetchG = async () => {
        try {
            // const response = await axios.get(`https://65d7900c27d9a3bc1d7b508c.mockapi.io/api/Users/${id}`);
            const response = await axios.get(`https://65d7900c27d9a3bc1d7b508c.mockapi.io/api/Users/${id}`)
            // Set the fetched data to the state
            SetEditBooks(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div class="container">
           <h1 className='text-center'>{editBooks.book_title}-Book Details</h1>
            <div class="card mt-5" id="large-card">
                <div class="card-body">
                    <div className='mt-3 mb-2'>
                    <h3 className='card-title'>{editBooks.book_title}</h3>
                    </div>
                    <blockquote class="blockquote mb-4">
                        <p>{editBooks.book_description}</p>
                    </blockquote>
                    <div className='mb-4'>
                        <h5 className='card-text'>Author: {editBooks.book_author}</h5>
                    </div>
                    <div className='my-3'>

                        <h6 className='text-secondary'>Published Year: {editBooks.book_publish_year}</h6>
                        <h6 className='text-secondary'>Publisher: {editBooks.book_publisher}</h6>
                    </div>
                    <div className='my-4'>

                        <p>ISBN: {editBooks.book_isbn}</p>
                    </div>
                </div>
            </div>
            <div class="text-center mt-3">
                <button className='btn btn-success mt-4 w-100 back-btn' onClick={() => { navigate('/') }}>Back</button>
            </div>
        </div>
    );
};

export default BookDetails;