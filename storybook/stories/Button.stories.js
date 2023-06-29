import { BaseButton } from "ui";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: "Components/BaseButton",
  component: BaseButton,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    onClick: {},
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};
//
// export const Secondary = {
//   args: {
//     label: "Button",
//   },
// };
//
// export const Large = {
//   args: {
//     size: "large",
//     label: "Button",
//   },
// };
