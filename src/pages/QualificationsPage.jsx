import React from "react";
import ReactMarkdown from "react-markdown";

function QualificationsPage({qualifications}) {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const renderPDFSection = (title, file, description) => (
        <div
            className="bg-[var(--color-secondary)]/80 backdrop-blur-md rounded-3xl shadow-lg p-4 sm:p-6 mb-8 transition-colors duration-500">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-[var(--color-text-base)]">{title}</h1>
            <hr className="border-[var(--color-primary)] mb-4"/>

            {/* Markdown Description */}
            {description && (
                <ReactMarkdown
                    components={{
                        h1: ({node, ...props}) => <h1 className="text-xl sm:text-2xl font-bold mb-4" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-lg sm:text-xl font-semibold mb-3" {...props} />,
                        p: ({node, ...props}) => <p className="mb-4 leading-relaxed text-sm sm:text-base" {...props} />,
                        li: ({node, ...props}) => <li
                            className="ml-4 list-disc mb-2 text-sm sm:text-base" {...props} />,
                        a: ({node, ...props}) => <a className="text-blue-400 hover:underline" {...props} />,
                    }}
                >
                    {description}
                </ReactMarkdown>
            )}

            {isMobile ? (
                <div className="text-[var(--color-text-base)]">
                    <a
                        href={file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-[var(--color-primary)] text-[var(--color-bg-primary)] rounded-md hover:shadow-[0_0_10px_var(--color-primary)] transition-all"
                    >
                        View {title}
                    </a>
                </div>
            ) : (
                <div className="w-full h-[500px] sm:h-[635px] rounded-xl overflow-hidden">
                    <object data={file} type="application/pdf" className="w-full h-full">
                        <p className="text-[var(--color-text-base)]">
                            PDF failed to load. You can download it below.
                        </p>
                        <a
                            href={file}
                            download
                            className="inline-block mt-2 px-4 py-2 bg-[var(--color-primary)] text-[var(--color-bg-primary)] rounded-md hover:shadow-[0_0_10px_var(--color-primary)] transition-all"
                        >
                            Download {title}
                        </a>
                    </object>
                </div>
            )}
        </div>
    );

    return (
        <div className="px-4 sm:px-[9%] py-6 sm:py-10 text-[var(--color-text-base)]">
            {qualifications.map((qual) =>
                renderPDFSection(qual.title, qual.file, qual.description)
            )}
        </div>
    );
}

export default QualificationsPage;