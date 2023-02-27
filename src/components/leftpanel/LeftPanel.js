import React from "react";
import { Link } from "react-router-dom";
import { List, Segment, Header } from "semantic-ui-react";
import "./leftpanel.scss";
import { useSelector } from "react-redux";

const LeftPanel = () => {
  const posts = useSelector((state) => state.posts);
  const dates = posts.map((post) => post.date);
  const days = dates.map((date) => {
    const dateObj = new Date(date);
    const dayNum = dateObj.getDay(); //0-6
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return weekdays[dayNum];
  });

  const daysCount = days.reduce((count, day) => {
    if (count[day]) {
      return { ...count, [day]: count[day] + 1 };
    } else {
      return {
        ...count,
        [day]: 1,
      };
    }
  }, {});

  console.log(daysCount);
  return (
    <>
      <List divided relaxed size="massive">
        <List.Item icon="twitter square" className="logo">
          <List.Icon name="twitter square" />
        </List.Item>
        <List.Item icon="home" content={<Link to="/homepage">Home</Link>} />
        <List.Item
          icon="like"
          content={<Link to="/likedTweets">Liked Tweets</Link>}
        />
        <List.Item icon="user" content="Profile" />
      </List>
      <Segment inverted>
        <Header as="h1">Weekly Stats</Header>
        <List>
          {Object.keys(daysCount).map((key) => (
            <List.Item content={ key  + " : " + daysCount[key]} />
          ))}
        </List>
      </Segment>
    </>
  );
};

export default LeftPanel;
