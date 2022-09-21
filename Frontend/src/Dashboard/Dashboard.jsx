import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp, faDownload } from '@fortawesome/free-solid-svg-icons'
import './dashboard.css';

export const Dashboard = () => {
    const navigate = useNavigate();
    const onDownloadClick = () => {
        navigate('/download');
    }
    return (
        <div className='container'>
            <div className='login-container dashboard'>
                <h1>HELLO, ANIKMORE</h1>
                <div>Welcome to Our Server</div>
                <div><button className='upload-button'>UPLOAD <FontAwesomeIcon icon={faCloudArrowUp} /></button></div>
                <div><button className='upload-button' onClick={() => onDownloadClick()} >DOWNLOAD <FontAwesomeIcon icon={faDownload} /></button></div>
            </div>
        </div >
    )
}