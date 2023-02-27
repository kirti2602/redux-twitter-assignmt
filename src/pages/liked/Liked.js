import React from "react";
import LeftPanel from "../../components/leftpanel/LeftPanel";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actionCreators";
import {
  Grid,
  Header,
  Segment,
  Card,
  Image,
  Icon,
  Label,
} from "semantic-ui-react";

const Liked = () => {
  const posts = useSelector((state) => state.posts); //posts array
  const dispatch = useDispatch();

  console.log(posts);
  return (
    <Grid
      columns={2}
      divided
      fluid
      textAlign="center"
      className="homepage height100vh"
    >
      <Grid.Row>
        <Grid.Column width={4}>
          <LeftPanel />
        </Grid.Column>

        <Grid.Column width={8}>
          <Segment inverted textAlign="left">
            <Header as="h1">
              Liked Tweets
            </Header>
            {posts.filter((tweet) => tweet.liked).length === 0 ? (
              <Header style = {{color: "skyBlue"}} as="h3">No tweets Found</Header>
            ) : (
              posts
                .filter((tweet) => tweet.liked)
                .map(
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
                    return (
                      <Card key={id} inverted fluid>
                        <Card.Content textAlign="left">
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
                        <Card.Content textAlign="left" extra>
                          <Label basic>
                            <Icon name="comment" /> {numberOfComments}
                          </Label>
                          <Label basic>
                            <Icon
                              className="cursor-pointer"
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
                        </Card.Content>
                      </Card>
                    );
                  }
                )
            )}
          </Segment>
        </Grid.Column>

        <Grid.Column width={4}>@Copywrite tweeter.com</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Liked;
