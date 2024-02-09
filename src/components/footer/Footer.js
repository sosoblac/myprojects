import React from 'react'
import './footer.css'

function Footer() {
  const currentDate =  new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  return (
    <>
    <div className="footer">
        <h1>Footer</h1>
        <div className="copywrite">
            <p>This is a copy write</p>
        </div>
        <div className="year">
            <p>{formattedDate}</p>
        </div>
    </div>
    </>
  )
}

export default Footer
