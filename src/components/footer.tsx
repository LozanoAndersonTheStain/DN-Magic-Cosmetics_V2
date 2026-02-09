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
              Descubre la magia de la belleza con productos de alta calidad para
              el cuidado de tu piel y cabello.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com/dnmagiccosmetics"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@magic_cosmetics_d.n"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
                aria-label="TikTok"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
                </svg>
              </a>
              <a
                href="mailto:magicmakeup007@gmail.com"
                className="p-3 bg-background/10 rounded-full hover:bg-background/20 transition-colors"
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
                  href="/products"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Todos los Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/promotions"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Promociones
                </Link>
              </li>
              <li>
                <Link
                  href="/products?type=cuidado-facial"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Cuidado Facial
                </Link>
              </li>
              <li>
                <Link
                  href="/products?type=cuidado-capilar"
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
                  href="/products?type=labios"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Labios
                </Link>
              </li>
              <li>
                <Link
                  href="/products?type=ojos"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Ojos
                </Link>
              </li>
              <li>
                <Link
                  href="/products?type=unas"
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  Uñas
                </Link>
              </li>
              <li>
                <Link
                  href="/products?type=brochas"
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
