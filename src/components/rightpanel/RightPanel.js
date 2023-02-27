import React from "react";
import { Input,Icon } from "semantic-ui-react";

const RightPanel = () => {
  return (
    <div>
      <Input inverted size="large"
        icon={<Icon name="search" inverted circular link />}
        placeholder="Search..."
      />
    </div>
  );
};

export default RightPanel;
