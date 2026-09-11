import React, { Suspense } from 'react'

const QuizApp = React.lazy(() => import('quiz/QuizApp'))

const LmsApp = React.lazy(
  () => import('lms/LmsApp')
)

const FeedbackApp = React.lazy(() => import('feedback/FeedbackApp'))


function App() {
  return (
    <div>
      <h1>Host Application</h1>

      <Suspense fallback={<div>Loading Quiz...</div>}>
        <QuizApp />
      </Suspense>

      <Suspense fallback={<div>Loading LMS...</div>}>
        <LmsApp />
      </Suspense>

      <Suspense fallback={<div>Loading Feedback...</div>}>
        <FeedbackApp />
      </Suspense>
    </div>
  )
}

export default App