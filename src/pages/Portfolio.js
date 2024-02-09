import React from 'react'
import Header from '../components/header/Header'
import Skills from '../components/skills/Skills'
import Form from '../components/form/Form'
import Footer from '../components/footer/Footer'

function Portfolio() {
  return (
    <>
    <div className="container">
      {/* <div className="alertcontainer"> */}
        {/* <AlertComponent/> */}
      {/* </div> */}
      <div className=''>
        <Header/>
      </div>

      <section>
        <Skills/>
      </section>

      <section>
        <Form/>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
    </>
  )
}

export default Portfolio
