// Create a React component that fetches products data from an API endpoint using useEffect hook and display tweets (content, likes, views) as a list on the screen using the useState hook. Add a button on top, on click of which it displays only the tweets with more than 50 likes.

import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

export default function Tweets() {
  const [products, setProducts] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/usertweets");
      if (response.status === 200) {
        setProducts(response.data);
        setProductsList(response.data);
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const HandleProducts = () => {
    if (click) {
      setProducts(productsList);
    } else {
      setProducts(() => products.filter(({ likes }) => likes > 50));
    }
    setClick(!click);
  };
  return (
    <>
      <h1>{loading && "Loading..."}</h1>
      <h1>{error && "Something Went Wrong Try Again Later"}</h1>

      {!loading && !error && (
        <button onClick={HandleProducts}>
          {click ? "Show All Tweets" : "Show tweets with more than 50 likes"}
        </button>
      )}
      <div>
        {products.map(({ id, content, likes, views }) => {
          return (
            <div key={id} className="tweet-box">
              <h1>{content}</h1>
              <span>Likes:{likes}</span>
              <span>View:{views}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
