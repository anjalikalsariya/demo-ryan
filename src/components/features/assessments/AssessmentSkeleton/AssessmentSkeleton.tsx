import {
  Bone,
  SkeletonBarRow,
  SkeletonCard,
  SkeletonDataBlock,
  SkeletonDescription,
  SkeletonHeader,
  SkeletonHeaderRight,
  SkeletonLastActivity,
  SkeletonProgressRow,
  SkeletonSection,
} from "./AssessmentSkeleton.style";

function SkeletonProgressSection({
  hasSecondBar = true,
  compact = false,
  twoLineLabel = false,
}: {
  hasSecondBar?: boolean;
  compact?: boolean;
  twoLineLabel?: boolean;
}) {
  return (
    <SkeletonSection compact={compact}>
      <Bone width="52px" height={twoLineLabel ? "22px" : "10px"} />
      <Bone width="36px" height="20px" radius="10px" />
      <SkeletonBarRow>
        <Bone height="8px" />
        <Bone width="36px" height="10px" />
      </SkeletonBarRow>
      {hasSecondBar && (
        <SkeletonBarRow>
          <Bone height="8px" />
          <Bone width="28px" height="10px" />
        </SkeletonBarRow>
      )}
    </SkeletonSection>
  );
}

export default function AssessmentSkeleton() {
  return (
    <SkeletonCard aria-hidden="true" aria-busy="true">
      <SkeletonHeader>
        <Bone width="16px" height="16px" radius="3px" />
        <Bone width="220px" height="14px" />
        <SkeletonHeaderRight>
          <Bone width="20px" height="20px" radius="3px" />
          <Bone width="70px" height="12px" />
          <SkeletonLastActivity>
            <Bone width="64px" height="10px" />
            <Bone width="48px" height="10px" />
          </SkeletonLastActivity>
          <Bone width="80px" height="32px" radius="20px" />
        </SkeletonHeaderRight>
      </SkeletonHeader>

      <SkeletonDataBlock>
        <SkeletonDescription>
          <Bone width="90%" height="10px" />
          <Bone width="70%" height="10px" />
        </SkeletonDescription>

        <SkeletonProgressRow>
          <SkeletonProgressSection compact twoLineLabel hasSecondBar={false} />
          <SkeletonProgressSection />
          <SkeletonProgressSection />
          <SkeletonProgressSection />
        </SkeletonProgressRow>
      </SkeletonDataBlock>
    </SkeletonCard>
  );
}
