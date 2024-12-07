import React , {memo} from 'react'
import "./hero.css"
import hero from "../../asset/100.webp"
const Hero = () => {
    return (
        <div className='hero my-4'>
            <div className='container'>
                <div className="hero__wrapper flex gap-10 box ">
                <div className='hero__img db'>
                        <img className='hero__img w-full ' src={hero} alt="foto" />
                    </div>
                    <div className="hero__box  border p-10 shadow-xl flex flex-col gap-7 hero">
                        <p className='max-w-80 hero__title font-bold text-5xl'>    ASALOMU ALEKUM GIRAFIK DIZAYNER XIZMAT</p>
                    </div>
                    <div className='hero__img dn'>
                        <img className='h-96' src={hero} alt="foto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Hero)