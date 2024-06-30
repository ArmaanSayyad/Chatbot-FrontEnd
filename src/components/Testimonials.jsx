// icons
import { FaCircleUser } from "react-icons/fa6";

export default function Testimonials(){

    const services = [
        {
            from: "Anonymous...",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatum veritatis reprehenderit asperiores as"
        },
        {
            from: "Anonymous...",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatum veritatis reprehenderit asperiores as"
        },
        {
            from: "Anonymous...",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatum veritatis reprehenderit asperiores as"
        }
    ];

    return (
        <div className="mb-12 mt-12 px-12 py-4">
            <h2 className="text-4xl font-semibold text-center">Testimonials.</h2>
            <h3 className="text-xl font-medium text-center">Here are some testimonials for our clients.</h3>

            <div className="grid grid-cols-3 gap-4 mt-24">
                {/* services list */}
                {
                    services.map((service, idx) => {
                        return (
                            <div className="flex flex-col gap-8 text-xl font-medium text-center bg-[#d9d9d9] p-4 rounded-lg">
                                <span className="flex justify-center -mt-16"><FaCircleUser className="text-8xl border-4 border-white rounded-full" /></span>
                                <span className="text-base">{service.text}</span>
                                <span className="">{service.from}</span>
                            </div>
                        );
                    })
                }
            </div>
            
        </div>
    );
}