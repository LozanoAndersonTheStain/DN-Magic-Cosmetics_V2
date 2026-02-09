"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { useFavorites } from "@/contexts/favorites-context";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";

export default function FavoritesPage() {
  const { favorites, totalFavorites } = useFavorites();

  return (
    <main className="pt-20 md:pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Empty State */}
        {favorites.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto text-center py-12 mt-20"
          >
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-muted-foreground" />
            </div>
            <h2 className="font-display text-2xl mb-3">
              No tienes favoritos aún
            </h2>
            <p className="text-muted-foreground mb-8">
              Explora nuestros productos y marca tus favoritos para verlos aquí
            </p>
            <Button asChild size="lg">
              <Link href="/products">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Explorar Productos
              </Link>
            </Button>
          </motion.div>
        ) : (
          <>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl mb-4">
                Mis Favoritos
              </h1>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Tienes {totalFavorites}{" "}
                {totalFavorites === 1
                  ? "producto favorito"
                  : "productos favoritos"}
              </p>
            </motion.div>

            {/* Products Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {favorites.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </div>

              {/* Action Button */}
              <div className="text-center mt-12">
                <Button asChild variant="outline" size="lg">
                  <Link href="/products">Seguir Explorando</Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}

        {/* TODO: Auth Notice */}
        {/* Cuando se implemente auth, mostrar mensaje si no está autenticado */}
        {/* {!user && (
          <div className="mt-12 p-6 bg-secondary rounded-2xl text-center">
            <p className="text-muted-foreground mb-4">
              Inicia sesión para sincronizar tus favoritos en todos tus dispositivos
            </p>
            <Button asChild>
              <Link href="/auth">Inicia Sesión</Link>
            </Button>
          </div>
        )} */}
      </div>
    </main>
  );
}
