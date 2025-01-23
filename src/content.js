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
                        <h4> Spring 2025 CS 61A Head TA </h4>
                        <p>
                            <a className='link' target='_blank' rel='noreferrer' href='http://go.cs61a.org/discussion-attendance'>
                                &#128204; Disc Attendance
                            </a> <br />
                            <a className='link' target='_blank' rel='noreferrer' href='https://docs.google.com/forms/d/e/1FAIpQLSdiL3MnoYt7ahtTMzzyQkVibuqJxU8linf7Nkkll7sI1lYFTQ/viewform?usp=sharing'>
                                &#128394; Anonymous Feedback
                            </a> <br />
                            <a>
                                &#127911; Spotify Playlist
                            </a>
                        </p>
                    </div>

                    <div id='section'>
                        <h3> Section </h3>
                        <p>
                            TBD
                        </p>
                    </div>

                    <div id='section'>
                        <h3> Office Hours </h3>
                        <p>
                            Wednesday: 6-8pm @ Warren 101B
                        </p>
                    </div>

                    {/* <div id='section'>
                        <h3> Past Websites </h3>
                        <p>
                            Fall 2024
                            Spring 2024
                            Fall 2023
                        </p>
                    </div> */}
                </div>

                <div id='content' className='col-lg-7 col-xl-7'>
                    <div className='announcements-container'>
                        <p id='announce'> &#129395; welcome to 61a! &#129395; </p>
                    </div>
                    <br />

                    <div className='disc-container'>
                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Week 1: Welcome </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc00/'>
                                    disc00
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1gTW58OaxGsP2WCMqQn89ts-DcC3UzNWbsS0bvFnhZ3w/edit?usp=sharing'>
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