'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';
// import { ErrorMessage, Field, Form, Formik } from 'formik';
// import * as Yup from "yup";

const inputStyle="block border w-full rounded-lg px-4 py-2 text-gray-700 mt-1 mb-3 leading-tight focus:outline-none focus:shadow-outline";


const LoginForm = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");

    const router=useRouter();

    const handleSubmit=async (e)=>{
      e.preventDefault();
      try {
        const res=await signIn("credentials",{
          email,
          password,
          redirect:false,
        });

        if(res.error){
          setError("Invalid Credentials");
          return;
        }
        router.replace('phone');
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div className="grid place-items-center mt-4">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
            <h1 className="text-xl font-bold my-4">
                Login
            </h1>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}/>
                <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">Login</button>
                {error && (<div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>)}
                <Link href={'/register'} className="text-sm mt-3 text-right">Don't have an account? <span className='underline'>Register</span></Link>
            </form>

            {/* Formik */}
            {/* <Formik initialValues={{
              email:"",
              password:""
            }} validationSchema={Yup.object({
              email: Yup.string().min(3).required("Enter Your name"),
              password: Yup.string().required("Required").min(5, "Password must be at least 6 characters"),
            })}>
              <Form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <Field name="email" type="text" placeholder='Email' className={inputStyle}/>
                        <ErrorMessage name="email" component="div" className='text-red-500' />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <Field name="password" type="text" placeholder='Password' className={inputStyle}/>
                        <ErrorMessage name="password" component="div" className='text-red-500' />
                    </div>
                    {error && (<div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>)}
                    <div className='flex justify-center'>
                        <button type="submit" className='bg-green-500 text-white px-4 py-2 rounded'>Submit</button>
                    </div>
                    <Link href={'/register'} className="text-sm mt-3 text-right">Don't have an account? <span className='underline'>Register</span></Link>
              </Form>
            </Formik> */}
        </div>
    </div>
  )
}

export default LoginForm;