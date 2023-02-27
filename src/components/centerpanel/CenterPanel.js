import React, { useEffect } from "react";
import {
  Segment,
  Header,
  Input,
  Button,
  Divider,
  Card,
  Image,
  Icon,
  Label,
} from "semantic-ui-react";
import * as actions from "../../redux/actionCreators";
import { useDispatch, useSelector } from "react-redux";

const CenterPanel = () => {
  const { posts, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

    useEffect(() => {
      if(loading)
      dispatch(actions.fetchPosts());
    }, []);

  return (
    <main>
      {/* header */}
      <Segment padded="very" inverted>
        <Header textAlign="left" as="h2">
          Your Feed
        </Header>
      </Segment>

      {/* create tweet */}
      <Segment padded="very" inverted textAlign="left">
        <Input
          transparent
          inverted
          size="massive"
          icon="user circle "
          iconPosition="left"
          placeholder="Type to post!"
        />
        <Divider />
        <Button primary>Post</Button>
      </Segment>

      {/* tweets list */}
      <Segment inverted textAlign="left">
        {posts.map(
          ({
            id,
            userName,
            firstName,
            date,
            tweet,
            numberOfLikes,
            numberOfComments,
            liked,
          }) => {
            return loading ? (
              "loading"
            ) : (
              <Card key={id} inverted fluid>
                <Card.Content>
                  <Image
                    floated="left"
                    size="mini"
                    src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
                  />
                  <Card.Header>{firstName}</Card.Header>
                  <Card.Meta>@{userName}</Card.Meta>
                  <Card.Meta>{date}</Card.Meta>
                  <Card.Description>{tweet}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Label basic>
                    <Icon name="comment" /> {numberOfComments}
                  </Label>
                  <Label basic>
                    <Icon className="cursor-pointer"
                      style={{ color: liked ? "red" : "black" }}
                      onClick={() => {
                        liked
                          ? dispatch(actions.unlikePost(id))
                          : dispatch(actions.likePost(id));
                      }}
                      name="heart"
                    />{" "}
                    {numberOfLikes}
                  </Label>
                  <Label basic>
                    <Icon className="cursor-pointer"
                      onClick={() => dispatch(actions.deletePost(id))}
                      name="trash alternate"
                    />
                  </Label>
                </Card.Content>
              </Card>
            );
          }
        )}
      </Segment>
    </main>
  );
};

export default CenterPanel;
