import { RiStarSFill } from "react-icons/ri";

export default function Hero(){
    return (
        <div className="mt-12 mb-36 flex items-center justify-center px-20 py-4">
            <div className="flex flex-col gap-4 md:gap-8 md:flex-row">
                {/* left */}
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-4xl lg:text-6xl font-extrabold leading-snug mb-4 text-center md:ml-20 md:mt-16">AI Wiki on Disability Policies and Regulations</h1>
                    <div className="flex gap-2 md:gap-4 text-lg font-medium justify-center md:justify-start ml-4 md:ml-8">
                        {/* taglines */}
                        <div className="flex items-center md:ml-36"><RiStarSFill color="#f9db4b" /><span>Advisor</span></div>
                        <div className="flex items-center"><RiStarSFill color="#f9db4b" /><span>Companion</span></div>
                        <div className="flex items-center"><RiStarSFill color="#f9db4b" /><span>Counsel</span></div>
                    </div>
                    <div className="flex justify-center md:justify-start mt-4 ml-4 md:ml-64 ">
                        {/* button */}
                        <a href="https://askobi-a419d6572051.herokuapp.com" target="_blank" rel="noopener noreferrer" className="bg-black border-2 border-[#222222] text-white font-semibold py-2 px-8 rounded-full">
                            Chat Now!
                        </a>
                    </div>
        
                </div>
                <div className="ml-0 mt-4 md:ml-8 md:mt-28">
                    {/* right image section */}
                    <img className="w-96 md:w-[70rem] " src="/picture.png" alt="Placeholder" />
                </div>
            </div>
        </div>
    );
}
