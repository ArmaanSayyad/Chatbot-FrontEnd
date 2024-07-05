const navigationButtons = [
    {
        text: "Home",
        url: "/"
    },
    {
        text: "About",
        url: "/About"
    }/* ,
    {
        text: "Testimonials",
        url: "/testimonials"
    } */
];

export default function Header(){

    const handleLetsTalkClick = () => {
        window.location.href = "https://askobi-a419d6572051.herokuapp.com";
    };

    return (
        <div className="mb-8 header-container flex justify-between items-center px-12 py-4" style={{ backgroundColor: '#ffffff' }}>
            <div>
                {/* logo */}
                <span className="hidden md:block md:ml-[7.2rem] text-4xl center ">AskObi.</span>
            </div>
            <div className="flex gap-3 ">
                
                {/* menu buttons */}
                {navigationButtons.map((menuItem, idx) => (
                    <a key={idx} href={menuItem.url} className="cursor-pointer hidden md:block">
                        {menuItem.text}
                    </a>
                ))}
                
            </div>
            <div>
                {/* CTA */}
                <button onClick={handleLetsTalkClick} className="bg-[#007bff] text-white font-semibold py-2 px-8 rounded-full hidden md:block">
                    Go To Chat
                </button>
            </div>
        </div>
    );
}