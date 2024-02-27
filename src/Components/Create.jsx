import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {string,object} from 'yup'
import { useFormik } from 'formik';

const Create = () => {
    const navigate = useNavigate()
    const [CreateData, SetCreateData] = useState({
        book_title: '',
        book_author: '',
        book_publish_year: '',
        book_publisher: '',
        book_isbn: '',
        book_description: ''
    })

    const validationSchema =object().shape({
        book_title: string()
            .required('Book Title is Required'),//this errors stores in formik.errors.book_title
        book_author:string()
            .required('Book Author Name is Required'),
        book_publish_year:string()
            .matches(/(?:[0-9]{4})?[0-9]{4}/, "Invalid Year")
            .required('Book Published Year is Required'),
        book_publisher:string()
            .required('Book Publisher is Required'),
        book_isbn:string()
            // .matches(` ^(([1-9]*)|(([1-9]*).([0-9]*)))$`,"ISBN Number is Invalid")
            .min(13, `ISBN-NUMBER must be
         atmost 13 digits`)
            .max(13, `ISBN-NUMBER must be
        atmost 13 digits`)
            .required('ISBN-NUMBER is Required'),
        book_description:string()
            .min(100,'Give a detail description')
    })


    const formik = useFormik({
        initialValues: { CreateData }, //intially it takes formik.initial values
        validationSchema,
        onSubmit: async (values) => {
            try {
                // Making a POST request to the API endpoint with the form data
                await axios.post('https://65d7900c27d9a3bc1d7b508c.mockapi.io/api/Users', values);
                // Displaying a success message using toast
                toast.success("New Book Created Successfully");
                // Navigating to the userDetails page after successful creation
                navigate('/');
            } catch (error) {
                console.log(error);
                // Displaying an error message using toast if the creation fails
                toast.error("Failed to create data");
            }

        }
    })

    return (
        <div class="form-container">
            <div class="form-box-container">
                <h2>Create New Book:</h2>
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
                            {formik.errors.book_isbn}
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
                        <button type="submit" class="btn btn-primary mb-2" style={{ fontSize: "large" }}>Create</button>
                    </div>
                </form>
                <div class="text-center">
                    <button className='btn btn-success mt-4 w-100 back-btn' onClick={() => { navigate('/') }}>Back</button>
                </div>

            </div>
        </div>
    );
};

export default Create;
