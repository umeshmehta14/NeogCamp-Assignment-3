// Create a React component that fetches chats from an API endpoint using useEffect hook and display chat data (chat message) as a list on the screen using the useState hook. Display "You: " before every odd message and "user: " at every even message.

import { useEffect, useState } from "react";
import { fakeFetch } from "./fakefetch";

const ChatRoom = () => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/userchats");
      if (response.status === 200) {
        setChats(response.data);
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
  return (
    <>
      <h1>{loading && "Loading..."}</h1>
      <h1>{error && "Something Went Wrong Try Again Later"}</h1>

      {!loading && !error && <h1>Chat Room</h1>}
      <ul className="chat-list">
        {chats.map((chat, index) => {
          return (
            <li key={index}>
              {index % 2 === 0 ? "user" : "you"}:{chat}
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default ChatRoom;
