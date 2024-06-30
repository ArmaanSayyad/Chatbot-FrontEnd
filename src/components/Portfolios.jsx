// icons
import { FaFigma } from "react-icons/fa";

export default function Portfolios(){

    const portfolios = [
        {
            icon: <FaFigma className="text-3xl" />,
            title: "UI / UX Designing",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo sit officiis ab eaque eligendi corporis odio vel minima distinctio blanditiis amet error quisquam omnis, aspernatur rem vitae, maiores provident?"
        },
        {
            icon: <FaFigma className="text-3xl" />,
            title: "UI / UX Designing",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo sit officiis ab eaque eligendi corporis odio vel minima distinctio blanditiis amet error quisquam omnis, aspernatur rem vitae, maiores provident?"
        },
        {
            icon: <FaFigma className="text-3xl" />,
            title: "UI / UX Designing",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo sit officiis ab eaque eligendi corporis odio vel minima distinctio blanditiis amet error quisquam omnis, aspernatur rem vitae, maiores provident?"
        },
        {
            icon: <FaFigma className="text-3xl" />,
            title: "UI / UX Designing",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo sit officiis ab eaque eligendi corporis odio vel minima distinctio blanditiis amet error quisquam omnis, aspernatur rem vitae, maiores provident?"
        },
        {
            icon: <FaFigma className="text-3xl" />,
            title: "UI / UX Designing",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo sit officiis ab eaque eligendi corporis odio vel minima distinctio blanditiis amet error quisquam omnis, aspernatur rem vitae, maiores provident?"
        },
    ];

    return (
        <div className="mb-12 px-12 py-4">
            <h2 className="text-4xl font-semibold text-center">Portfolios.</h2>
            <h3 className="text-xl font-medium text-center">Click on the cards to see my portfolios of related category.</h3>

            <div className="grid grid-cols-3 gap-4 mt-12">
                {/* services list */}
                {
                    portfolios.map((portfolio, idx) => {
                        return (
                            <div className="flex flex-col gap-6 text-xl font-medium border-2 border-[#222222] p-4 rounded-md text-left">
                                <span>{portfolio.icon}</span>
                                <span className="text-2xl">{portfolio.title}</span>
                                <span className="font-light">{portfolio.text}</span>
                            </div>
                        );
                    })
                }

                {/* let's talk component */}
                <div className="flex flex-col justify-center gap-6 text-xl font-medium border-2 border-[#222222] p-4 rounded-md text-left">
                    <span className="text-2xl">Want your stunning designs</span>
                    <span className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, iusto</span>
                    <button className="bg-[#222222] text-white py-2 px-8 rounded-full">Let's Talk.</button>
                </div>

            </div>
            
        </div>
    );
}