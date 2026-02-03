import { Product } from '@/data/products';
import { Send } from 'lucide-react';

interface B2BActionsProps {
    product: Product;
}

export default function B2BActions({ product }: B2BActionsProps) {
    return (
        <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
            {/* MOQ Display */}
            <div className="flex items-baseline gap-2 mb-4">
                <span className="text-sm text-gray-600 font-medium">Min. Order Quantity:</span>
                <span className="text-lg font-bold text-gray-900">{product.specs.moq}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-primary hover:bg-primary/90 text-gray-900 font-bold py-3.5 px-6 rounded-lg shadow-sm transition-all flex justify-center items-center gap-2">
                    <span>Request Inquiry</span>
                    <Send className="w-5 h-5" />
                </button>
                <button className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-900 font-bold py-3.5 px-6 rounded-lg shadow-sm transition-all">
                    Request Sample
                </button>
            </div>

            {/* Response Time Message */}
            <div className="mt-4 text-xs text-center text-gray-600">
                Typically responds within 24 hours. B2B Verified Supplier.
            </div>
        </div>
    );
}
