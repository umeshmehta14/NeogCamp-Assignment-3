import Tabs from "./1-Tabs";
import GroceryList from "./2-GroceryList";
import Slider from "./3-Card";
import SetBackground from "./4-SetBackground";
import ChatRoom from "./5-ChatRoom/ChatRoom";
import Tweets from "./6-Tweets/Tweets";
import Movies from "./7-Movies/Movies";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Assignment Three</h1>
      <Tabs />
      <hr />
      <GroceryList />
      <hr />
      <Slider />
      <hr />
      <SetBackground />
      <hr />
      <ChatRoom />
      <hr />
      <Tweets />
      <hr />
      <Movies />
      <hr />
    </div>
  );
}
