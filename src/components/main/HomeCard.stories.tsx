import { Meta, StoryObj } from '@storybook/react';
import HomeCard, { HomeCardProps } from './HomeCard';
import { HCimg1 } from '@assets/svgs';

const meta = {
  title: 'Components/HomeCard',
  component: HomeCard,
  argTypes: {
    img: {
      control: false,
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

export const ShortCard: Story = {
  args: {
    img: <HCimg1 />,
    title: '맥도날드 대표 간식을 1000원부터!',
  } as HomeCardProps,
};

export const LongCard: Story = {
  args: {
    img: <HCimg1 />,
    title: '맥런치 할인에 사이드 할인까지 맥런치 플러스 세트 출시!',
  } as HomeCardProps,
};
