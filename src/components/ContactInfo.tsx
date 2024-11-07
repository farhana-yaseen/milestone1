
import Link from "next/link"
import Footer from "./Footer"
import Form from "./Form"


export default function ContactInfo() {

    return (
        <section id="contactInfo" className=" font-serif md:px-10 px-5 ">

            <div className="md:text-5xl text-lg md:font-extrabold font-bold uppercase 2xl:p-10">
                <h1 className="text-center my-10 text-gray-500">Contact Us</h1>
                <h2 className="md:text-4xl text-lg bg-gray-500 p-2 rounded-full text-white">Get in Touch</h2>
            </div>



            <div className="lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-12">
                <div>
                    <Form />
                </div>

                <div className="lg:mt-36 xl:mt-24 2xl:mt-10 ">
                    <img src="/contactUs.jpg" alt="contactus" className="border-gray-500 border-2 rounded-md object-contain " />
                </div>
            </div>

            <div className="md:text-2xl text-lg my-10">
                <p className="mb-5">Phone No.: 0344-2760527 </p>
                <p className="mb-5">Email Adress: farhanayaseen2@gmail.com</p>
                <p className="mb-5">Adress: Karachi</p>
                <h1></h1>
            </div>
            <Footer/>

            <div className='flex justify-center items-center'>
                <Link href={"/"} className='text-white text-center text-sm  font-normal lg:text-lg lg:font-bold 2xl:text-xl 2xl:font-extrabold font-serif'>
                    <button className='bg-gray-500 w-28 h-8 md:w-32 md:h-10 lg:w-40 lg:h-12  2xl:w-48 2xl:h-14 rounded-lg border-2 border-black animate-bounce '>Back</button>
                </Link>
            </div>

        </section>
    )
}
