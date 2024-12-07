import React from 'react'
import "./afto.css";


import car from "../../asset/70.png"
import carr from "../../asset/71.png"
import carrr from "../../asset/72.png"
import book from "../../asset/73.png"
import bookk from "../../asset/74.png"
import bookkk from "../../asset/75.png"
import shov from "../../asset/76.png"
import shovv from "../../asset/77.png"
import shovv from "../../asset/77.png"


export const Afto = () => {
  return (
<>
<p className='mx-auto text-6xl text-center my-5 font-[900]'> AFTO</p>
    <div  className='flex flex-wrap w-full container px-2'>
        <dir className="card">
                        <img className='w-80 h-96 cardfoto' src={car} alt="foto" />
        </dir>


        <dir className="card">
                        <img className='w-80 h-96 cardfoto' src={bookkk} alt="foto" />
        </dir>

        <dir className="card">
                        <img className='w-80 h-96 cardfoto' src={shov} alt="foto" />
        </dir>

        <dir className="card">
                        <img className='w-80 h-96 cardfoto' src={shovv} alt="foto" />
        </dir>

        <dir className="card">
                        <img className='w-80 h-96 cardfoto' src={carr} alt="foto" />
        </dir>

        <dir className="card">
                        <img className='w-80 h-96 cardfoto' src={carrr} alt="foto" />
        </dir>
        <dir className="card">
                        <img className='w-80 h-96 cardfoto' src={book} alt="foto" />
        </dir>
        <dir className="card">
                        <img className='w-80 h-96 cardfoto' src={bookk} alt="foto" />
        </dir>
 
        <dir className="card">
                        <img className='w-80 h-96 cardfoto' src={bookk} alt="foto" />
        </dir>
 
    </div>


    </>
  )
}

export default Afto;

