import { FC } from 'react'
import landpage1 from '../../images/landpage-1.jpg'
import landpage2 from '../../images/landpage-2.jpg'
import landpage3 from '../../images/landpage-3.jpg'
import landpage4 from '../../images/landpage-4.jpg'
import landpage5 from '../../images/landpage-5.jpg'

const carouselStyle = {
    width: '85%',
    marginLeft: '10%',
    borderRadius: '10px'
}

const LandingPage: FC = () => {
    return (
        <div className='' style={{height: '3000px'}}>
            <div className='light-bg2 pt-5 pr-5 row' style={{height: ''}}>
                <div className='col-lg-5 p-5 '>
                    <h1>Study Class</h1>
                    <h3>About us</h3>
                    <h4>It can help you make class and do test online.</h4>
                </div>
                <div className='col-lg-7'>
                    <img src={landpage1} style={{width: '100%', height: '80%', borderRadius: '10px'}} alt=""/>
                </div>
            </div>
            <div className="light-bg-2 row">
                <div className="col-lg-7">
                    <img src={landpage2} style={{width: '80%', height: '80%', borderRadius: '10px'}} alt=""/>
                </div>
                <div className="col-lg-5">
                    <h1>More efficient</h1>
                </div>
            </div>
            <div className="light-bg-2">
                <div className="row">
                    <div className="col-lg-4">
                        <img src={landpage3} alt="" style={{...carouselStyle}}/>
                    </div>
                    <div className="col-lg-4 ">
                        <img src={landpage4} alt="" style={{...carouselStyle}}/>
                    </div>
                    <div className="col-lg-4 ">
                        <img src={landpage5} alt="" style={{...carouselStyle}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage