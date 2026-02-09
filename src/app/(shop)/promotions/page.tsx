"use client";

import { motion } from "framer-motion";
import { getPromotions, sampleProducts } from "@/data/products";
import { Gift, Percent, Sparkles } from "lucide-react";
import { ProductCard } from "@/components/product-card";

export default function PromotionsPage() {
  const setProducts = getPromotions();
  const discountedProducts = sampleProducts.filter((p) => p.originalPrice);

  return (
    <main className="pb-20 min-h-screen">
      {/* Hero Banner */}
      <section className="relative overflow-hidden gradient-primary py-20 mb-12">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">
                Ofertas Especiales
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-white mb-4">
              Promociones
            </h1>
            <p className="text-white/90 text-lg max-w-lg mx-auto">
              Aprovecha nuestras ofertas exclusivas y ahorra en tus productos
              favoritos
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Sets / Kits Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-secondary rounded-lg">
              <Gift className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl">
                Sets y Kits
              </h2>
              <p className="text-muted-foreground text-sm">
                Combos especiales con todo lo que necesitas
              </p>
            </div>
          </div>

          {setProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {setProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted/30 rounded-2xl">
              <Gift className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                No hay sets disponibles por el momento
              </p>
            </div>
          )}
        </motion.section>

        {/* Discounted Products Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20}}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-destructive/10 rounded-lg">
              <Percent className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl">
                Con descuento
              </h2>
              <p className="text-muted-foreground text-sm">
                Productos con precios especiales por tiempo limitado
              </p>
            </div>
          </div>

          {discountedProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {discountedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted/30 rounded-2xl">
              <Percent className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                No hay productos con descuento por el momento
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
