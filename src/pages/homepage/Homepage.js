import React from "react";
import { Grid } from "semantic-ui-react";
import LeftPanel from "../../components/leftpanel/LeftPanel";
import CenterPanel from "../../components/centerpanel/CenterPanel";
import RightPanel from "../../components/rightpanel/RightPanel";
import "./homepage.scss";

const Homepage = () => {
  return (
    <Grid
      columns={3}
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
          <CenterPanel />
        </Grid.Column>

        <Grid.Column width={4}>
          <RightPanel />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Homepage;
