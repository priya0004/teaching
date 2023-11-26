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
                        <h4> Fall 2023 CS 61A TA </h4>
                        <p>
                            <a className='link' target='_blank' rel='noreferrer' href='https://forms.gle/JRnVKTHbgtu1E9448'>
                                &#128204; Lab/Disc Attendance
                            </a> <br />
                            <a className='link' target='_blank' rel='noreferrer' href='https://forms.gle/1ooPWtGYacox3uS57'>
                                &#128394; Anonymous Feedback
                            </a> <br />
                            <a className='link' target='_blank' rel='noreferrer' href='https://open.spotify.com/playlist/12LD0ZtmMNj9h0SgDG1Gjn?si=72c8640e501e48ce'>
                                &#127911; Spotify Playlist
                            </a>
                        </p>
                    </div>
        
                    <div id='section'>
                        <h3> Section One </h3>
                        <p>
                            [Lab] Monday: 2-3:30 PM @ Soda 273 <br />
                            [Disc] Thursday: 2-3:30 PM @ Soda 405
                        </p>
            
                        <h3> Section Two </h3>
                        <p>
                            [Lab] Monday: 5-6:30 PM @ Soda 273 <br />
                            [Disc] Wednesday: 5-6:30 PM @ Latimer 105
                        </p>
                    </div>
                </div>
    
                <div id='content' className='col-lg-7 col-xl-7'>

                    <div className='announcements-container'>
                        <p id='announce'> &#129395; Final Week of Instruction! &#129395; </p>
                    </div>
                    <br />
                    
                    <div className='disc-container'>
                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Week 1 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href=''>
                                    no lab
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1ZDzKBAi6ZZJzwxelq-ugCO1n6zB0whUVbmq-PHkW_JY/edit?usp=sharing'>
                                    disc00 slides
                                </a>
                            </div>

                            <div className='ind-disc-container'>
                                <p> Week 2 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1t6o7e-551yJGlygzLKTsoPrOJMbayxRARVMYN-CRZ7g/edit?usp=sharing'>
                                    lab01 slides
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1i9hGSstPZVMYISComwLTeedIOfj1OC6_oFSpWNNWp3Q/edit?usp=sharing'>
                                    disc01 slides
                                </a>
                            </div>

                        </div>

                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Week 3 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href=''>
                                    no lab slides
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1qYIHcKU9gI8Ixu8GTw54a9uNNSu3908RtguZmECJT1U/edit?usp=sharing'>
                                    disc02 slides
                                </a>
                            </div>

                            <div className='ind-disc-container'>
                                <p> Week 4 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href=''>
                                    no lab
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1pq_Y2YHn2vILolNSi4FTODHtazPB_4ja3QwNQp9Cc0s/edit?usp=sharing'>
                                    disc03 slides
                                </a>
                            </div>
                        </div>

                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Week 5 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1SvygiDm2Kd3qMkUJBgpZXdAmgrtHcyI_6WWM0louxMU/edit?usp=sharing'>
                                    lab04 slides
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1UC58cjLy3zWduMESComW0P0drM_vfaaZkUajhkqCQSo/edit?usp=sharing'>
                                    disc04 slides
                                </a>
                            </div>

                            <div className='ind-disc-container'>
                                <p> Week 6 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1hfGdq3PomYzolco98zQLjRK_aLWj616c8BYV-13AUmw/edit?usp=sharing'>
                                    reference slides
                                </a>
                            </div>
                        </div>

                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Week 7 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1GqZypaVnpwj8fDvtKtmU6rXflfDRNZLHa5xR_uYLEDQ/edit?usp=sharing'>
                                    reference slides
                                </a>
                            </div>

                            <div className='ind-disc-container'>
                                <p> Week 8 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/lab/lab07/'>
                                    lab07
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc07/'>
                                    disc07
                                </a>
                            </div>
                        </div>

                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Week 9 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/lab/lab08/'>
                                    lab08
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc08/'>
                                    disc08
                                </a>
                            </div>

                            <div className='ind-disc-container'>
                                <p> Week 10 - Midterm 2 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/presentation/d/1g_4YFTQRlsa6UvAjFUKv9FPDPQLtUw6Ggldn1gYo8M4/edit?usp=sharing'>
                                    content reminders
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://docs.google.com/document/d/1WA0BF9DjN6DpEh-FHuuBKKWaRCUJEN-OTbpWkEjAfHw/edit?usp=sharing'>
                                    exam advice
                                </a>
                            </div>
                        </div>

                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Week 11 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/lab/lab10/'>
                                    lab10
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc10/'>
                                    disc10
                                </a>
                            </div>

                            <div className='ind-disc-container'>
                                <p> Week 12 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/lab/lab11/'>
                                    lab11
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc11/'>
                                    disc11
                                </a>
                            </div>
                        </div>

                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Week 13 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/lab/lab12/'>
                                    lab12
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc12/'>
                                    disc12
                                </a>
                            </div>

                            <div className='ind-disc-container'>
                                <p> Week 15 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/lab/lab13/'>
                                    lab13
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href='https://cs61a.org/disc/disc13/'>
                                    disc13
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