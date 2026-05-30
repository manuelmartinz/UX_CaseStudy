import type { Meta, StoryObj } from '@storybook/react';
import { BurgerCard } from './BurgerCard';

const meta = {
  title: 'Components/BurgerCard',
  component: BurgerCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    price: { control: 'text' },
    image: { control: 'text' },
    allergens: {
      control: 'check',
      options: ['gluten', 'crustaceos'],
    },
  },
} satisfies Meta<typeof BurgerCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'KEVIN COSTNER',
    price: '13 €',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
    allergens: ['gluten', 'crustaceos'],
  },
};

export const WithoutAllergens: Story = {
  args: {
    name: 'VEGGIE DELIGHT',
    price: '11 €',
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400',
    allergens: [],
  },
};

export const OnlyGluten: Story = {
  args: {
    name: 'PIGMA',
    price: '13 €',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400',
    allergens: ['gluten'],
  },
};

export const Expensive: Story = {
  args: {
    name: 'WAGYU PREMIUM',
    price: '18 €',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400',
    allergens: ['gluten', 'crustaceos'],
  },
};

