import React from 'react'
import Image1 from '../Asset/react_conf_elizabet.webp'
import Image2 from '../Asset/react_conf_fun.webp'
import Image3 from '../Asset/react_conf_hallway.webp'
import Image4 from '../Asset/react_conf_nat.webp'
import Image5 from '../Asset/react_india_hallway.webp'
import Image6 from '../Asset/react_india_selfie.webp'
import Image7 from '../Asset/react_india_sunil.webp'
import Image8 from '../Asset/react_india_team.webp'
const Slider = () => {
    return (
        <div className='slider'>
            <div className='slide-track'>
                <div className='slide'>
                    <img src={Image1} alt="React Conf" className='img-slide' />
                </div>
                <div className='slide'>
                    <img src={Image2} alt="React Conf" className='img-slide' />
                </div>
                <div className='slide'>
                    <img src={Image3} alt="React Conf" className='img-slide' />
                </div>
                <div className='slide'>
                    <img src={Image4} alt="React Conf" className='img-slide' />
                </div>
                <div className='slide'>
                    <img src={Image5} alt="React Conf" className='img-slide' />
                </div>
                <div className='slide'>
                    <img src={Image6} alt="React Conf" className='img-slide' />
                </div>
                <div className='slide'>
                    <img src={Image7} alt="React Conf" className='img-slide' />
                </div>
                <div className='slide'>
                    <img src={Image8} alt="React Conf" className='img-slide' />
                </div>
            </div>
        </div>
    )
}

export default Slider