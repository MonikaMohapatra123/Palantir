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
    }
  };

  const post = postsData[id];

  if (!post) {
    return <h2 style={{ padding: "40px" }}>Post Not Found</h2>;
  }

  return (
    <div >
      <HeroPostDetails title={post.title} />
    
      <ContentSection text={post.content} />
      <ExtraSection text={post.extra} />
    </div>
  );
};

export default PostDetails;
