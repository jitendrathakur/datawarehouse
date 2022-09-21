import React, { useEffect, useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

export const Login = () => {

    const history = useNavigate();
    const onSubmitButtonClick = () => {
        console.log('=======')
        axios.post('http://192.168.1.10:3000/login', formData).then(() => {
            history('./dashboard');
        })
    }

    const [formData, setFormData] = useState({
        server_name: '',
        user_name: '',
        password: ''
    });

    const onInputChange = (e) => {
        let name = e.target.name
        setFormData({ ...formData, [name]: e.target.value });
    }

    return (
        <div className='container'>
            <div className='login-container'>
                <h2>USER</h2>
                <h2>AUTHENTICATION</h2>
                <div className='form-field'>
                    <input type='text' name='server_name' onChange={(e) => onInputChange(e)} value={formData.server_name} placeholder='Your Server Name' />
                </div>
                <div className='form-field'>
                    <input type='text' name='user_name' onChange={(e) => onInputChange(e)} value={formData.user_name} placeholder='Your UserName' />
                </div>
                <div>
                    <input type='password' name='password' onChange={(e) => onInputChange(e)} value={formData.password} placeholder='Your Password' />
                </div>

                <div className='form-field'>
                    <button className='submit-button' onClick={() => onSubmitButtonClick()}>SUBMIT <FontAwesomeIcon className='forward-arrow' icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
    )
}