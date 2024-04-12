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
                            <a className='link' target='_blank' rel='noreferrer' href='https://open.spotify.com/playlist/12LD0ZtmMNj9h0SgDG1Gjn?si=eb7181c897784b2c'>
                                &#127911; Spotify Playlist
                            </a>
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
                            Tuesday: 9-10 AM @ Warren <br />
                            Tuesday: 6-8 PM @ Warren <br />
                            {/* Wednesday: 4-5 PM @ Warren <br /> */}
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
                        <p id='announce'> &#129395; welcome back! &#129395; </p>
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
                                    slides
                                </a>
                            </div>

                            <div className='ind-disc-container'>
                                <p> Week 2 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc01/'>
                                    disc01
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1MLkp8bMNOwMbYVDh4Vn2wah6KisgrBQjGC3BuMcTHjc/edit?usp=sharing'>
                                    slides
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='disc-container'>
                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Week 3 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc02/'>
                                    disc02
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1aep0QA00N1KDOGNB0zDcxIcdVnWL_uJQriyg9Cs_Cl0/edit?usp=sharing'>
                                    slides
                                </a>
                            </div>

                            <div className='ind-disc-container'>
                                <p> Week 4 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc03/'>
                                    disc03
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1vnQgn0NDV_092XRYvIrxAgcMmohg8PUD1n9lj-7Sn3c/edit?usp=sharing'>
                                    slides
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='disc-container'>
                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Week 5 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc04/'>
                                    disc04
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1i2QJxpHKCYcFx8NWYxCCFWu9oCW84tFyYG0o2PCtFBI/edit?usp=sharing'>
                                    slides
                                </a>
                            </div>

                            <div className='ind-disc-container'>
                                <p> Week 6 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc05/'>
                                    disc05
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1fV2ckVPDYcCikGHLokjgwfeojRGXQX3mll8usFmdlNE/edit?usp=sharing'>
                                    slides
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://priya-teaching.notion.site/priya-teaching/disc05-trees-504dc8d037d4465c80fa9f12c2433c72'>
                                    notion
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='disc-container'>
                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Week 7 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc06/'>
                                    disc06
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1VL_6U72FFamBQcCM9f5dNsfcmGFEndnAd5ieJpXXr8w/edit?usp=sharing'>
                                    slides
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://priya-teaching.notion.site/disc06-iterators-generators-ca54ea097a4341edae3e437982224b69?pvs=4'>
                                    notion
                                </a>
                            </div>

                            <div className='ind-disc-container'>
                                <p> Week 8 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc07/'>
                                    disc07
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1EYjzvsMCg0_JIRvEhhkajDu1xgTQSB2mF6172hUfNMY/edit?usp=sharing'>
                                    slides
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://priya-teaching.notion.site/disc07-OOP-3bdaf53b9e9e4fab96328d3054f2353a?pvs=4'>
                                    notion
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='disc-container'>
                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Week 9 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc08/'>
                                    disc08
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/17bF9q_UvqMiFD8Zfedtb_mMVTFOBb-ihQcMhwqACKo0/edit?usp=sharing'>
                                    slides
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://priya-teaching.notion.site/disc08-linked-lists-efficiency-ca5b8a11aae6480e8d29b8c1f3160fe9?pvs=4'>
                                    notion
                                </a>
                            </div>

                            <div className='ind-disc-container'>
                                <p> Week 10: Midterm 2</p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1P9yzWttS2SexabPrQ38RWhanFGTUiTtru_44f3lUoTE/edit?usp=sharing'>
                                    content reminders 
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/document/d/1WA0BF9DjN6DpEh-FHuuBKKWaRCUJEN-OTbpWkEjAfHw/edit?usp=sharing'>
                                    exam advice
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className='disc-container'>
                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Week 12 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc09/'>
                                    disc09
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1qO8ffJaHO-dGumbuUgYLDCYqrG1zXGN7hV5H4A_qeDU/edit?usp=sharing'>
                                    slides
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://priya-teaching.notion.site/disc09-scheme-scheme-lists-cd5b2c888fc742a5bc8531c6ea7f8907?pvs=4'>
                                    notion
                                </a>
                            </div>

                            <div className='ind-disc-container'>
                                <p> Week 13 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc10/'>
                                    disc10
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1M5xrWltN_cddqUDMzUdyDMh-Bqx8tKHYlDETW4aNy4A/edit?usp=sharing'>
                                    slides
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://priya-teaching.notion.site/disc10-interpreters-869c5ae8912849c599e2e147721a6a20?pvs=4'>
                                    notion
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