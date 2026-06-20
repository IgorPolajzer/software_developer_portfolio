import React from "react";
import {renderPDFSection} from "../util";

function QualificationsPage({qualifications}) {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    return (
        <div className="px-4 sm:px-[9%] py-6 sm:py-10 text-[var(--color-text-base)]">
            {qualifications.map((qual) =>
                renderPDFSection(qual.title, qual.file, qual.description, isMobile)
            )}
        </div>
    );
}

export default QualificationsPage;