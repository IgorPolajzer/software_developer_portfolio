import React from "react";
import ReactMarkdown from "react-markdown";

function ContentPage({title, content}) {
    return (
        <div className="px-[9%] py-10 text-[var(--color-text-base)]">
            <div className="bg-white/10 shadow-md rounded-3xl p-6 backdrop-blur-md">

                {/* TITLE */}
                <div className="flex items-center justify-between w-full mb-6">
                    <h1 className="text-2xl font-bold">{title}</h1>
                </div>
                <ReactMarkdown
                    components={{
                        h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-4" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-2xl font-semibold mb-3" {...props} />,
                        p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
                        li: ({node, ...props}) => <li className="ml-4 list-disc" {...props} />,
                        a: ({node, ...props}) => <a className="text-blue-400 hover:underline" {...props} />,
                    }}
                >
                    {content}
                </ReactMarkdown></div>
        </div>
    );
}

export default ContentPage;

