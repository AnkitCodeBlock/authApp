'use client'
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const RegisterForm = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");

    const router=useRouter();

    const handleSubmit=async (e)=>{
        e.preventDefault();
        if(!name || !email || !password){
            setError("All fields are necessary")
            return ;
        }

        try{
            const resUserExists=await fetch('api/userExists',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email
                })
            })

            const {user}=await resUserExists.json();
            if(user){
                setError("User already exists");
                return
            }

            const res=await fetch('api/register',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({
                    name,email,password
                })
            })
            if(res.ok){
                const form=e.target;
                form.reset();
                router.push("/");
                console.log("User registrations failed");
            }
        }
        catch{
            console.log("Error during registration",error);
        }
    }

    console.log("Name:",name)

  return (
    <div className="grid place-items-center mt-4">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
            <h1 className="text-xl font-bold my-4">
                Register
            </h1>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">Register</button>
                {error && (
                <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2"
                >{error}
                </div>)}
                <Link href={'/'} className="text-sm mt-3 text-right">Don't have an account? <span className='underline'>Login</span></Link>
            </form>
        </div>
    </div>
  )
}

export default RegisterForm