import React from "react";
import ReactMarkdown from "react-markdown";
import {renderPDFSection} from "../util";

export default function ProjectPage({title, status, description, githubUrl, url, videos, technologies, pdfs, custom}) {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    return (
        <div className="px-[9%] py-10 text-[var(--color-text-base)]">
            <div className="bg-white/10 shadow-md rounded-3xl p-6 backdrop-blur-md">

                {/* TITLE + GITHUB */}
                <div className="flex items-center justify-between w-full mb-6">
                    <h1 className="text-3xl font-bold">
                        {status === "Completed" ? title : `${title} - In progress`}
                    </h1>

                    {githubUrl && (
                        <div className="flex flex-col items-center ml-auto">
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mb-2 hover:opacity-70 transition-opacity"
                            >
                                <div
                                    className="h-25 w-25 flex items-center justify-center rounded-full border"
                                    style={{
                                        backgroundColor: "var(--color-bg-primary-opacity)",
                                        borderColor: "var(--color-primary)",
                                    }}
                                >
                                    <img
                                        src="/assets/social/github-mark.svg"
                                        alt="GitHub"
                                        className="h-20 w-20 p-2 object-contain"
                                    /></div>
                            </a>
                            <p className="text-xs text-gray-400 text-center">
                                This repo might be private. Contact for access.
                            </p>
                        </div>
                    )}
                </div>


                {/* DESCRIPTION */}
                <ReactMarkdown
                    components={{
                        h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-4" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-2xl font-semibold mb-3" {...props} />,
                        p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
                        li: ({node, ...props}) => <li className="ml-4 list-disc" {...props} />,
                        a: ({node, ...props}) => <a className="text-blue-400 hover:underline" {...props} />,
                    }}
                >
                    {description}
                </ReactMarkdown>

                {/* VIDEOS */}
                {videos && videos.length > 0 && (
                    <div className="mb-6">
                        {videos.map((video, idx) => (
                            <div key={idx} className="mb-4">
                                <video width="100%" height="100%" controls>
                                    <source src={video} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ))}
                    </div>
                )}

                {custom && <div className="mb-6">{custom}</div>}

                {/* PDFS */}
                {pdfs && pdfs.length > 0 && (
                    <div className="mb-6">
                        {pdfs.map((pdf) =>
                            renderPDFSection(pdf.title, pdf.file, pdf.description, isMobile)
                        )}
                    </div>
                )}

                {/* WEBSITE */}
                {url && (
                    <div className="border-t border-white/10 pt-4 pb-4">
                        <span className="font-semibold mr-2">Website:</span>
                        <a href={url} className="text-blue-400 hover:underline">
                            {url}
                        </a>
                    </div>
                )}

                {/* TECHNOLOGIES */}
                <div className="border-t border-white/10 pt-6">
                    <h2 className="text-xl font-semibold mb-4">Technologies used:</h2>

                    <div className="
            grid
            gap-4
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
          ">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="
                  bg-white/10
                  p-4
                  rounded-xl
                  shadow
                  backdrop-blur-sm
                  flex items-center gap-3
                "
                            >
                                {tech.logo && (
                                    <div
                                        className="flex items-center justify-center rounded-full border"
                                        style={{
                                            backgroundColor: "var(--color-bg-primary-opacity)",
                                            borderColor: "var(--color-primary)",
                                        }}
                                    >
                                        <img
                                            src={tech.logo}
                                            alt={tech.name}
                                            className="h-12 w-12 p-2 object-contain"
                                        />
                                    </div>
                                    )}
                                <div>
                                    <h5 className="font-semibold mb-1 text-[var(--color-subtitle)]">
                                    {tech.name}
                            </h5>
                            <p className="text-sm opacity-90">{tech.purpose}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

        </div>
</div>
)
}
