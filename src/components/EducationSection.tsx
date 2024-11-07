"use client"

import { useState } from "react"


export default function EducationSection(){

    const [state, setState] = useState(false);

    const buttonState = () =>{
        setState(!state)
    };

    return(
        <section id= "educaionSection" className="md:p-10 sm:p-5 p-2 font-serif">
            <h1 className="md:text-4xl text-lg underline font-extrabold md:py-10 py-5 text-gray-500 uppercase">Education Section</h1>

            <h1 className="md:text-3xl text-lg underline font-extrabold mb-8 text-gray-500">Academic Education</h1>

            <ul className="md:text-2xl text-lg list-disc md:px-20 px-6 ">
                <li className=" mb-3">B.Com from Karachi University</li>
                <li className=" mb-3">I.Com from Board of Intermediate Karachi</li>
                <li className=" mb-3">SSC from Secondary Board Karachi</li>
            </ul>

            <h1 className="md:text-3xl text-lg underline font-extrabold md:py-10 sm:py-5 text-gray-500">Technical Education</h1>
            
            <ul className="md:text-2xl text-lg list-disc md:px-20 px-6">
                <li className=" mb-5">Diploma in Computer Application & Programming from VTIW Buffer Zone Karachi (One year)
                </li>
                <li className="mb-5">
                    Certificate in Hardware & Networking from VTIW Buffer Zone Karachi (6-Month)
                </li>
            </ul>            

        </section>
    ) 
}
