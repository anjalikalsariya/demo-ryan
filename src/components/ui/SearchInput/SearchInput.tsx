import type { ChangeEvent } from "react";
import { Input, InputBox, Wrapper } from "./SearchInput.style";
import { SearchIcon } from "@/assets/icons";

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search",
}: Props) {
  return (
    <Wrapper>
      <SearchIcon />
      <InputBox>
        <Input value={value} onChange={onChange} placeholder={placeholder} />
      </InputBox>
    </Wrapper>
  );
}
