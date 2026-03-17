import { Container, Fill } from "./ProgressBar.style";

type Props = {
  value: number;
  max?: number;
  color?: string;
  ariaLabel?: string;
};

export default function ProgressBar({ value, max = 100, color, ariaLabel }: Props) {
  const width = (value / max) * 100;

  return (
    <Container
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={ariaLabel}
    >
      <Fill width={width} color={color} />
    </Container>
  );
}
