import { useEffect, useState } from "react";
import { Button, Text } from "@/components/ui";
import { CalendarIcon, CopyIcon } from "@/assets/icons";
import type { Assessment } from "@/store/api/assessmentsApi";
import {
  StyledCardHeader,
  StyledCardLeft,
  StyledCardWrapper,
  StyledDataBlock,
  StyledFormativeSectionWrapper,
  StyledLastActivityBlock,
  StyledMetaBlock,
  StyledProgressRow,
  StyledScheduleBlock,
  StyledScheduleIconWrapper,
  StyledSectionDivider,
  StyledStrengthIcon,
  StyledTitleArea,
  StyledTitleIconWrapper,
  StyledTitleText,
} from "./AssessmentCard.style";
import ProgressSection from "./ProgressSection";

type Props = {
  assessment: Assessment;
  animationDelay?: number;
};

export default function AssessmentCard({
  assessment,
  animationDelay = 0,
}: Props) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const SLIDE_IN_BUFFER_MS = 60;
    const frame = requestAnimationFrame(() => {
      setTimeout(() => setAnimated(true), SLIDE_IN_BUFFER_MS + animationDelay);
    });
    return () => cancelAnimationFrame(frame);
  }, [animationDelay]);

  const {
    title,
    hasStrengthIcon,
    scheduledDate,
    lastActivity,
    description,
    lessonGuidedPractice,
    independentPractice,
    continuousPractice,
    formativeQuiz,
  } = assessment;

  return (
    <StyledCardWrapper
      animationDelay={animationDelay}
      aria-label={`Assessment: ${title}`}
    >
      <StyledCardHeader>
        <StyledCardLeft>
          <StyledTitleArea>
            <StyledTitleIconWrapper aria-hidden="true">
              <CopyIcon width={16} height={16} />
            </StyledTitleIconWrapper>
            <StyledTitleText weight="bold" variant="md">
              {title}
            </StyledTitleText>
            {hasStrengthIcon && (
              <StyledStrengthIcon aria-label="Strength indicator">
                💪
              </StyledStrengthIcon>
            )}
          </StyledTitleArea>
          <StyledScheduleBlock>
            <StyledScheduleIconWrapper aria-hidden="true">
              <CalendarIcon width={20} height={20} />
            </StyledScheduleIconWrapper>
            <Text variant={scheduledDate ? "lg" : "sm"} align="center">
              {scheduledDate ?? "Not Scheduled"}
            </Text>
          </StyledScheduleBlock>

          <StyledLastActivityBlock>
            <Text variant="xs">Last Activity</Text>
            <Text variant="xs" align="center">
              {lastActivity}
            </Text>
          </StyledLastActivityBlock>
        </StyledCardLeft>
        <StyledMetaBlock>
          <Button aria-label={`Monitor ${title}`} variant="primary">
            Monitor
          </Button>
        </StyledMetaBlock>
      </StyledCardHeader>

      <StyledDataBlock>
        <Text variant="sm">{description}</Text>
        <StyledProgressRow>
          <ProgressSection
            label={
              <>
                Lesson
                <br />
                Guided Practice
              </>
            }
            ariaLabel="Lesson Guided Practice"
            section={lessonGuidedPractice}
            animated={animated}
            compact
          />
          <StyledSectionDivider />

          <ProgressSection
            label={
              <>
                Independent
                <br />
                Practice
              </>
            }
            ariaLabel="Independent Practice"
            section={independentPractice}
            animated={animated}
            compact
          />
          <StyledSectionDivider />

          <ProgressSection
            label={
              <>
                Continuous
                <br />
                Practice
              </>
            }
            ariaLabel="Continuous Practice"
            section={continuousPractice}
            animated={animated}
            compact
          />
          <StyledSectionDivider />

          <StyledFormativeSectionWrapper>
            <ProgressSection
              label={
                <>
                  Formative 
                  <br />
                  Quiz
                </>
              }
              ariaLabel="Formative Quiz"
              section={formativeQuiz}
              animated={animated}
            />
            
          </StyledFormativeSectionWrapper>
        </StyledProgressRow>
      </StyledDataBlock>
    </StyledCardWrapper>
  );
}
