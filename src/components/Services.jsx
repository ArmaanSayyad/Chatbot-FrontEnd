import { MdOutlineMenuBook } from "react-icons/md";

export default function Services() {
    const services = [
        { icon: <MdOutlineMenuBook />, text: "Policies" },
        { icon: <MdOutlineMenuBook />, text: "Financial Aid" },
        { icon: <MdOutlineMenuBook />, text: "Transportation Designs" },
        { icon: <MdOutlineMenuBook />, text: "Empowerment Schemes" },
        { icon: <MdOutlineMenuBook />, text: "Blank" },
        { icon: <MdOutlineMenuBook />, text: "Blank" },
    ];

    return (
        <div className="mb-52 mt-52 px-12 py-4">
            <h2 className="text-4xl font-semibold text-center">Empowering citizens around the globe!</h2>
            <h3 className="text-xl font-medium text-center">Here is the information available to you!</h3>

            {/* Band around services */}
            <div className="border-t-4 border-b-4 border-gray-300 mt-8 py-12">
                <div className="relative overflow-hidden whitespace-nowrap" style={{ width: '100%' }}>
                    <div className="marquee">
                        {[...services, ...services].map((service, idx) => (
                            <div key={idx} className="inline-flex items-center gap-4 text-xl font-medium px-4">
                                {service.icon}
                                <span>{service.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Text above image */}
            <h2 className="text-4xl font-semibold text-center mt-80">Powered by over 3,000 unique resources</h2>

            {/* Image section */}
            <div className="relative w-full mt-8">
                <img
                    src="/wavePic.png"
                    alt="Placeholder"
                    style={{ width: '100%', height: 'auto', maxHeight: '500px' }}
                    className="block mx-auto"
                />
            </div>

            <style jsx>{`
                @keyframes marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-100%); }
                }

                .marquee {
                    display: flex;
                    animation: marquee 15s linear infinite;
                }

                .marquee > * {
                    flex: 0 0 auto;
                }
            `}</style>
        </div>
    );
}
