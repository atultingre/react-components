import React from 'react'
import "./Timeline.css"

const Timeline = () => {
  return (
    <>
    <div>
      <div className="timeline">
        <div className="container left-container">
          <img src="/images/google.png" alt="google" />
          <div className="text-box">
            <h2>Google</h2>
            <small>2018-2019</small>
            <p>The success of every website depends on search engine optimisation and digital marketing strategy. If youare  om forst page of all major search...</p>
            <span className='left-container-arrow'></span>
          </div>
        </div>
        <div className="container right-container">
          <img src="/images/amazon.png" alt="amazon" />
          <div className="text-box">
            <h2>Amazon Inc.</h2>
            <small>2018-2019</small>
            <p>The success of every website depends on search engine optimisation and digital marketing strategy. If youare  om forst page of all major search...</p>
            <span className='right-container-arrow'></span>
          </div>
        </div>
        <div className="container left-container">
          <img src="/images/tesla.png" alt="tesla" />
          <div className="text-box">
            <h2>Tesla</h2>
            <small>2018-2019</small>
            <p>The success of every website depends on search engine optimisation and digital marketing strategy. If youare  om forst page of all major search...</p>
            <span className='left-container-arrow'></span>
          </div>
        </div>
        <div className="container right-container">
          <img src="/images/toyota.png" alt="toyota" />
          <div className="text-box">
            <h2>Toyota</h2>
            <small>2018-2019</small>
            <p>The success of every website depends on search engine optimisation and digital marketing strategy. If youare  om forst page of all major search...</p>
            <span className='right-container-arrow'></span>
          </div>
        </div>
        <div className="container left-container">
          <img src="/images/flipkart.png" alt="flipkart" />
          <div className="text-box">
            <h2>Flipkart</h2>
            <small>2018-2019</small>
            <p>The success of every website depends on search engine optimisation and digital marketing strategy. If youare  om forst page of all major search...</p>
            <span className='left-container-arrow'></span>
          </div>
        </div>
        <div className="container right-container">
          <img src="/images/youtube.png" alt="youtube" />
          <div className="text-box">
            <h2>Youtube</h2>
            <small>2018-2019</small>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, dolores. Assumenda facilis cumque nemo pariatur architecto cum laboriosam .</p>
            <span className='right-container-arrow'></span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Timeline