import * as yup from 'yup'



    const userSchema =yup.object().shape({
        firstName: yup.string().required('Name is required'),
        lastName: yup.string().required('Name is required'),
        email: yup.string().email('Email is invalid').required('Email is required'),
        password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    })


export default  userSchema;
