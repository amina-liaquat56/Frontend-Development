import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialFormValue = {
    name: "", email: "", password: "", confirmPassword: "",
    gender: "", role: "", skills: [], acceptTerms: false
}
const skillsList = ["JavaScript", "React", "Node.js", "Python"];
const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    gender: Yup.string().required("Gender is required"),
    role: Yup.string().required("Role is required"),
    skills: Yup.array().min(1, "Select at least one skill"),
    acceptTerms: Yup.boolean().oneOf([true], "You must accept the terms"),
});

export default function FormDemo3() {
    const [formData, setFormData] = useState(null);

    return <>
        <h3 className='text-center'>React Form Using Formik & Yup</h3>
        <div className='col-sm-6 offset-sm-3'>
            <div className='border border-3 rounded-3 p-2 m-2'>
                <Formik
                    initialValues={initialFormValue}
                    validationSchema={validationSchema}
                    onSubmit={(values, { resetForm }) => {
                        setFormData(values);
                        resetForm();
                    }}
                >
                    {({ values, isSubmitting }) => (
                        <Form>
                            <div className='my-1'>
                                <label>Name:</label>
                                <Field name="name" type="text" />
                                <div className="text-danger"><ErrorMessage name="name" /></div>
                            </div>
                            <div className='my-1'>
                                <label>Email:</label>
                                <Field name="email" type="email" />
                                <div className="text-danger"><ErrorMessage name="email" /></div>
                            </div>
                            <div className='my-1'>
                                <label>Password:</label>
                                <Field name="password" type="password" />
                                <div className="text-danger"><ErrorMessage name="password" /></div>
                            </div>
                            <div className='my-1'>
                                <label>Confirm Password:</label>
                                <Field name="confirmPassword" type="password" />
                                <div className="text-danger"><ErrorMessage name="confirmPassword" /></div>
                            </div>
                            <div className='my-1'>
                                <label>Gender:</label>
                                <Field as="select" name="gender">
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Field>
                                <div className="text-danger"><ErrorMessage name="gender" /></div>
                            </div>
                            <div className='my-1'>
                                <label>Role:</label>
                                <label>
                                    <Field type="radio" name="role" value="developer" />
                                    Developer
                                </label>
                                <label>
                                    <Field type="radio" name="role" value="designer" />
                                    Designer
                                </label>
                                <div className="text-danger"><ErrorMessage name="role" /></div>
                            </div>
                            <div className='my-1'>
                                <label>Skills:</label>
                                {skillsList.map((skill) => (
                                    <label key={skill} style={{ display: "block" }}>
                                        <Field
                                            type="checkbox"
                                            name="skills"
                                            value={skill}
                                        />
                                        {skill}
                                    </label>
                                ))}
                                <div className="text-danger"><ErrorMessage name="skills" /></div>
                            </div>
                            <div className='my-1'>
                                <label>
                                    <Field type="checkbox" name="acceptTerms" />
                                    I accept the terms and conditions
                                </label>
                                <div className="text-danger"><ErrorMessage name="acceptTerms" /></div>
                            </div>
                            <button type="submit" disabled={isSubmitting} style={{ marginTop: "10px" }}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
                {formData && (
                    <div style={{ marginTop: "20px", background: "#f9f9f9", padding: "15px" }}>
                        <h3>Submitted Data:</h3>
                        <pre>{JSON.stringify(formData, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    </>
}
