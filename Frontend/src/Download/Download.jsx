import React from 'react';
import './download.css';
import database from '../Images/Database.png';

export const Download = () => {
    return (
        <div className='container'>
            <div className='login-container downlaod'>
                <img className='database-image' src={database} />
                <h4>WELCOME TO OUR SERVER</h4>
                <div className='dropdown-label'>Select Database</div>
                <select name="database" id="database">
                    <option value="">Select Databases</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                </select>
                <div className='dropdown-label'>Select Table or view</div>
                <select name="table" id="database">
                    <option value="">Select Type</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                </select>
                <div className='dropdown-label'>Select File Type</div>
                <select name="table" id="database">
                    <option value="">Choose File Format</option>
                    <option value="csv">CSV</option>
                    <option value="word">word</option>
                </select>
                <div className='dropdown-label'>Select Output Filed selarator</div>
                <select name="table" id="database">
                    <option value="">Select Output Field separator</option>
                    <option value="csv">CSV</option>
                    <option value="word">word</option>
                </select>
                <div>
                    <button className='download-button'>Download</button>
                </div>
            </div>
        </div>
    )
}