import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline({ items = [] }) {
  return (
    <>
      <h1 style={{ color: "var(--color-text-base)", textAlign: "center", marginBottom: "2rem" }}>
        Timeline
      </h1>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem" }}>
        <VerticalTimeline>
          {items.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              date={<div style={{ color: "var(--color-secondary)" }}>{item.date}</div>}
              contentStyle={{
                background: item.background || "var(--color-bg-primary)",
                color: "var(--color-text-base)",
                borderRadius: "8px",
                padding: "1.5rem",
                boxShadow: "0 0 15px rgba(0,0,0,0.2)",
                transition: "background 0.3s, color 0.3s, box-shadow 0.3s",
              }}
              contentArrowStyle={{ borderRight: `7px solid ${item.background || "var(--color-bg-primary)"}` }}
              iconStyle={{ background:"var(--stars-color)" }}
              icon={
                item.iconPath ? (
                  <img
                    src={item.iconPath}
                    style={{
                      width: item.iconWidth || "85%",
                      marginTop: item.iconMarginTop || 15,
                      marginLeft: item.iconMarginLeft || 0,
                      borderRadius: "50%",
                    }}
                  />
                ) : null
              }
            >
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                {item.title}
              </h3>
              <h4 style={{ fontSize: "1rem", fontWeight: 400, marginBottom: "0.5rem" }}>
                {item.location}
              </h4>
              {item.content && (
                <p style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>{item.content}</p>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Timeline;
