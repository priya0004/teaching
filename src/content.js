import React from "react";
import "./content.css"; //redirect


function content() {
    return (
        <div className='container'>
            <div className='row'>

                <div id='meta' className='col-lg-5 col-xl-5'>
                    <h1 id='name'> Priya Venugopal </h1>
                    <p> priyavenugopal [at] berkeley [dot] edu </p>
                    <br />

                    <div id='links'>
                        <h4> Spring 2024 CS 61A Head TA </h4>
                        <p>
                            &#128204; Disc Attendance
                            <br />
                            &#128394; Anonymous Feedback
                            <br />
                            &#127911; Spotify Playlist
                        </p>
                    </div>
        
                    <div id='section'>
                        <h3> Section One </h3>
                        <p>
                            TBD
                        </p>
                    </div>
                </div>
    
                <div id='content' className='col-lg-7 col-xl-7'>
                    <div className='announcements-container'>
                        <p id='announce'> &#129395; Welcome to 61A! &#129395; </p>
                    </div>
                    <br />

                    <div className='disc-container'>
                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Week 1 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href=''>
                                    lab00
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href=''>
                                    disc00
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default content;