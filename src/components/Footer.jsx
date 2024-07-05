// Import the necessary icons
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  const socials = [
    {
      icon: <FaEnvelope color="#222222" />,
      text: "example@example.com",
      link: "mailto:example@example.com"
    },
    {
      icon: <FaLinkedin color="#222222" />,
      text: "LinkedIn",
      link: "https://linkedin.com/in/example"
    }/* ,
    {
      icon: <FaPhone color="#222222" />,
      text: "+1234567890",
      link: "tel:+1234567890"
    } */
  ];

  return (
    <div className="mt-12 p-12 bg-[#222222] text-white flex flex-col items-center">
      <span className="text-8xl font-bold mb-4">Ao.</span>
      <div className="flex gap-8">
        {socials.map((social, idx) => (
          <a
            key={idx}
            href={social.link}
            className="flex items-center gap-2 text-white "
            target="_blank"
          >
            <span className="bg-white text-xl p-2 rounded-full">{social.icon}</span>
            <span>{social.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
