
import Link from "next/link"

export default function Navbar() {

    return (
        <nav className={" bg-gray-500 sm:py-8 py-4 md:font-extrabold sm:bold font-normal md:text-lg text-sm font-serif text-white px-2 lg:px-5"}>

            {/* This is a utility class from Tailwind CSS that sets the maximum width of an element and centers it horizontally. It applies specific widths based on breakpoints (e.g., sm, md, lg, xl, 2xl). It also adds some padding to the left and right, ensuring that your content doesn’t touch the edges of the viewport. */}
            <ul className={"flex gap-3 md:gap-5"}>
                <li>
                    <Link href={"#personalInfo"} className="hover:text-yellow-400">Personal Information</Link>
                </li>
                <li>
                    <Link href={"#skillSection"} className="hover:text-yellow-400">Skills Section</Link>
                </li>
                <li>
                    <Link href={"#educaionSection"} className="hover:text-yellow-400">Academic Education</Link>
                </li>
                <li>
                    <Link href={"#experienceSection"} className="hover:text-yellow-400">Job Experience</Link>
                </li>
            </ul>
        </nav>
    )
} 
