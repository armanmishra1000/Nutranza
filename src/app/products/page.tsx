'use client';

import { useState, useMemo } from 'react';
import { products } from '@/data/products';
import ProductGrid from '@/components/products/ProductGrid';
import ProductFilter from '@/components/products/ProductFilter';
import { Dot, Search, X } from 'lucide-react';

export default function ProductsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [appliedCategories, setAppliedCategories] = useState<string[]>([]);

    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    const toggleFilter = (item: string, current: string[], setFn: (items: string[]) => void) => {
        if (current.includes(item)) {
            setFn(current.filter((i) => i !== item));
        } else {
            setFn([...current, item]);
        }
    };

    const handleApplyFilters = () => {
        setAppliedCategories([...selectedCategories]);
        setIsMobileFilterOpen(false); // Close mobile drawer on apply
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleResetFilters = () => {
        setSelectedCategories([]);
        setAppliedCategories([]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            // Search
            if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                return false;
            }
            // Categories - Uses appliedCategories for deferred filtering (View Results)
            if (appliedCategories.length > 0) {
                const matchesCategory = appliedCategories.some(cat => {
                    // Logic to map the customized specific labels to actual product data
                    if (cat === 'Peanut butter') return product.subCategory === 'Peanut Butter';
                    if (cat === 'Protein Oats') return product.subCategory === 'Oats' && product.name.toLowerCase().includes('protein');
                    if (cat === 'Muesli') return product.subCategory === 'Muesli' || product.category === 'Muesli';
                    if (cat === 'Shilajit') return product.subCategory === 'Ayurveda' || product.name.toLowerCase().includes('shilajit');
                    if (cat === 'Rice Cake') return product.subCategory === 'Rice Cakes' || product.name.toLowerCase().includes('rice cake');
                    if (cat === 'Protein Bar') return product.subCategory === 'Protein Bars' || product.name.toLowerCase().includes('bar');
                    return false;
                });
                if (!matchesCategory) return false;
            }

            return true;
        });
    }, [searchQuery, appliedCategories]);

    return (
        <div className=" bg-white py-20">
            <main className="container">

                <div className='flex items-start gap-8'>

                    {/* Desktop Sticky Sidebar */}
                    <aside className="hidden lg:block w-72 shrink-0 sticky top-28 h-[calc(100vh-8rem)] overflow-hidden">
                        <ProductFilter
                            selectedCategories={selectedCategories}
                            toggleCategory={(c) => toggleFilter(c, selectedCategories, setSelectedCategories)}
                            resetFilters={handleResetFilters}
                            onApply={handleApplyFilters}
                            className="bg-transparent rounded-xl border border-gray-200 overflow-hidden"
                        />
                    </aside>

                    {/* Mobile Filter Drawer */}
                    <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isMobileFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={() => setIsMobileFilterOpen(false)}
                        />

                        {/* Drawer Panel */}
                        <aside
                            className={`absolute inset-y-0 left-0 w-80 max-w-[85vw] transform transition-transform duration-300 ease-in-out ${isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full'}`}
                        >
                            <ProductFilter
                                selectedCategories={selectedCategories}
                                toggleCategory={(c) => toggleFilter(c, selectedCategories, setSelectedCategories)}
                                resetFilters={handleResetFilters}
                                onApply={handleApplyFilters}
                                onClose={() => setIsMobileFilterOpen(false)}
                                className="h-full shadow-2xl rounded-none"
                            />
                        </aside>
                    </div>

                    {/* Content Overlay removed - integrated into drawer */}

                    {/* Main Content */}
                    <div className="flex-1 h-full min-w-0">
                        {/* Header */}
                        <div className="flex flex-col gap-6 mb-8">
                            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                                <div className="space-y-2">
                                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-neutral-900">
                                        Export Catalog
                                    </h1>
                                    <p className="text-neutral-700 text-lg md:text-xl leading-relaxed">
                                        Browse our premium range of health food exports tailored for global markets.
                                    </p>
                                </div>
                            </div>

                            {/* Search & Actions Bar */}
                            <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
                                {/* Search Input */}
                                <div className="relative flex-1">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Search className="text-gray-500 w-5 h-5" />
                                    </div>
                                    <input
                                        type="text"
                                        className="block w-full rounded-full py-3 pl-12 pr-4 border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary"
                                        placeholder="Search by SKU, ingredient, or product name..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>

                                {/* Filters/Sort Row */}
                                <div className="flex items-center gap-3">
                                    <button
                                        className="lg:hidden flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-neutral-900 ring-1 ring-inset ring-gray-200"
                                        onClick={() => setIsMobileFilterOpen(true)}
                                    >
                                        <Search className="w-5 h-5" />
                                        Filters
                                    </button>


                                </div>
                            </div>

                            {/* Stats Bar */}
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center text-sm font-semibold text-secondary ">
                                    {filteredProducts.length} Products Found
                                </span>
                                <Dot size={20} />
                                <span className="text-sm font-semibold text-neutral-900">Showing 1-{filteredProducts.length}</span>
                            </div>
                        </div>

                        <ProductGrid products={filteredProducts} />
                    </div>
                </div>
            </main>
        </div>
    );
}
