import "./../css/Timeline.css"
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as BirthdayIcon } from '../assets/icons/birthday-icon.svg'
import { ReactComponent as OSCirkulaneZavrc } from '../assets/icons/os-cirkulane-zavrc-icon.svg'
import { ReactComponent as SCPtujIcon } from '../assets/icons/scptuj-icon.svg'
import { ReactComponent as FERI } from "../assets/icons/university.svg";
import SkyLabs from "../assets/skylabs_logo.png";
import Setronica from "../assets/setronica_logo.png"


function Timeline(){
    const timelineItems = [
        {
            date: "July 22 2003",
            title: "Birth",
            location: "Maribor - Slovenia",
            icon: <BirthdayIcon />,
        },
        {
            date: "September 1 2009",
            title: "Primary School Cirkulane-Zavrč",
            location: "Cirkulane - Slovenia",
            icon: <OSCirkulaneZavrc />,
        },
                {
            date: "September 1 2018 - 24 Junij  2022",
            title: "Technic of mechatronics - Electrical and Computer School Ptuj",
            location: "Ptuj - Slovenia",
            icon: <SCPtujIcon/>
        },
                {
            date: "October 1 2022 - In progress (Estimated: September 2025)",
            title: "BSc of Computer Science and Information Technology\n" +
                "Engineering The Faculty of Electrical Engineering and Computer",
            location: "Maribor - Slovenia",
            icon: <FERI/>
        },
                        {
            date: "August 1 2023 - 31 September  2023",
            title: "Software engineer(Internship) Skylabs d.o.o",
            location: "Maribor - Slovenia",
            icon: <img src={SkyLabs} style={{width: '85%', marginTop: 15, marginLeft: 4}} />
        },
                {
            date: "October 1 2022 - In progress (Estimated: September 2025)",
            title: "Programmer(Internship) Setronica d.o.o",
            location: "Maribor - Slovenia",
            icon: <img src={Setronica} style={{width: '85%', marginTop: 25, marginLeft: 5}} />
        },
    ]

    return (
        <>
            <h1>Timeline</h1>
            <div className="container">

                    <VerticalTimeline>
                        {timelineItems.map((item, index) => (
                            <VerticalTimelineElement
                            key={index}
                            date={<div class={"date"}>{item.date}</div>}
                            contentStyle={{background: '#0D1B2A66'}}
                            contentArrowStyle={{background: "transparent", color: "#FFFFFF", marginRight:"4px"}}
                            iconStyle={{ background: '#ddd8da'}}
                            icon={item.icon}
                            >
                                <h3 class={"title"}>{item.title}</h3>
                                <h4 class={"location"}>{item.location}</h4>
                                <p class={"content"}>{item.content}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
            </div>
        </>
    )
}

export default Timeline;