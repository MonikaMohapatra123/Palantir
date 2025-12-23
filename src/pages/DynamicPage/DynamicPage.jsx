import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPageByType } from "../services/pageApi";

const DynamicPage = () => {
  const { pageType, category } = useParams();
  const [page, setPage] = useState(null);

  useEffect(() => {
    getPageByType(pageType, category)
      .then((res) => setPage(res.data))
      .catch(() => setPage(null));
  }, [pageType, category]);

  if (!page) return <h2>Page not found</h2>;

  return (
    <div>
      <h1>{page.section1.heading}</h1>
      <p>{page.section1.description}</p>
    </div>
  );
};

export default DynamicPage;
