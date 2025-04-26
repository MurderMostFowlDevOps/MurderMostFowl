import React, { useState, useEffect } from "react";

const Counter = () => {
  const [views, setViews] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("https://api.counter.dev/v1/04a6e734-1c50-4d7c-90f0-926f34379318");
            const data = await response.json();
            setViews(data.total);
        } catch(e) {
            console.error(e)
        }
    } 
    fetchData();

  }, [])

  if (views === null) return <p className="text-gray-500">Loading visitors...</p>;

  return (
    <div className="text-sm text-gray-600 mt-4 text-center">
      👀 {views} total visitors
    </div>
  );
}


export default Counter;
