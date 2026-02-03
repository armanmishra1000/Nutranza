import { Calculator } from 'lucide-react';

export default function LogisticsEstimator() {
    return (
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
            <h3 className="font-bold text-sm mb-3 text-gray-900 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-gray-600" />
                Logistics Estimator
            </h3>
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Pallet Count (Approx)</span>
                    <span className="font-bold text-gray-900">~42 Cases</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <p className="text-xs text-gray-600 italic">Estimate based on standard Euro Pallet.</p>
            </div>
        </div>
    );
}
