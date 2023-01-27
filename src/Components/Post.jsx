import React from "react";
import { Navigate, useNavigate,Routes,Route } from "react-router-dom";

export default function Post() {
  const status = 200; //change to 404 than it redirect
  // it is used to redirect when button is clicked or something updates
  const navigate = useNavigate();

  if (status === 404) {
    // it is ued to redirect
    return <Navigate to="/notfound" />;
  }

  const handleNavigate = () => {
    console.log("hello");
    navigate("/about");
  };
  return (
    <div>
      <h1>Post</h1>
      <button onClick={handleNavigate}>Click Me</button>
      {/* nested route=> to show specific contect on specific route  
      we have to use /post/*   in the root app.js*/}
      <Routes>
        <Route path="/show" element={<h1>Show</h1>}></Route>
      </Routes>

    </div>
  );
}
