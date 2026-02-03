import { Product } from '@/data/products';
import { CheckCircle2, Globe } from 'lucide-react';

interface ProductHeaderProps {
    product: Product;
}

export default function ProductHeader({ product }: ProductHeaderProps) {
    return (
        <div className="space-y-4">
            {/* Stock Status and SKU */}
            <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wide rounded">
                    In Stock
                </span>
                {product.sku && (
                    <span className="text-sm text-gray-600">SKU: {product.sku}</span>
                )}
            </div>

            {/* Product Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {product.name}
            </h1>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <CheckCircle2 className="text-primary w-[18px] h-[18px]" />
                    <span className="text-sm font-medium">Premium Export Quality</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5">
                    <Globe className="text-primary w-[18px] h-[18px]" />
                    <span className="text-sm font-medium">Origin: {product.origin}</span>
                </div>
            </div>
        </div>
    );
}
