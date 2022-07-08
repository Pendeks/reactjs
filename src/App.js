import React from "react";
import Card from "./components/Card";

function App() {
  return(
    
    <div className="py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card content={{
            imageUrl:"http://placekitten.com/g/300/200", 
            title:"The first post", 
            published:"8 July, 2022"
            }} 
            />
          </div>
          <div className="col-md-4">
            <Card content={{
            imageUrl:"http://placekitten.com//300/200", 
            title:"The second post", 
            published:"6 July, 2022"
            }} 
            />
          </div>
          <div className="col-md-4">
            <Card content={{
            imageUrl:"http://placekitten.com/g/300/200", 
            title:"The third post", 
            published:"5 July, 2022"
            }} 
            />
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default App;