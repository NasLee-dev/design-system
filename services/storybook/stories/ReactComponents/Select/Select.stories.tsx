import "@ds/react-components-select/style.css";
import { Select } from "@ds/react-components-select";
import React from "react";

import "@ds/react-components-layout/style.css";


export default {
  title: "React Components/Select",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const SelectStory = {
  render: () => <Select>
    <option value="1">1</option>
    <option value="2">2</option>
  </Select>,
};
