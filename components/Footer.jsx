import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import Image from "next/image";
0;

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        {/* Company Info */}
        <div>
          <Image
            src="/images/logob.png"
            alt="ILLUMINATI Construction Logo"
            width={150}
            height={40}
            priority
          />
          <p className="text-sm leading-relaxed mb-6">
            Professionally managed construction & contracting company delivering
            architectural, structural and finishing solutions with precision and
            reliability.
          </p>

          {/* Social Media */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/illuminati.563?igsh=MTd5bjEwbHVrNXdo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/20 hover:bg-[#F59E0B] hover:text-black transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/20 hover:bg-[#F59E0B] hover:text-black transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/20 hover:bg-[#F59E0B] hover:text-black transition"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-[#F59E0B]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#F59E0B]">
                Services
              </Link>
            </li>
            <li>
              <Link href="/clients" className="hover:text-[#F59E0B]">
                Clients
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#F59E0B]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Ferrocement Works</li>
            <li>GRC & FRP Works</li>
            <li>Façades & Claddings</li>
            <li>Architectural Mouldings</li>
            <li>Customized Civil Works</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 India</li>

            <li>
              📞{" "}
              <a
                href="tel:+919892352223"
                className="hover:underline hover:text-red-400 transition"
              >
                +91 98923 52223 (Rajdev Jaiswal)
              </a>
            </li>
            <li>
              📞{" "}
              <a
                href="tel:+917400077563"
                className="hover:underline hover:text-red-400 transition"
              >
                +91 74000 77563 (Chetan Jaiswal)
              </a>
            </li>

            <li>
              ✉️{" "}
              <a
                href="mailto:chetan@illuminati.net.in"
                className="hover:underline hover:text-red-400 transition"
              >
                @chetan@illuminati.net.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ILLUMINATI Construction. All Rights
        Reserved.
      </div>
    </footer>
  );
}
