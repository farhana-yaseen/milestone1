
export default function Form() {

    return (
        <form className="md:my-14 my-10 bg-gray-500 border-4 border-x-zinc-700 md:p-10 p-5">

            <div className="flex md:space-x-10 space-x-5 ">
                <input type="text" placeholder="Name" required className="text-black rounded-md  focus:ring-yellow-500 md:w-80 w-32 md:h-10 h-8" />
                <input type="email" name="email" id="email" placeholder="Email" className="text-black border-white border-8 rounded-md  focus:ring-yellow-500 md:w-80 w-32 md:h-10 h-8" />
            </div>

            <div className="flex flex-col space-y-10 md:py-10 py-5">
                <input type="text" placeholder="Subject" className="text-black border-white border-8 rounded-md  focus:ring-yellow-500 md:w-auto w-64 md:h-10 h-8" />
                <textarea name="message" id="message" placeholder="Type your Message" required className="text-black border-white border-8 rounded-md  focus:ring-yellow-500 h-40"></textarea>
                <br /><br />
            </div>
            <div className="flex justify-center">
                <input type="submit" value="Send" className="bg-white rounded-md w-32 h-8 text-gray-500 font-extrabold hover:bg-black" />
            </div>
        </form>
    )
}
