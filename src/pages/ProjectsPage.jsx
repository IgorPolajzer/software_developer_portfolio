import {Link} from "react-router-dom";
import React from "react";

function ProjectsPage({projects}) {
    const getProjectCard = (project) => {
        if (project.title) {
            return (
                <div
                    className="relative overflow-hidden rounded-3xl bg-[var(--color-bg-primary-opacity-card)] shadow-md transform transition-transform duration-200 hover:scale-105 cursor-pointer h-full w-full flex flex-col border-2 border-[var(--color-text-base)]">
                    <Link to={project.route} className="relative h-full w-full">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="object-contain rounded-3xl max-h-full max-w-full p-3"
                        />
                        <div
                            className="absolute bottom-0 left-0 w-full bg-[var(--color-bg-primary)] p-4 box-border flex justify-between items-center">
                            <h1 className="text-[var(--color-text-base)] text-sm sm:text-base">{project.title}</h1>
                            <h1
                                className={`font-bold text-sm sm:text-base ${
                                    project.status === "Completed" ? "text-[#65ff4a]" : "text-[#579adc]"
                                }`}
                            >
                                {project.status}
                            </h1>
                        </div>
                    </Link>
                </div>
            );
        } else {
            return (
                <div className="flex justify-center items-center h-48 sm:h-64 rounded-3xl bg-white/10">
                    <h1 className="text-[#dbdbdb] text-xl">Coming soon</h1>
                </div>
            );
        }
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-8 lg:px-12">
            {projects.map((project) => (
              getProjectCard(project)
            ))}
        </div>
    );
}

export default ProjectsPage;
