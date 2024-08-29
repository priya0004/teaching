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
                        <h4> Fall 2024 CS 61A Head TA </h4>
                        <p>
                            &#128204; Disc Attendance <br />
                            &#128394; Anonymous Feedback <br />
                            &#127911; Spotify Playlist
                        </p>
                    </div>
        
                    <div id='section'>
                        <h3> Section </h3>
                        <p>
                            [Disc] Thursday: 5-6:30 PM @ Soda 310 & 320 <br />
                            [Disc] Thursday: 6:30-8 PM @ Soda 310 & 320
                        </p>
                    </div>

                    <div id='section'>
                        <h3> Office Hours </h3>
                        <p>
                            TBD
                        </p>
                    </div>

                    {/* <div id='section'>
                        <h3> Past Websites </h3>
                        <p>
                            Spring 2024
                            Fall 2023
                        </p>
                    </div> */}
                </div>
    
                <div id='content' className='col-lg-7 col-xl-7'>
                    <div className='announcements-container'>
                        <p id='announce'> &#129395; welcome to cs61a! &#129395; </p>
                    </div>
                    <br />

                    <div className='disc-container'>
                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Week 1: Welcome </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc00/'>
                                    disc00
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1M0qR7j-1gC6r6LDaAmia9hqDJKw2dqOfOl6pRFCjAAc/edit?usp=sharing'>
                                    slides
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