// InfiniteScrollComponent.js
import React, { useState, useEffect } from "react";

const InfiniteScrollComponent = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Simulating fetching data from an API
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
      const newData = await response.json();
      setData(prevData => [...prevData, ...newData]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data on component mount

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollHeight - scrollTop === clientHeight && !loading) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]); // Add and remove scroll event listener based on loading state

  return (
    <div>
      <h2>Infinite Scroll Component</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <img src={item.thumbnailUrl} alt={item.title} />
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScrollComponent;
