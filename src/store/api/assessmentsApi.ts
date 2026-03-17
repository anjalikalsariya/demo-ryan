import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { MOCK_ASSESSMENTS } from './mock'

export interface ProgressData {
  completed: number
  total: number
  mastery?: number // percentage 0–100
}

export interface Assessment {
  id: number
  type: 'practice-quiz' | 'standard'
  title: string
  hasStrengthIcon?: boolean
  scheduledDate: string | null // e.g. "Tue Sep 9" or null for not scheduled
  lastActivity: string // e.g. "9-2-26"
  description: string
  lessonGuidedPractice: ProgressData
  independentPractice: ProgressData
  continuousPractice: ProgressData
  formativeQuiz: ProgressData
  studentsNeedingAttention?: number
}

const LOAD_DELAY_MS = 1500

export const assessmentsApi = createApi({
  reducerPath: 'assessmentsApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getAssessments: builder.query<Assessment[], void>({
      queryFn: async () => {
        await new Promise((resolve) => setTimeout(resolve, LOAD_DELAY_MS))
        return { data: MOCK_ASSESSMENTS }
      },
    }),
  }),
})

export const { useGetAssessmentsQuery } = assessmentsApi
