"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { SlidersHorizontal, Grid3X3, Grid2X2 } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { sampleProducts, categories } from "@/data/products";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [gridCols, setGridCols] = useState<2 | 3 | 4>(3);

  const activeType = searchParams.get("type");

  const filteredProducts = useMemo(() => {
    if (!activeType || activeType === "todos") return sampleProducts;
    return sampleProducts.filter((p) => p.type === activeType);
  }, [activeType]);

  const handleCategoryChange = (type: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (type === "todos") {
      params.delete("type");
    } else {
      params.set("type", type);
    }

    const queryString = params.toString();
    router.push(queryString ? `/products?${queryString}` : "/products");
  };

  return (
    <main className="pt-20 md:pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl mb-4">
            Nuestros Productos
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Explora nuestra colección completa de productos de belleza y cuidado
            personal
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <SlidersHorizontal className="w-5 h-5 text-muted-foreground" />
            <span className="font-medium">Filtrar por:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={
                  activeType === category.value ||
                  (!activeType && category.value === "todos")
                    ? "default"
                    : "outline"
                }
                size="sm"
                onClick={() => handleCategoryChange(category.value)}
                className="rounded-full"
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Grid Controls & Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-between mb-8"
        >
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">
              {filteredProducts.length}
            </span>{" "}
            productos encontrados
          </p>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant={gridCols === 2 ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setGridCols(2)}
              aria-label="Vista de 2 columnas"
            >
              <Grid2X2 className="w-4 h-4" />
            </Button>
            <Button
              variant={gridCols === 3 ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setGridCols(3)}
              aria-label="Vista de 3 columnas"
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div
          className={`grid gap-6 ${
            gridCols === 2
              ? "grid-cols-2"
              : gridCols === 3
                ? "grid-cols-2 lg:grid-cols-3"
                : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          }`}
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">
              No se encontraron productos en esta categoría.
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}
