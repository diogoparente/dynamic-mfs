import React from "react";
import { useParams } from "react-router-dom";

const DynamicRemotePage = () => {
  const { id } = useParams();
  return (
    <div>
      I'm a dynamic page running inside localhost:3001. I was passed an {id}{" "}
      through the url
    </div>
  );
};

export default DynamicRemotePage;
