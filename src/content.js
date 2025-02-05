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
                            <a className='link' target='_blank' rel='noreferrer' href='https://docs.google.com/forms/d/e/1FAIpQLSeTL33VPtC6IK_GMsmMmbsiAGxtVWJD9s0JrLzX0QqhaSswkg/viewform?usp=dialog'>
                                &#11088; Welcome Survey
                            </a> <br />
                            <a className='link' target='_blank' rel='noreferrer' href='http://go.cs61a.org/discussion-attendance'>
                                &#128204; Disc Attendance
                            </a> <br />
                            <a className='link' target='_blank' rel='noreferrer' href='https://docs.google.com/forms/d/e/1FAIpQLSdiL3MnoYt7ahtTMzzyQkVibuqJxU8linf7Nkkll7sI1lYFTQ/viewform?usp=sharing'>
                                &#128394; Anonymous Feedback
                            </a> <br />
                            <a className='link' target='_blank' rel='noreferrer' href='https://open.spotify.com/playlist/1vMHrqdaMAc9WszX51Q3HI?si=_t-2xtL_Q6KV8SS1LMaRoA'>
                                &#127911; Spotify Playlist
                            </a>
                        </p>
                    </div>

                    <div id='section'>
                        <h3> Discussion Sections </h3>
                        <p>
                            Thursday: 8am-9:30am @ Soda 310 <br />
                            Thursday: 11am-12:30pm @ Wheeler 130 <br />
                            Thursday: 12:30pm-2pm @ Dwinelle 204, 210, 211, & 233
                        </p>
                    </div>

                    <div id='section'>
                        <h3> Office Hours </h3>
                        <p>
                            Wednesday: 6pm-8pm @ Warren 101B
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
                        <p id='announce'> good luck on the midterm! </p>
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
                            <div className='ind-disc-container'>
                                <p> Week 2: Control, Environment Diagrams </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc01/'>
                                    disc01
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1Jr_OlzTtFgD-2w7ZlPbjSiXZIRbrXiJC-d4Px3J45X8/edit?usp=sharing'>
                                    slides
                                </a>
                            </div>
                        </div>
                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Week 3: Environment Diagrams, HOFs </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc02/'>
                                    disc02
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1M1B2lG4aPdbhmuIxV7Wj7kDCDZW_ZIhpw5JcerRB_4s/edit?usp=sharing'>
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