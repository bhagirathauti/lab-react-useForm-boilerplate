import React from 'react'
import { useForm } from "react-hook-form"
import "./Form.css"

const Form = () => {
    const [registrationSuccess,setRegistrationSuccess] = React.useState(false)
    const {register,handleSubmit,formState:{errors}} = useForm()

    const onSubmit = () => {
        setRegistrationSuccess(true);
    }
  return (
    <div>
        {
            registrationSuccess && (
                <div>
                    <p>Registration Successful !</p>
                </div>
            )
        }
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="inputField">
            <label>
                First Name :
            </label>
            <input type="text" name="firstName" {...register("firstName",{required:"First Name is required !"})}/>
            {errors.firstName && <p className="error">{errors.firstName.message}</p>}
            </div>
            <div className="inputField">
            <label>
                Last Name :
            </label>
            <input type="text" name="lastName" {...register("lastName",{required:"last Name is required !"})}/>
            {errors.lastName && <p className="error">{errors.lastName.message}</p>}
            </div>
            <div className="inputField">
            <label>
                Email :
            </label>
            <input type="text" name="email" {...register("email", { required: "Email is Required",pattern: { value: /^\S+@\S+$/i, message: "Invalid Email" },})}/>
            {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            <div className="inputField">
            <label>
                Password : 
            </label>
            <input type="password" name="password" {...register("password",{required:"Password is Required",minLength:{value:5,message:"Password must be more than 4 characters"},maxLength:{value:20,message:"Password cannot be more than 20 characters"}})}/>
            {errors.password && <p className="error">{errors.password.message}</p>}
            </div>
            <input type="submit" value="Submit" className='btn' />
        </form>
    </div>
  )
}

export default Form