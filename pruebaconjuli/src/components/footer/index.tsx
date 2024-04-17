import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiLinkedinLine,
  RiTwitterLine,
  RiYoutubeLine,
} from "@remixicon/react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-red-600 to-red-300 h-auto sticky w-full py-16 ">
      <div className="md:w-3/4  md:m-auto mx-4 flex justify-around h">
        <div>
          <h1 className="text-xl mb-4">SERVICIO AL CLIENTE</h1>
          <ul>
            <li>peticiones quejas y Reclamos</li>
            <li>Metodos de pago</li>
            <li>Devoluciones y Reembolsos</li>
            <li>Garantias</li>
            <li>Contactanos</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl mb-4">ACERCA DE RAMITECH</h1>
          <ul>
            <li>sobre Nosotros</li>
            <li>Politica de cookies</li>
            <li>Politica de privacidad</li>
            <li>Politica de devoluciones</li>
            <li>Politica de garantias</li>
            <li>trabaja con nosotros</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl mb-4">SIGUENOS</h1>
          <ul>
            <li className="flex gap-2">
              <RiFacebookCircleLine color="#ffffff" size={25} />
              Facebook
            </li>

            <li className="flex gap-2">
              <RiInstagramLine color="#ffffff" size={25} />
              Instagram
            </li>
            <li className="flex gap-2">
              {" "}
              <RiTwitterLine color="#ffffff" size={25} /> Twitter
            </li>
            <li className="flex gap-2">
              <RiLinkedinBoxLine color="#ffffff" size={25} />
              Linkedin
            </li>
            <li className="flex gap-2">
              <RiYoutubeLine color="#ffffff" size={25} />
              Youtube
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
