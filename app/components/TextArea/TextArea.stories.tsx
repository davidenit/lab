import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./index";

const meta: Meta<typeof TextArea> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "TextArea",
  component: TextArea,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TextArea>;
export const Primary: Story = {
  argTypes: {
    title: String,
    placeholder: String,
    bordered: Boolean,
    rows: Number
  },
  args: {
    title: "TextArea storybook",
    placeholder: "Enter your TextArea text",
    bordered: true,
    rows: 4
  },
};
