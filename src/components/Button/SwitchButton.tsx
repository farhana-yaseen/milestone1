"use client"

import { useState } from "react"
import SkillSection from "../SkillSection";
import EducationSection from "../EducationSection";
import ExperienceSection from "../ExperienceSection";

export default function SwitchButton() {

    const [skill, setSkill] = useState(true);
    const [education, setEducation] = useState(true);
    const [experience, setExperience] = useState(true);


    const resumeSection = (section: any) => {
        switch (section) {
            case 1:
                setSkill(!skill)
                break;
            case 2:
                setEducation(!education)
                break;
            case 3:
                setExperience(!experience)
                break;
            default:
                break;
        }
    };

    return (


        <div className="p-10 flex flex-col justify-center items-center transition-opacity duration-500 ">

            <div>
                {skill && <SkillSection />}
                <button onClick={() => resumeSection(1)} className='text-white text-center text-sm font-normal lg:text-lg lg:font-bold 2xl:text-xl 2xl:font-bold py-1 md:py-2 px-1 bg-gray-500 w-28 h-12 md:w-32 md:h-10 lg:w-40 lg:h-16 2xl:w-48 2xl:h-20 rounded-lg border-2 border-black font-serif'>
                    {skill ? "Skill Section Hide" : "Skill Section Show"}
                </button>


                {education && <EducationSection />}
                <button onClick={() => resumeSection(2)} className='text-white text-center text-sm font-normal lg:text-lg lg:font-bold 2xl:text-xl 2xl:font-bold py-1 md:py-2 px-1 bg-gray-500 w-28 h-12 md:w-32 md:h-10 lg:w-40 lg:h-16 2xl:w-48 2xl:h-20 rounded-lg border-2 border-black font-serif'>
                    {education ? "Education Section Hide" : "Education Section Show"}
                </button>


                {experience && <ExperienceSection />}
                <button onClick={() => resumeSection(3)} className='text-white text-center text-sm font-normal lg:text-lg lg:font-bold 2xl:text-xl 2xl:font-bold py-1 md:py-2 px-1 bg-gray-500 w-28 h-12 md:w-32 md:h-10 lg:w-40 lg:h-16 2xl:w-48 2xl:h-20 rounded-lg border-2 border-black font-serif'>
                    {experience ? "Experience Section Hide" : "Experience Section Show"}
                </button>

            </div>


        </div>

    )
}