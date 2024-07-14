import React from 'react'
import Testimonial from './components/Testimonial'
import Showcase from './components/Showcase'
import Features from './components/Features'
import Widget from './components/Widget'
import testimonialImage1 from './assets/img/testimonials-1.jpg'
import testimonialImage2 from './assets/img/testimonials-2.jpg'
import testimonialImage3 from './assets/img/testimonials-3.jpg'
import showcaseImage1 from './assets/img/bg-showcase-1.jpg'
import showcaseImage2 from './assets/img/bg-showcase-2.jpg'
import showcaseImage3 from './assets/img/bg-showcase-3.jpg'
import Waves from './assets/img/bg-masthead.jpg'

function App() {
  
  let footer_list1 = ['About','.','Contact','.','Terms of Use','.','Privacy Policy']
  let footer_list2 = ['bi-facebook','bi-twitter','bi-instagram']
  let features = [
    {
      icon:'bi-window',
      title:'Fully Responsive',
      description:'This theme will look great on any device, no matter the size!'
    },
    {
      icon:'bi-layers',
      title:'Bootstrap 5 Ready',
      description:'Featuring the latest build of the new Bootstrap 5 framework!'
    },
    {
      icon:'bi-terminal',
      title:'Easy to Use',
      description:'Ready to use with your own content, or customize the source files!'
    }
  ]
  let showcase = [
    {
      image:showcaseImage1,
      title:'Fully Responsive Design',
      description:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
      imageSide:true
    },
    {
      image:showcaseImage2,
      title:'Updated For Bootstrap 5',
      description:'Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!',
      imageSide:false
    },
    {
      image:showcaseImage3,
      title:'Easy to Use & Customize',
      description:'Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!',
      imageSide:true
    }
  ]
  let testimonial = [
    {
      image:testimonialImage1,
      name:'Margaret E.',
      description:'This is fantastic! Thanks so much guys!'
    },
    {
      image:testimonialImage2,
      name:'Fred S.',
      description:"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
    },
    {
      image:testimonialImage3,
      name:'Sarah W.',
      description:'Thanks so much for making these free resources available to us!'
    }
  ]
  return (
    <>
        <nav className="navbar navbar-light bg-light static-top">
            <div className="container">
                <a className="navbar-brand">Start Bootstrap</a>
                <a className="btn btn-primary">Sign Up</a>
            </div>
        </nav>

        <header className="masthead" style={{
                background: `url(${Waves}) no-repeat center center`,
                backgroundSize: 'cover',
            }}>

            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-white">
                            <h1 className="mb-5">Generate more leads with a professional landing page!</h1>
                            <Widget />
                        </div>
                    </div>
                </div>
            </div>
            
        </header>

        <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">
                  {
                      features.map((e,i)=>{
                        return <Features key={i} features={e}/>
                      })
                  }
                </div>
            </div>
        </section>
    
        <section className="showcase">
            <div className="container-fluid p-0">
                  {
                      showcase.map((e,i)=>{
                        return <Showcase key={i} showcase={e}/>
                      })
                  }
            </div>
        </section>

        <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                    {
                        testimonial.map((e,i)=>{
                          return <Testimonial key={i} testimonial={e}/>
                        })
                    }
                </div>
            </div>
        </section>

        <section className="call-to-action text-white text-center" id="signup" style={{
                background: `url(${Waves}) no-repeat center center`,
                backgroundSize: 'cover',
            }}>
           <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <h2 className="mb-4">Ready to get started? Sign up now!</h2>
                        <Widget /> 
                    </div>
                </div>
            </div>
        </section>

        <footer className="footer bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <ul className="list-inline mb-2">
                            {
                               footer_list1.map((e,i)=>(
                                  e === '.' ? (
                                    <li key={i} className="list-inline-item">{e}</li>
                                    ) : (
                                    <li key={i} className="list-inline-item"><a href='#'>{e}</a></li>
                                    )
                               ))
                            }
                        </ul>
                        <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2023. All Rights Reserved.</p>
                    </div>
                    <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul className="list-inline mb-0">
                            {
                               footer_list2.map((e,i)=>(
                                  <li key={i} className="list-inline-item me-4">
                                    <a href='#'><i className={`${e} fs-3`}></i></a>
                                  </li>
                               ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default App
