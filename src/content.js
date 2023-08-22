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
                            {/* <a className='link' target='_blank' rel='noreferrer' href=''>
                                Lab Attendance
                            </a> <br /> */}
                            <a className='link' target='_blank' rel='noreferrer' href='https://forms.gle/qL8pNBAX3Fv3icem9'>
                                Discussion Attendance
                            </a> <br />
                            <a className='link' target='_blank' rel='noreferrer' href='https://forms.gle/1ooPWtGYacox3uS57'>
                                Anonymous Feedback
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
                        <p id='announce'> hi! welcome to 61a &#x1F973; </p>
                    </div>
                    <br />
                    
                    <div className='disc-container'>
                        <div className='disc-row'>
                            <div className='ind-disc-container'>
                                <p> Discussion 00 </p>
                                <a className='button' target='_blank' rel='noreferrer noopener' href=''>
                                    [coming soon]
                                </a>
                                <a className='button' target='_blank' rel='noreferrer noopener' href=''>
                                    [coming soon]
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