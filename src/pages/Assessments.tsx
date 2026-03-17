import { Header, AssessmentCard, AssessmentSkeleton } from "@/components/features/assessments";
import { useGetAssessmentsQuery } from "@/store/api/assessmentsApi";
import { CardList, Container, ErrorMessage, PageWrapper } from "./Assessments.style";

const SKELETON_COUNT = 4;

function Assessments() {
  const { data, isLoading, isError } = useGetAssessmentsQuery();

  return (
    <PageWrapper>
      <Container>
        <Header />
        {isLoading && (
          <div role="status" aria-label="Loading assessments">
            {Array.from({ length: SKELETON_COUNT }, (_, i) => (
              <AssessmentSkeleton key={i} />
            ))}
          </div>
        )}

        {isError && (
          <ErrorMessage role="alert">
            Failed to load assessments. Please try again.
          </ErrorMessage>
        )}

        {data && (
          <CardList>
            {data.map((assessment, index) => (
              <AssessmentCard
                key={assessment.id}
                assessment={assessment}
                animationDelay={index * 60}
              />
            ))}
          </CardList>
        )}
      </Container>
    </PageWrapper>
  );
}

export default Assessments;
