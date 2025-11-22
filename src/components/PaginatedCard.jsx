import {useRef, useState} from "react";

function PaginatedCard({title, subtitle, pages}) {
    const carousel = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const movePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + pages.length) % pages.length);
    };

    const moveNext = () => {
        setCurrentIndex((prev) => (prev + 1) % pages.length);
    };

    const isDisabled = (direction) => false;

    return (
        <div className="flex flex-col items-center w-full p-6 sm:p-10 md:p-16 lg:p-20">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-semibold text-[var(--color-primary)] mb-2">{title}</h1>
                <h2 className="font-semibold text-[var(--color-subtitle)]">{subtitle}</h2>
            </div>

            <div className="relative w-full max-w-4xl">
                <button
                    onClick={movePrev}
                    className="absolute top-1/2 left-2 -translate-y-1/2 bg-[var(--color-bg-primary-opacity)] hover:bg-white/40 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-10"
                    disabled={isDisabled("prev")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                    </svg>
                </button>

                <button
                    onClick={moveNext}
                    className="absolute top-1/2 right-2 -translate-y-1/2 bg-[var(--color-bg-primary-opacity)] hover:bg-white/40 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg z-10"
                    disabled={isDisabled("next")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                    </svg>
                </button>

                <div className="overflow-hidden">
                    <div
                        ref={carousel}
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{transform: `translateX(-${currentIndex * 100}%)`}}
                    >
                        {pages.map((page, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 w-full flex flex-col items-center justify-center p-6 bg-[var(--color-bg-primary-opacity)] rounded-2xl text-center border-2 border-[var(--color-text-base)]"
                            >
                                <img
                                    src={page.image}
                                    alt={page.company}
                                    className="h-28 md:h-36 mb-4 rounded-lg bg-[var(--color-bg-primary-opacity)] p-2 object-contain"
                                />
                                <h3 className="text-lg md:text-xl font-bold text-[var(--color-text-base)] mb-1">
                                    {page.company} - {page.role}
                                </h3>
                                <p className="text-sm text-[var(--color-text-base)] mb-2">{page.timeframe}</p>
                                <p className="text-[var(--color-text-base)] italic">{page.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
                {pages.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            idx === currentIndex
                                ? "bg-[var(--color-subtitle)]"
                                : "bg-[var(--color-text-base)] hover:bg-[var(--color-subtitle)]"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default PaginatedCard;