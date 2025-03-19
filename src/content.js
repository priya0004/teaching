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

                    <div id='section'>
                        <h3> Student Support </h3>
                        <p>
                            Wednesday: 4pm-6pm @ Zoom
                            [<a class="link" target="_blank" rel="noreferrer" href="https://go.cs61a.org/book-student-support">
                                appointment booking
                            </a>]
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
                        <p id='announce'> &#129528; good luck on midterm season &#129528; </p>
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
                            <div className='ind-disc-container'>
                                <p> Week 4: Recursion </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc03/'>
                                    disc03
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1GBNQXY3uETrFFp1puUmkjAG5zWoIGOnredgSVBvWKds/edit?usp=sharing'>
                                    slides
                                </a>
                            </div>
                        </div>
                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Week 5: Tree Recursion </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc04/'>
                                    disc04
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1VUYrXEvJyJTBtfhf2pHQmUa_8rpYHxMQXbxMejTSC-w/edit?usp=sharing'>
                                    slides
                                </a>
                            </div>
                            <div className='ind-disc-container'>
                                <p> Week 6: Trees </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc05/'>
                                    disc05
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1jg5cJTxAcWw0lp60qXNrSUGokdWU4RI1UCqPOtBi3ew/edit?usp=sharing'>
                                    slides
                                </a>
                            </div>
                        </div>
                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Week 7: Iterators/Generators </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc06/'>
                                    disc06
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1kPvDghRwBlz_ibBtDEmhThb5jWMaKZYYz_sYCxQN6l8/edit?usp=sharing'>
                                    slides
                                </a>
                            </div>
                            <div className='ind-disc-container'>
                                <p> Week 8: OOP </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc07/'>
                                    disc07
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/18lHH2RNaEaqw6uRRbeiuvM7ZMlhCyPNsk_JajlP64BI/edit?usp=sharing'>
                                    slides
                                </a>
                            </div>
                        </div>
                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Week 9: Linked Lists </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc08/'>
                                    disc08
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1TnuYYB8tzs5hr_lpyer4YptpDBBf_97PbignZdzZBIQ/edit?usp=sharing'>
                                    slides
                                </a>
                            </div>
                            <div className='ind-disc-container'>
                                <p> Week 10: Spring Break </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href=''>
                                    no disc
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href=''>
                                    no slides
                                </a>
                            </div>
                        </div>
                        <div className='disc-row'>
                        <div className='ind-disc-container'>
                                <p> Week 11: Midterm 2 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1l2YB6je2KVNwaQZxYedMYAiz6vbH0HOGgXoi3vMolLg/edit?usp=sharing'>
                                    content reminders
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/document/d/1WA0BF9DjN6DpEh-FHuuBKKWaRCUJEN-OTbpWkEjAfHw/edit?usp=sharing'>
                                    exam advice
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