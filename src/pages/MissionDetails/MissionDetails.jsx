import { useParams } from "react-router-dom";
import HeroPostDetails from "../../components/PostDetails/HeroPostDetails/HeroPostDetails";
import ContentSection from "../../components/PostDetails/ContentSection/ContentSection";
import ExtraSection from "../../components/PostDetails/ExtraSection/ExtraSection";
import VisionSection from "../../components/VisionSection/VisionSection";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import MissionDriven from "../../components/MissionDriven/MissionDriven";
import PalantirExplained from "../../components/PalantirExplained/PalantirExplained";

const MissionDetails = () => {
  const { id } = useParams();

  const missionData = {
    "1": {
      title: "Aim for Defense Mission Making",
      content: "Full details about Defense mission initiatives...",
      extra: "Extra information about strategy and implementation."
    },
    "2": {
      title: "Palantir for Ishikawa Prefecture Earthquake",
      content: "Full details about disaster response in Japan...",
      extra: "Extra recovery and technology support details."
    },
    "3": {
      title: "Supporting Disaster Recovery in Texas",
      content: "Full details about flood recovery systems...",
      extra: "Extra infrastructure rebuilding details."
    },
    "4": {
      title: "CEO Alex Karp receives the Herman Kahn Award",
      content: "Full details about award ceremony and speech...",
      extra: "Extra leadership insights."
    },
    "5": {
      title: "L3Harris at AIPCon 6",
      content: "Full details about production efficiency...",
      extra: "Extra event and collaboration details."
    },
    "6": {
      title: "Alex Karp speaks with students at University of Austin",
      content: "Full details about student interaction...",
      extra: "Extra Q&A insights."
    },
    "7": {
      title: "Defending Maine’s Medical Safety Net",
      content: "Full details about medical safety systems...",
      extra: "Extra healthcare data insights."
    }
  };

  const mission = missionData[id];

  if (!mission) {
    return <h2 style={{ padding: "40px" }}>Mission Not Found</h2>;
  }

  return (
    <div>
      <HeroPostDetails title={mission.title} />
      <ContentSection text={mission.content} />
      <ExtraSection text={mission.extra} />
      <VisionSection/>
      <WhatWeDo/>
      <MissionDriven/>
      <PalantirExplained/>
    
    </div>
  );
};

export default MissionDetails;
