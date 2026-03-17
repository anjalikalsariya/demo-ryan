import { ProgressBar, Text, ToggleSwitch } from "@/components/ui";
import type React from "react";
import type { ProgressData } from "@/store/api/assessmentsApi";
import {
  StyledBarRow,
  StyledBarStack,
  StyledSectionBody,
  StyledSectionWrapper,
} from "./AssessmentCard.style";

type Props = {
  label: React.ReactNode;
  ariaLabel: string;
  section: ProgressData;
  animated: boolean;
  compact?: boolean;
};

export default function ProgressSection({ label, ariaLabel, section, animated, compact }: Props) {
  const completionPct = animated
    ? (section.completed / section.total) * 100
    : 0;
  const masteryPct = animated ? (section.mastery ?? 0) : 0;

  return (
    <StyledSectionWrapper compact={compact}>
      <Text variant="xxs" align="center">
        {label}
      </Text>
      <StyledSectionBody>
        <ToggleSwitch
          checked={true}
          onChange={() => {}}
          ariaLabel={`Toggle ${ariaLabel}`}
        />
        <StyledBarStack>
          <StyledBarRow>
            <ProgressBar
              value={completionPct}
              max={100}
              color="var(--color-progress-blue)"
              ariaLabel={`${ariaLabel} completion: ${section.completed} of ${section.total} students`}
            />
            <Text
              variant="xs"
              weight="medium"
            >
              {section.completed} / {section.total}
            </Text>
          </StyledBarRow>
          {section.mastery !== undefined && (
            <StyledBarRow>
              <ProgressBar
                value={masteryPct}
                max={100}
                color="var(--color-progress-purple)"
                ariaLabel={`${ariaLabel} mastery: ${section.mastery}%`}
              />
              <Text
                variant="xs"
                weight="medium"
              >
                {section.mastery}%
              </Text>
            </StyledBarRow>
          )}
        </StyledBarStack>
      </StyledSectionBody>
    </StyledSectionWrapper>
  );
}
