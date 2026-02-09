"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Star,
  Check,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { sampleProducts, formatPrice } from "@/data/products";
import { useCart } from "@/contexts/cart-context";
import { useFavorites } from "@/contexts/favorites-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/product-card";

export default function ProductDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const { addItem } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const product = sampleProducts.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product?.sizes[0],
  );
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    product?.colorVariants?.[0]?.color,
  );
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="pt-20 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl mb-4">Producto no encontrado</h1>
          <Button asChild>
            <Link href="/products">Volver a productos</Link>
          </Button>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity, selectedSize, selectedColor);
  };

  const relatedProducts = sampleProducts
    .filter((p) => p.type === product.type && p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="pt-10 md:pt-15 pb-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <Link
            href="/products"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Volver a productos
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-square relative overflow-hidden rounded-2xl bg-muted">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative w-full h-full"
              >
                <Image
                  src={product.images[selectedImage]}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority={selectedImage === 0}
                />
              </motion.div>
              {product.isNew && (
                <Badge className="absolute top-4 left-4 bg-primary">
                  Nuevo
                </Badge>
              )}
              {product.isBestseller && (
                <Badge className="absolute top-4 right-4 bg-gold text-foreground">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Bestseller
                </Badge>
              )}
            </div>

            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? "border-primary"
                        : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                {product.type.replace("-", " ")}
              </p>
              <h1 className="font-display text-3xl md:text-4xl mb-4">
                {product.title}
              </h1>
              <div className="flex items-center gap-4">
                <span className="font-display text-3xl text-primary">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <Badge variant="destructive">
                      -
                      {Math.round(
                        (1 - product.price / product.originalPrice) * 100,
                      )}
                      %
                    </Badge>
                  </>
                )}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            {product.sizes.length > 1 && (
              <div>
                <p className="font-medium mb-3">Tamaño</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all ${
                        selectedSize === size
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colorVariants && product.colorVariants.length > 0 && (
              <div>
                <p className="font-medium mb-3">Color</p>
                <div className="flex gap-3">
                  {product.colorVariants.map((variant) => (
                    <button
                      key={variant.color}
                      onClick={() => setSelectedColor(variant.color)}
                      className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedColor === variant.color
                          ? "border-primary scale-110"
                          : "border-border hover:scale-105"
                      }`}
                      style={{ backgroundColor: variant.color }}
                      aria-label={`Color ${variant.color}`}
                    >
                      {selectedColor === variant.color && (
                        <Check className="w-5 h-5 text-white drop-shadow-md" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <p className="font-medium mb-3">Cantidad</p>
              <div className="inline-flex items-center gap-4 border border-border rounded-lg px-4 py-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-8 w-8"
                  aria-label="Disminuir cantidad"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-8 w-8"
                  aria-label="Aumentar cantidad"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  product.inStock > 0 ? "bg-green-500" : "bg-red-500"
                }`}
              />
              <span className="text-sm text-muted-foreground">
                {product.inStock > 0
                  ? `${product.inStock} unidades disponibles`
                  : "Agotado"}
              </span>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="flex-1"
                disabled={product.inStock === 0}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Agregar al Carrito
              </Button>
              <Button
                variant={isFavorite(product.id) ? "default" : "outline"}
                size="lg"
                onClick={() => toggleFavorite(product)}
                aria-label={
                  isFavorite(product.id)
                    ? "Quitar de favoritos"
                    : "Agregar a favoritos"
                }
              >
                <Heart
                  className={`w-5 h-5 ${isFavorite(product.id) ? "fill-current" : ""}`}
                />
              </Button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="text-center">
                <Truck className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">
                  Envío gratis +$100k
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">100% Original</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">
                  30 días devolución
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="font-display text-2xl md:text-3xl mb-8">
              Productos Relacionados
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p, index) => (
                <ProductCard key={p.id} product={p} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
