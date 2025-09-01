import React from "react";
import { Calendar, Copyright } from "lucide-react";


interface NasaApodResponse {
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    title: string;
    copyright?: string;
    url: string;
}

interface APODCardProps {
    napod: NasaApodResponse;
}

export const APODCard: React.FC<APODCardProps> = ({ napod }) => {
    return (
        <div className="bg-slate-900/95 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-purple-500/30 w-full max-w-lg">
            <div className="flex flex-col gap-4">
                {/* Header with image and title */}
                <div className="flex items-start gap-4">
                    <img
                        src={napod.url}
                        alt={napod.title}
                        className="w-16 h-16 rounded-xl object-cover border-2 border-purple-500/50 shadow-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                        <h2 className="text-lg font-bold text-white leading-tight mb-2">{napod.title}</h2>
                        <div className="flex flex-col gap-1 text-xs text-purple-300">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                <span>{napod.date}</span>
                            </div>
                            {napod.copyright && (
                                <div className="flex items-center gap-1">
                                    <Copyright className="w-3 h-3" />
                                    <span className="truncate">{napod.copyright}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                   
                    <details className="group">
                        <summary className="text-purple-400 text-xs cursor-pointer hover:text-purple-300 transition-colors list-none">
                            <span className="group-open:hidden">Read more...</span>
                            <span className="hidden group-open:inline">Show less</span>
                        </summary>
                        <p className="text-gray-300 text-sm leading-relaxed mt-2">
                            {napod.explanation}
                        </p>
                    </details>
                </div>
            </div>
        </div>
    );
};
