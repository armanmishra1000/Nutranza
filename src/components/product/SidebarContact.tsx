import { ArrowRight } from 'lucide-react';

export default function SidebarContact() {
    return (
        <div className="sticky top-24 space-y-6">
            {/* Custom Labeling Card */}
            <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                <h3 className="font-bold text-lg mb-2 text-gray-900">Need Custom Labeling?</h3>
                <p className="text-sm text-gray-700 mb-4">
                    We offer private labeling services for orders exceeding 5,000 units. Customize
                    jars, lids, and labels.
                </p>
                <button className="text-sm font-bold text-primary hover:text-primary/80 flex items-center gap-1">
                    Contact Sales Team
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>

            {/* Contact Person Card */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center text-white font-bold">
                        RK
                    </div>
                    <div>
                        <p className="font-bold text-gray-900">Rajesh Kumar</p>
                        <p className="text-xs text-gray-600">Head of Sourcing</p>
                    </div>
                </div>
                <p className="text-sm text-gray-700 italic mb-4">
                    &quot;Our peanuts are sourced directly from Gujarat farms, ensuring the highest
                    oil content and richest flavor profile for export markets.&quot;
                </p>
                <button className="w-full py-2 border border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                    Message Rajesh
                </button>
            </div>
        </div>
    );
}
