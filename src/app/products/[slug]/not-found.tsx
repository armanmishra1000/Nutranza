import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="bg-white min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Product Not Found</h2>
                <p className="text-gray-600 mb-8">
                    Sorry, we couldn&apos;t find the product you&apos;re looking for.
                </p>
                <Link
                    href="/products"
                    className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-gray-900 font-bold rounded-lg transition-colors"
                >
                    Back to Products
                </Link>
            </div>
        </div>
    );
}
