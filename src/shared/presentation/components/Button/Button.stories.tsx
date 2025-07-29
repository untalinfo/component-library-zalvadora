import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from "./Button";

const meta: Meta<typeof CustomButton> = {
  title: "Components/CustomButton",
  component: CustomButton,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};
export default meta;

type Story = StoryObj<typeof CustomButton>;

export const Primary: Story = {
  args: {
    children: "Botón primario",
    variant: "contained",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Botón secundario",
    variant: "outlined",
    color: "secondary",
  },
};
