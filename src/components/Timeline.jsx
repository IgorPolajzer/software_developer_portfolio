import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline({items = []}) {
    return (
        <div className="w-full py-12 px-4 md:px-8 lg:px-16">
            <h1 className="text-4xl font-bold text-center mb-12 text-[var(--color-primary)]">
                Timeline
            </h1>
            <VerticalTimeline>
                {items.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        date={<span className="text-[var(--color-subtitle)] font-semibold">{item.date}</span>}
                        contentStyle={{
                            background: "var(--color-bg-primary)",
                            color: "var(--color-text-base)",
                            borderRadius: "1rem",
                            borderWidth: "2px", // <-- border thickness
                            borderColor: "var(--color-primary)",
                            borderStyle: "solid", // <-- must set the style
                            padding: "1.5rem",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                            transition: "all 0.3s ease-in-out",
                        }}
                        contentArrowStyle={{
                            borderRight: `7px solid ${item.background || "var(--color-bg-primary)"}`
                        }}
                        iconStyle={{
                            backgroundColor: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
                        }}
                        icon={
                            item.iconPath ? (
                                <img
                                    src={item.iconPath}
                                    alt={item.title}
                                    className={"object-fit"}
                                    style={{
                                        width: item.iconWidth || 40,
                                    }}
                                />
                            ) : null
                        }
                    >
                        <h3 className="text-xl font-semibold mb-1 text-[var(--color-primary)]">{item.title}</h3>
                        <h4 className="text-sm font-medium mb-2 text-[var(--color-subtitle)]">{item.location}</h4>
                        {item.content && (
                            <p className="text-sm leading-relaxed text-[var(--color-text-base)]">{item.content}</p>
                        )}
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
}

export default Timeline;
