import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style/Edit.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import * as yup from 'yup'
import {string,object }from 'yup'
import { useFormik } from 'formik';


const Edit = ({ id }) => {
    const navigate = useNavigate()

    // State to store edited data
    const [editBooks, SetEditBooks] = useState({
        book_title: '',
        book_author: '',
        book_publish_year: '',
        book_publisher: '',
        book_description: ''
    })

    // Fetch data from the API when the component mounts
    useEffect(() => {
        fetchG()
    }, [])

    // Function to fetch data from the API
    const fetchG = async () => {
        try {
            const response = await axios.get(`https://65d7900c27d9a3bc1d7b508c.mockapi.io/api/Users/${id}`);
            // Set the fetched data to the state
            SetEditBooks(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        formik.setValues(editBooks) //it defines storing the formik values setValues() =>this set values is default function
    }, [editBooks])

    const validationSchema = object().shape({
        book_title:string()
        .required('Book Title is Required'),//this errors stores in formik.errors.book_title
        book_author:string()
        .required('Book Author Name is Required'),
        book_publish_year:string()
        .matches(/(?:[0-9]{4})?[0-9]{4}/,"Invalid Year")
        .required('book_publish_year is Required'),
        book_publisher:string()
        .required('book_publisher is Required'),
        book_isbn:string()
        // .matches(` ^(([1-9]*)|(([1-9]*).([0-9]*)))$`,"ISBN Number is Invalid")
        .min(13,'ISBN-NUMBER must be atmost 13 digits ')
        .max(13,'ISBN-NUMBER must be atmost 13 digits ')
        .required('ISBN-NUMBER is Required'),
        book_description:string()
        .min(100,'Give a detail description')

    })

    const formik = useFormik({
        initialValues: {
            book_title: '',
            book_author: '',
            book_publish_year: '',
            book_publisher: '',
            book_isbn:'',
            book_description: ''

        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                // Make a PUT request to update the data in the API
                await axios.put(`https://65d7900c27d9a3bc1d7b508c.mockapi.io/api/Users/${id}`, values);
                // Display a success message using toast
                toast.success("Book Details Updated Successfully");
                // Redirect to the userDetails page after successful update
                navigate('/');
                console.log("done")
            } catch (error) {
                console.log(error);
                // Display an error message using toast if the update fails
                toast.error("Failed to update data");
            }
        }
    })
    
    
    return (
        <div class="form-container">
            <div class="form-box-container">
                <h2>Edit Book Details:</h2>
                <form onSubmit={formik.handleSubmit}>
                    {/* default function name in formik in react */}
                    <div class='my-3'>
                        {/* <label>User Name<span class="text-danger">*</span> */}
                        Book Title<span class="text-danger">*</span>
                            <input className='form-control' type='text' name='book_title' value={formik.values.book_title} onChange={formik.handleChange}></input>
                            {/* default function name in formik in react */}
                        {/* </label> */}
                        <div className='text-warning'>
                            {formik.errors.book_title}
                        </div>
                    </div>
                    <div class='mb-3'>
                        {/* <label>Age<span class="text-danger">*</span> */}
                             Book Author<span class="text-danger">*</span>
                            <input className='form-control' type='text' name='book_author' value={formik.values.book_author} onChange={formik.handleChange}></input>
                        {/* </label> */}
                        <div className='text-warning'>
                            {formik.errors.book_author}
                        </div>
                    </div>
                    <div class='mb-3'>
                        {/* <label>User Email<span class="text-danger">*</span> */}
                        Published Year<span class="text-danger">*</span>
                            <input className='form-control' type='text' name='book_publish_year' value={formik.values.book_publish_year} onChange={formik.handleChange}></input>
                        {/* </label> */}
                        <div className='text-warning'>
                            {formik.errors.book_publish_year}
                        </div>
                    </div>
                    <div class='mb-3'>
                        {/* <label>User Country<span class="text-danger">*</span> */}
                        Book Publisher<span class="text-danger">*</span>
                            <input className='form-control' type='text' name='book_publisher' value={formik.values.book_publisher} onChange={formik.handleChange}></input>
                        {/* </label> */}
                        <div className='text-warning'>
                            {formik.errors.book_publisher}
                        </div>
                    </div>
                    <div class='mb-3'>
                        {/* <label>ISBN Number<span class="text-danger">*</span> */}
                        ISBN Number<span class="text-danger">*</span>
                            <input className='form-control' type='tel' name='book_isbn' value={formik.values.book_isbn} onChange={formik.handleChange}></input>
                        {/* </label> */}
                        <div className='text-warning'>
                            { formik.errors.book_isbn}
                        </div>
                    </div>
                    <div class="form-floating">
                        {/* <label for="floatingTextarea2">Description</label> */}
                        Description<span class="text-danger">*</span>
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" name='book_description' value={formik.values.book_description} onChange={formik.handleChange} style={{ height: "100px" }}></textarea>
                        <div className='text-warning'>
                            {formik.errors.book_description}
                        </div>
                    </div>
                    <div class="d-flex justify-content-center" id="btn-div">
                        <button type="submit" class="btn btn-primary mb-2" style={{ fontSize: "large" }}>Update</button>
                    </div>
                </form>
                <div class = "text-center">                 
                  <button className='btn btn-success mt-4 w-100 back-btn' onClick={() => { navigate('/') }}>Back</button>
               </div>
            </div>
        </div>
    );
};

export default Edit;
