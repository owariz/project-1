import { Button as HeroButton } from "@heroui/button"

export type ButtonProps = React.ComponentProps<typeof HeroButton>

export const Button = (props: ButtonProps) => {
    return <HeroButton {...props} />
}
