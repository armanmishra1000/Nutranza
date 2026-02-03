'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ZoomIn } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductGalleryProps {
    product: Product;
}

export default function ProductGallery({ product }: ProductGalleryProps) {
    const images = product.images || [product.image];
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

    return (
        <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="aspect-auto h-full w-full flex items-center justify-center rounded-2xl overflow-hidden relative group border border-gray-200">
                <Image
                    src={images[selectedImageIndex]}
                    alt={product.name}
                    width={600}
                    height={600}
                    className="object-contain"
                    priority
                />
                {/* Zoom Button Overlay */}
                <div className="absolute bottom-4 right-4">
                    <button className="bg-white/90 backdrop-blur text-gray-900 p-2 rounded-lg shadow-sm hover:bg-white transition-all">
                        <ZoomIn className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`shrink-0 w-24 h-24 rounded-lg overflow-hidden relative transition-all ${selectedImageIndex === index
                            ? 'border-2 border-primary ring-2 ring-primary/20'
                            : 'border border-gray-300 opacity-70 hover:opacity-100 hover:border-gray-400'
                            }`}
                    >
                        <Image
                            src={image}
                            alt={`${product.name} - Image ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
