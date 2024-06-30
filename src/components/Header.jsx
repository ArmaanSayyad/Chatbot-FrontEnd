const navigationButtons = [
    {
        text: "Home",
        url: "/"
    },
    {
        text: "About",
        url: "/About"
    },
    {
        text: "Testimonials",
        url: "/testimonials"
    }
];

export default function Header(){

    const handleLetsTalkClick = () => {
        window.location.href = "https://ask-obi-90c3b991758d.herokuapp.com";
    };

    return (
        <div className="mb-8 header-container flex justify-between items-center px-12 py-4" style={{ backgroundColor: '#ffffff' }}>
            <div>
                {/* logo */}
                <span className="ml-[7.2rem] text-4xl ">AskObi.</span>
            </div>
            <div className="flex gap-3">
                {/* menu buttons */}
                {navigationButtons.map((menuItem, idx) => (
                    <a key={idx} href={menuItem.url} className="cursor-pointer">
                        {menuItem.text}
                    </a>
                ))}
            </div>
            <div>
                {/* CTA */}
                <button onClick={handleLetsTalkClick} className="bg-[#007bff] text-white font-semibold py-2 px-8 rounded-full">
                    Go To Chat
                </button>
            </div>
        </div>
    );
}