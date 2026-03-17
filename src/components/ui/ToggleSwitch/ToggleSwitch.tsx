import { Knob, Switch } from "./ToggleSwitch.style";

type Props = {
  checked: boolean;
  onChange: (value: boolean) => void;
  ariaLabel?: string;
};

export default function ToggleSwitch({ checked, onChange, ariaLabel }: Props) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onChange(!checked);
    }
  };

  return (
    <Switch
      checked={checked}
      onClick={() => onChange(!checked)}
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <Knob checked={checked} />
    </Switch>
  );
}
