import { Meta, StoryObj } from '@storybook/react';
import HomeCard, { HomeCardProps } from './HomeCard';
import { IcSearch } from '@assets/svgs';

const meta = {
  title: 'Components/HomeCard',
  component: HomeCard,
  argTypes: {
    img: {
      control: 'text',
      description: 'React node to render the image or icon',
    },
    title: {
      control: 'text',
      description: 'Title text for the card',
    },
  },
} satisfies Meta<typeof HomeCard>;

export default meta;

type Story = StoryObj<typeof HomeCard>;

export const Default: Story = {
  args: {
    img: <IcSearch />,
    title: 'Default HomeCard Title',
  } as HomeCardProps,
};
