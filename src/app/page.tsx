"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Truck, Shield, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { sampleProducts, categories } from "@/data/products";

const features = [
  {
    icon: Truck,
    title: "Envío Gratis",
    description: "En compras mayores a $100.000",
  },
  {
    icon: Shield,
    title: "Productos Originales",
    description: "100% garantizados",
  },
  { icon: Gift, title: "Muestras Gratis", description: "En cada pedido" },
];

export default function Home() {
  const bestsellers = sampleProducts.filter((p) => p.isBestseller).slice(0, 4);
  const newProducts = sampleProducts.filter((p) => p.isNew).slice(0, 4);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-full"
          />
        </div>

        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-secondary-foreground">
                  Nueva Colección 2024
                </span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight">
                Descubre la <br />
                <span className="text-gradient">Magia</span> de <br />
                tu Belleza
              </h1>

              <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                Productos premium de cosmética y cuidado personal para realzar
                tu belleza natural. Calidad que se nota, resultados que
                enamoran.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="group">
                  <Link href="/products">
                    Explorar Productos
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/promotions">Ver Promociones</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent rounded-full blur-3xl"
                />
                <Image
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80"
                  alt="Colección de cosméticos"
                  width={800}
                  height={800}
                  priority
                  className="relative z-10 w-full h-full object-cover rounded-3xl shadow-elevated"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-6 -left-6 z-20 bg-background p-4 rounded-2xl shadow-card"
                >
                  <p className="text-sm text-muted-foreground">Más de</p>
                  <p className="font-display text-2xl text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Productos</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-4 -right-4 z-20 bg-background p-4 rounded-2xl shadow-card"
                >
                  <p className="text-sm text-muted-foreground">
                    Clientes felices
                  </p>
                  <p className="font-display text-2xl text-primary">2000+</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-background rounded-2xl shadow-card"
              >
                <div className="p-3 bg-secondary rounded-xl">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Explora por Categoría
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Encuentra exactamente lo que buscas navegando por nuestras
              categorías
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categories
              .filter((c) => c.value !== "todos")
              .map((category, index) => (
                <motion.div
                  key={category.value}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={`/products?type=${category.value}`}
                    className="group flex flex-col items-center p-6 gradient-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-soft transition-all"
                  >
                    <span className="text-4xl mb-3">{category.icon}</span>
                    <span className="font-medium text-sm text-center group-hover:text-primary transition-colors">
                      {category.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-2">
                Más Vendidos
              </h2>
              <p className="text-muted-foreground">
                Los favoritos de nuestros clientes
              </p>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link href="/products">
                Ver todos <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild>
              <Link href="/products">Ver todos los productos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-2">
                Nuevos Productos
              </h2>
              <p className="text-muted-foreground">
                Descubre las últimas novedades
              </p>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link href="/products">
                Ver todos <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl gradient-primary p-12 md:p-16 text-center"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80')",
              }}
            />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-5xl text-primary-foreground mb-4">
                ¡Descuentos Exclusivos!
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
                Suscríbete a nuestro newsletter y recibe un 10% de descuento en
                tu primera compra
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/promotions">Ver Promociones</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
