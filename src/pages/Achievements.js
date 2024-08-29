import React from 'react';
import '../styles.css';
import winningPhoto from '../assets/winning pose.jfif'; // Make sure to update the path to your image

const Research = () => {
    return (
        <div className="container">
            <h2>Sports Achievements</h2>
            <p>I've participated in and won several sports events, including:</p>
            <div className="achievements-grid">
                <div className="column">
                    <h3>Winners</h3>
                    <ul>
                        <li>TIMS '23</li>
                        <li>Spandan '23</li>
                        <li>Pegasus '23</li>
                        <li>Encierro '23</li>
                        <li>Stanlea '23</li>
                        <li>Silhouettes '24 (AFMC)</li>
                        <li>TIMS '24</li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Runners-Up</h3>
                    <ul>
                        <li>Encierro '23</li>
                        <li>Stanlea '23</li>
                    </ul>
                </div>
            </div>
            <div className="image-container">
                <img src={winningPhoto} alt="Winning Moment" className="winning-photo" />
            </div>
        </div>
    );
}
export default Research;