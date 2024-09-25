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
                            <a className='link' target='_blank' rel='noreferrer' href='https://go.cs61a.org/disc-att'>
                                &#128204; Disc Attendance
                            </a> <br />
                            <a className='link' target='_blank' rel='noreferrer' href='https://forms.gle/FYNWLRqmoF6XZQrN9'>
                                &#128394; Anonymous Feedback
                            </a> <br />
                            <a className='link' target='_blank' rel='noreferrer' href='https://open.spotify.com/playlist/4R0bUOnxKpNqTn4Cc47cFp?si=fc242a96af3a4b62'>
                                &#127911; Spotify Playlist
                            </a>
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
                            Tuesday: 5-7 PM @ Warren 101B
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
                        <p id='announce'> &#129395; congrats on finishing the midterm! &#129395; </p>
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
                            <div className='ind-disc-container'>
                                <p> Week 2: Control, Environment Diagrams </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc01/'>
                                    disc01
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1S5pTHjthAFfr14-7CiE7ijhXjsUQVaB2UIQ9S2sRnO8/edit?usp=sharing'>
                                    slides
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='disc-container'>
                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Week 3: Environment Diagrams, HOFs </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc02/'>
                                    disc02
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1vJDAOlOYCwb7Pms3Kk1nLVZDIuy3HSLGk_3FMLNor2Y/edit?usp=sharing'>
                                    slides
                                </a>
                            </div>
                            <div className='ind-disc-container'>
                                <p> Week 4: Recursion </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc03/'>
                                    disc03
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/19mXMb22PDPvEm0m2cqaGblw_4H0LTq1tQztQcsP-iIo/edit?usp=sharing'>
                                    slides
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='disc-container'>
                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Week 5: Tree Recursion </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc04/'>
                                    disc04
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/17AT6Rt2KBKi1Ibp6I-XJCp_-bDijRNQOg83CCNkNexc/edit?usp=sharing'>
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