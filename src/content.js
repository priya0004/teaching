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
                            <a className='link' target='_blank' rel='noreferrer' href='https://go.cs61a.org/disc-att'>
                                &#128204; Disc Attendance
                            </a> <br />
                            <a className='link' target='_blank' rel='noreferrer' href='https://forms.gle/6XQE4BFZ5eefoV2k6'>
                                &#128394; Anonymous Feedback
                            </a> <br />
                            &#127911; Spotify Playlist
                        </p>
                    </div>
        
                    <div id='section'>
                        <h3> Section </h3>
                        <p>
                            [Disc] Thursday: 3:30-5 PM @ Soda 405
                        </p>
                    </div>

                    <div id='section'>
                        <h3> Office Hours </h3>
                        <p>
                            Tuesday: 9-11 AM @ Warren <br />
                            Tuesday: 7-8 PM @ Warren <br />
                            Thursday: 9-11 AM @ Warren <br />
                            Thursday: 6-8 PM @ Warren
                        </p>
                    </div>

                    {/* <div id='section'>
                        <h3> Past Website </h3>
                        <p>
                            Fall 2023
                        </p>
                    </div> */}
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
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc00/'>
                                    disc00
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1QNiMeps5pwjKgE4MKHB8xd_DEnQObQIo1AFL7qojRhQ/edit?usp=sharing'>
                                    disc00 slides [fa23]
                                </a>
                            </div>

                            <div className='ind-disc-container'>
                                <p> Week 2 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc01/'>
                                    disc01
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1MLkp8bMNOwMbYVDh4Vn2wah6KisgrBQjGC3BuMcTHjc/edit?usp=sharing'>
                                    disc01 slides [fa23]
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='disc-container'>
                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Week 3 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href=''>
                                    coming soon
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href=''>
                                    coming soon
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