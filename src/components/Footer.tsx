import Link from "next/link"
import Image from "next/image"


export default function Footer() {

    return (
        <div className="flex md:space-x-8 space-x-5">

            <Link href={"https://www.facebook.com/"} target="_blank">
                <Image src={"/footer/facebook.png"} alt="fb" width={30} height={30} className="md:w-7 md:h-7 w-5 h-5 object-contain"></Image>
            </Link>

            <Link href={"https://www.instagram.com/"} target="_blank">
                <Image src={"/footer/insta.png"} alt="insta" width={30} height={30} className="md:w-7 md:h-7 w-5 h-5 object-contain"></Image>
            </Link>

            <Link href={"https://www.youtube.com/"} target="_blank">
                <Image src={"/footer/youtube.png"} alt="youtube" width={30} height={30} className="md:w-10 md:h-7 w-8 h-8 object-contain"></Image>
            </Link>

            <Link href={"https://pk.linkedin.com/"} target="_blank">
                <Image src={"/footer/linkedin.jpg"} alt="linkedin" width={30} height={30} className="md:w-7 md:h-7 w-5 h-5 object-contain"></Image>
            </Link>

        </div>


    )
}
