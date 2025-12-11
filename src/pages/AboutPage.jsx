import Timeline from "../components/Timeline";
import AnimationWrapper from "../components/AnimationWrapper";

function AboutPage({cards, timelineItems = []}) {
    return (
        <div className="flex flex-col items-center w-full pt-10 pb-20">
            {cards.map((card, index) => (
                <AnimationWrapper key={index} card={card}/>
            ))}
            {(timelineItems && timelineItems.length !== 0) && <Timeline items={timelineItems}/>}
        </div>
    );
}

export default AboutPage;
