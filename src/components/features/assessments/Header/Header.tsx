import React, { useState } from "react";
import { SearchInput, Text } from "@/components/ui";
import { LightbulbIcon, ChevronDownIcon } from "@/assets/icons";
import {
  StyledChevronIcon,
  StyledGuideCard,
  StyledLeftSection,
  StyledRightSection,
  StyledSortButton,
  StyledTitleBlock,
  StyledTitleRow,
  StyledWrapper,
} from "./Header.style";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <StyledWrapper>
      <StyledLeftSection>
        <StyledTitleBlock>
          <StyledTitleRow>
            <Text variant="header" weight="bold" color="var(--color-text-dark)">
              Lessons and Formative Quizzes
            </Text>
            <Text
              variant="md"
              weight="bold"
              color="var(--color-primary)"
            >
              View Completed
            </Text>
          </StyledTitleRow>
          <Text variant="sm" color="var(--color-text)">
            Click on an objective below to view full details and options.
          </Text>
        </StyledTitleBlock>

        <StyledGuideCard>
          <LightbulbIcon width="24px" height="24px" />
          <Text variant="md" color="var(--color-text)">
            Lessons &amp; Formative
            <br />
            Quizzes Guide
          </Text>
        </StyledGuideCard>
      </StyledLeftSection>

      <StyledRightSection>
        <SearchInput
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          placeholder="Search"
        />
        <StyledSortButton>
          Sort By Scheduled
          <StyledChevronIcon>
            <ChevronDownIcon width={24} height={24} />
          </StyledChevronIcon>
        </StyledSortButton>
      </StyledRightSection>
    </StyledWrapper>
  );
}
