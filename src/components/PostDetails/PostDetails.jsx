import { useParams } from "react-router-dom";
import ContentSection from "./ContentSection/ContentSection";
import ExtraSection from "./ExtraSection/ExtraSection";
import HeroPostDetails from "./HeroPostDetails/HeroPostDetails";

const PostDetails = () => {
  const { id } = useParams();

  // All data for different IDs
  const postsData = {
    "1": {
      title: "Building with Palantir AIP",
      content: "Full details about Palantir AIP...",
      extra: "Extra information about analytics and AI tools."
    },
    "2": {
      title: "Machine Learning for Search",
      content: "Full details about ML Search...",
      extra: "Extra information about ranking and NLP."
    },
    "3": {
      title: "AI in Healthcare",
      content: "Full details about AI Healthcare...",
      extra: "Extra information about medical AI systems."
    },
    "4": {
      title: "Cloud Computing Revolution",
      content: "Full details about cloud platforms, scalability, and distributed systems...",
      extra: "Extra information about AWS, Azure, and Google Cloud services."
    },
    "5": {
      title: "Cybersecurity in Modern Applications",
      content: "Full details about application security, encryption, and secure authentication...",
      extra: "Extra information about firewalls, zero-trust models, and threat detection."
    },
    "6": {
      title: "Data Engineering Pipelines",
      content: "Full details about ETL processes, big data tools, and streaming architectures...",
      extra: "Extra information about Kafka, Spark, and real-time processing."
    },
    "7": {
      title: "Generative AI and LLMs",
      content: "Full details about generative AI models, transformers, and large language models...",
      extra: "Extra information about prompt engineering and AI ethics."
    },
    "8": {
      title: "IoT and Smart Infrastructure",
      content: "Full details about IoT devices, sensors, and smart city systems...",
      extra: "Extra information about edge computing and connected ecosystems."
    }
  };

  const post = postsData[id];

  if (!post) {
    return <h2 style={{ padding: "40px" }}>Post Not Found</h2>;
  }

  return (
    <div>
      <HeroPostDetails title={post.title} />
      <ContentSection text={post.content} />
      <ExtraSection text={post.extra} />
    </div>
  );
};

export default PostDetails;
