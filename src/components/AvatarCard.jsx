import React, {useEffect, useState} from "react";

function AvatarCard({title, subtitle, avatar, content}) {
    return (
        <div className="flex flex-col items-center w-full p-20">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-semibold text-[var(--color-primary)] mb-2">{title}</h1>
                <h2 className="font-semibold text-[var(--color-subtitle)]">{subtitle}</h2>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="md:basis-1/3 flex justify-center md:justify-end">
                    <img
                        src={avatar}
                        alt="avatar"
                        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-[var(--color-text-base)]"
                    />
                </div>

                <div className="md:basis-2/3 text-center pt-12 md:text-left">
                    <p className="text-lg md:text-xl italic text-[var(--color-text-base)]">
                        {content}
                    </p>
                </div>
            </div>
        </div>

    );
}

export default AvatarCard;
