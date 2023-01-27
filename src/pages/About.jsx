import React from "react";
import Card from "../Components/shared/Card";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app</p>
        <p> Version: 1.0.0</p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  );
}
