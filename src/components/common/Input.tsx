import { Input as HeroInput } from '@heroui/react';

export type InputProps = React.ComponentProps<typeof HeroInput>;

export const Input = (props: InputProps) => {
  return <HeroInput {...props} />;
};
