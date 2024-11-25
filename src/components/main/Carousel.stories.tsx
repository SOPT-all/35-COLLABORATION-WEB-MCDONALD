import { Meta, StoryObj } from '@storybook/react';
import Carousel from './Carousel';

const meta = {
  title: 'Components/Carousel',
  component: Carousel,
} satisfies Meta<typeof Carousel>;

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {};
