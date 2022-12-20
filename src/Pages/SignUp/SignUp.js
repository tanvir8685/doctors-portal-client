import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser,updateUser}=useContext(AuthContext);
    const [signUpError,setSignUpError]=useState('')
    const navigate=useNavigate();
    const handleSignUp=(data)=>{
        console.log(data);
        setSignUpError('')
        createUser(data.email,data.password)
        .then(result=>{
            const user =result.user;
            console.log(user);
           toast('user created Successfully')
            const userInfo={
                displayName:data.name
            }
            updateUser(userInfo)
            .then(()=>{
                navigate('/')
            })
            .catch(err=>console.log(err))
        })
        .catch(error=>{
            console.log(error)
            setSignUpError(error.message)
        });

    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-xl text-center'>Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignUp)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input type="text"
                            {...register("name", { required: "Give Your Name" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input type="email"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input type="password"
                            {...register("password", { required: "Passward is required" ,
                            minLength:{value:6,message:'Password must be 6 charectar or longer'}
                            , pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' } })}
                            className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                        

                    </div>



                    <input className='btn btn-accent w-full mt-4' value="SignUp" type="submit" />
                    {
                        signUpError&& <p className='text-red-600'>{signUpError}</p>
                    }
                </form>
                    
                <p>New to Doctors Portal <Link className='text-secondary' to="/login">Already Have an Account?</Link> </p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default SignUp;