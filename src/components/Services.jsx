import { MdOutlineMenuBook } from "react-icons/md";
import Flag from 'react-world-flags';

const countries = [
    { name: 'Australia', code: 'AU' },
    { name: 'United States', code: 'US' },
    { name: 'Canada', code: 'CA' },
    { name: 'Japan', code: 'JP' },
    { name: 'Brazil', code: 'BR' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Singapore', code: 'SG' },
    { name: 'UAE', code: 'AE' },
    { name: 'Spain', code: 'ES' },
    { name: 'Thailand', code: 'TH' },
    { name: 'UK', code: 'GB' },
    { name: 'France', code: 'FR' },
    { name: 'Greece', code: 'GR' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'India', code: 'IN' },
    { name: 'China', code: 'CN' },
    { name: 'European Union', code: 'EU' }, // Placeholder
    { name: 'Russia', code: 'RU' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'South Korea', code: 'KR' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Turkey', code: 'TR' },
    { name: 'WHO', flagUrl: 'https://www.who.int/images/default-source/infographics/who-emblem.png' },
    { name: 'UN', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/UN_emblem_blue.svg'},
    { name: 'UNICEF', flagUrl: 'https://1000logos.net/wp-content/uploads/2017/06/emblem-UNICEF.jpg' },
];

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
        <div className="mb-52 mt-20 px-12 py-4">
            <h2 className="text-4xl font-semibold text-center">Empowering citizens around the globe!</h2>
            <h3 className="text-xl font-medium text-center">Here is the information available to you!</h3>
            
            {/* Countries Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-12">
                {countries.map((country, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="h-12 w-12 mb-2 overflow-hidden">
                            {country.flagUrl ? (
                                <img src={country.flagUrl} alt={country.name} className="h-full w-full object-cover" />
                            ) : (
                                <Flag code={country.code} className="h-full w-full object-cover" alt={country.name} />
                            )}
                        </div>
                        <p className="text-center">{country.name}</p>
                    </div>
                ))}
            </div>

            {/* Band around services */}
            <div className="border-t-4 border-b-4 border-gray-300 mt-12 py-12">
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
            <h2 className="text-4xl font-semibold text-center mt-52">Powered by over 3,000 unique resources</h2>

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
