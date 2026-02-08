"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Menu,
  X,
  Search,
  Heart,
  User,
  LogOut,
  Settings,
  Package,
} from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/promociones", label: "Promociones" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleCart, totalItems } = useCart();
  const pathname = usePathname();

  // TODO: Implementar autenticación
  const user = null;
  const isAdmin = false;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 -ml-2 hover:bg-accent rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.img
                src="/logo.svg"
                alt="DN Magic Cosmetics"
                className="h-10 md:h-12 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group"
                >
                  <span
                    className={`font-body text-sm tracking-wide transition-colors ${
                      pathname === link.href
                        ? "text-primary font-medium"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: pathname === link.href ? "100%" : 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex"
                aria-label="Buscar"
              >
                <Search className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex"
                aria-label="Favoritos"
              >
                <Heart className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleCart}
                className="relative"
                aria-label="Carrito de compras"
              >
                <ShoppingBag className="w-5 h-5" />
                <AnimatePresence>
                  {totalItems > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center justify-center"
                    >
                      {totalItems}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>

              {/* User Menu */}
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <User className="w-5 h-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <div className="px-2 py-1.5 text-sm text-muted-foreground">
                      {/* {user.email} */}
                    </div>
                    <DropdownMenuSeparator />
                    {isAdmin && (
                      <DropdownMenuItem asChild>
                        <Link href="/admin">
                          <Settings className="mr-2 h-4 w-4" />
                          Panel Admin
                        </Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem asChild>
                      <Link href="/mis-pedidos">
                        <Package className="mr-2 h-4 w-4" />
                        Mis Pedidos
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <LogOut className="mr-2 h-4 w-4" />
                      Cerrar Sesión
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/auth">Ingresar</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-30 lg:hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-body py-2 transition-colors ${
                      pathname === link.href
                        ? "text-primary font-medium"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="border-t pt-4 mt-2">
                  {user ? (
                    <>
                      <p className="text-sm text-muted-foreground mb-3">
                        {/* {user.email} */}
                      </p>
                      {isAdmin && (
                        <Link
                          href="/admin"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-2 py-2 text-foreground/80 hover:text-primary transition-colors"
                        >
                          <Settings className="w-4 h-4" />
                          Panel Admin
                        </Link>
                      )}
                      <Link
                        href="/mis-pedidos"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2 py-2 text-foreground/80 hover:text-primary transition-colors"
                      >
                        <Package className="w-4 h-4" />
                        Mis Pedidos
                      </Link>
                      <button
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          // TODO: handleSignOut();
                        }}
                        className="flex items-center gap-2 py-2 text-destructive hover:text-destructive/80 transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        Cerrar Sesión
                      </button>
                    </>
                  ) : (
                    <Link
                      href="/auth"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 py-2 text-primary font-medium hover:text-primary/80 transition-colors"
                    >
                      <User className="w-4 h-4" />
                      Ingresar
                    </Link>
                  )}
                </div>

                {/* Mobile Search & Favorites */}
                <div className="flex gap-2 pt-4 border-t">
                  <Button variant="outline" className="flex-1" size="sm">
                    <Search className="w-4 h-4 mr-2" />
                    Buscar
                  </Button>
                  <Button variant="outline" className="flex-1" size="sm">
                    <Heart className="w-4 h-4 mr-2" />
                    Favoritos
                  </Button>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer para evitar que el contenido quede debajo del navbar fijo */}
      <div className="h-16 md:h-20" />
    </>
  );
}
