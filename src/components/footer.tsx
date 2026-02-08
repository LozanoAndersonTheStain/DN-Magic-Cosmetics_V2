"use client";

import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="relative h-12 w-32">
              <Image
                src="/logo.svg"
                alt="DN Magic Cosmetics"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Descubre la magia de la belleza con productos de alta calidad
              para el cuidado de tu piel y cabello.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com/dnmagiccosmetics"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@magic_cosmetics_d.n"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M9.75 3C8.23122 3 7 4.23122 7 5.75V12.25C7 13.7688 8.23122 15 9.75 15H12V9H14.25C15.7688 9 17 7.76878 17 6.25V4H15V5.75C15 6.16421 14.6642 6.5 14.25 6.5H12V3H9.75Z" />
                </svg>
              </a>
               <a
                href="mailto:magicmakeup007@gmail.com"
                className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-6">Navegación</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/productos"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Todos los Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/promociones"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Promociones
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?type=cuidado-facial"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Cuidado Facial
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?type=cuidado-capilar"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Cuidado Capilar
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg mb-6">Categorías</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/productos?type=labios"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Labios
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?type=ojos"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Ojos
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?type=unas"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Uñas
                </Link>
              </li>
              <li>
                <Link
                  href="/productos?type=brochas"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Brochas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  Medellín, Colombia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+573222445259"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  +57 322 244 5259
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:magicmakeup007@gmail.com"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  magicmakeup007@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} DN Magic Cosmetics. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="/terminos"
              className="text-background/50 hover:text-background text-sm transition-colors"
            >
              Términos y Condiciones
            </Link>
            <Link
              href="/privacidad"
              className="text-background/50 hover:text-background text-sm transition-colors"
            >
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
     </footer>
  );
}