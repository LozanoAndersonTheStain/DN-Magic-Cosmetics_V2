"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/contexts/cart-context";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1, product.sizes[0]);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group relative"
    >
      <Link href={`/producto/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted mb-4">
          <motion.img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <Badge
                variant="secondary"
                className="bg-primary text-primary-foreground"
              >
                Nuevo
              </Badge>
            )}
            {product.isBestseller && (
              <Badge variant="secondary" className="bg-gold text-foreground">
                <Star className="w-3 h-3 mr-1 fill-current" />
                Bestseller
              </Badge>
            )}
            {product.originalPrice && (
              <Badge variant="destructive">
                -{Math.round((1 - product.price / product.originalPrice) * 100)}
                %
              </Badge>
            )}
          </div>

          {/* Quick Actions */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-background/90 backdrop-blur-sm rounded-full shadow-soft hover:bg-background transition-colors"
              aria-label="Agregar a favoritos"
            >
              <Heart className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Quick Add Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Button
              onClick={handleQuickAdd}
              className="w-full shadow-md"
              size="sm"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Agregar al Carrito
            </Button>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            {product.type.replace("-", " ")}
          </p>
          <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          <div className="flex items-center gap-2">
            <span className="font-display text-lg text-primary">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          {product.colorVariants && product.colorVariants.length > 0 && (
            <div className="flex gap-1.5 pt-1">
              {product.colorVariants.map((variant, i) => (
                <span
                  key={i}
                  className="w-4 h-4 rounded-full border-2 border-border"
                  style={{ backgroundColor: variant.color }}
                  title={`Color ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
