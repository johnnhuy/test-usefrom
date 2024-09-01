import axios from "axios";

import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';



import '../css/app.css';
import shoppe from '../imgs/anhnen.png';

export default function Login(){

    const { register, handleSubmit, formState: { errors } } = useForm();
    const movepage = useNavigate('');
    const api = 'https://dummyjson.com/auth/login';

    const onSubmit =(data) =>{
        axios.post(api,data)
        .then((response) =>{
            const newtoken = response.data.token;

        if(newtoken) {
            Cookies.set('token',newtoken);
            movepage('/Home')
        }
        })
        .catch((err) =>{
            console.error('lỗi',err);
        })
    }
    return(

        <>
        <div className="">

        <div className=" " 
        style={{ backgroundImage: `url(${shoppe})` }}>
            <h3>login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="gap-[10px] flex">

                    <label htmlFor="username">username</label>
                    <input className="border-4" type="text" id="username" {...register('username',{required :'Username is requỉed'})} />
                    {errors.username && <p>{errors.username}</p>}
                    </div>

                    <div className="gap-[10px] flex ">

                    <label htmlFor="password">password</label>
                    <input className="border-4" type="text" id="password" {...register('password',{required : 'Password is requied'})} />
                    {errors.password && <p>{errors.password}</p>}
                    </div>

                </div>
                    <button type="submit">login</button>

            </form>
        </div>
        </div>
        </>

    )
}