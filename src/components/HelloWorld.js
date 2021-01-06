import React, { useState, useEffect } from "react";
import axios from "axios";

const HelloWorld = () => {
  const [greeting, updateGreeting] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8000/", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      updateGreeting(result.data);
    };
    fetchData();
  }, []);

  return <h1>{greeting}</h1>;
};

export default HelloWorld;
