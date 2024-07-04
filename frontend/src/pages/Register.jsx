import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundImage from "../components/BackgroundImage";
import './Register.css';

const validationSchema = Yup.object().shape({
    charityname: Yup.string().required('Charity name is required'),
    description: Yup.string().required('Description is required'),
    location: Yup.string().required('Location is required'),
    image: Yup.string().required('Image URL is required')
});

export default function Register() {
    const initialValues = {
        charityname: '',
        description: '',
        location: '',
        image: ''
    };

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log(values);
        axios.post('http://localhost:1234/projects', values)
                .then(result => console.log("Success")) // Handle success response
                .catch(err => console.error(err)); // Handle error
        resetForm();
    };

    return (
        <div className='register-container'>
            <Navbar />
            <BackgroundImage />
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <Field
                                type="text"
                                placeholder="Enter name of your project/charity"
                                name="charityname"
                                id="charityname"
                            />
                            <ErrorMessage name="charityname" component="div" className="error" />
                        </div>
                        <div>
                            <Field
                                type="text"
                                placeholder="Tell us something about your vision"
                                name="description"
                                id="description"
                            />
                            <ErrorMessage name="description" component="div" className="error" />
                        </div>
                        <div>
                            <Field
                                type="text"
                                placeholder="Where is your project primarily based"
                                name="location"
                                id="location"
                            />
                            <ErrorMessage name="location" component="div" className="error" />
                        </div>
                        <div>
                            <Field
                                type="url"
                                placeholder="A picture which describes what you're working for!"
                                name="image"
                                id="image"
                            />
                            <ErrorMessage name="image" component="div" className="error" />
                        </div>
                        <button className='submit-button' type="submit" disabled={isSubmitting}>
                            Add your project!
                        </button>
                    </Form>
                )}
            </Formik>
            <p>Not a charity? Sign up as donor <a href="/login">here</a></p>
            <Footer />
        </div>
    );
}
