import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./index";

const meta: Meta<typeof Input> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Input",
  component: Input,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Input>;
export const Primary: Story = {
  argTypes: {
    title: String,
    placeholder: String,
    bordered: Boolean,
  },
  args: {
    title: "Input storybook",
    placeholder: "Enter your input text",
    bordered: true,
  },
};
