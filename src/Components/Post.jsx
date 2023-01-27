import React from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const params = useParams();
  return (
    <div>
      <h1>Post {params.id}</h1>
      <h2>Name {[params.name]}</h2>
    </div>
  );
}
