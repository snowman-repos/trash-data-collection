import { navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { Container } from '@govtechsg/sgds-react/Container'
import { Button } from '@govtechsg/sgds-react/Button'
import { useEffect, useState } from 'react'
import mixpanel from 'mixpanel-browser'
import config from 'src/config'

const ThanksPage = () => {
  const [feedbackGiven, setFeedbackGiven] = useState(false)
  const [hoverValue, setHoverValue] = useState(0)
  const [feedbackValue, setFeedbackValue] = useState(0)

  useEffect(() => {
    mixpanel.init(config.mixPanelTrackingCode, {
      debug: true,
      persistence: 'localStorage',
    })
  })

  const saveFeedback = (value) => {
    setFeedbackValue(value)
    setFeedbackGiven(true)
    mixpanel.track('Feedback', {
      score: value,
    })
  }

  return (
    <>
      <Metadata
        title="Data Saved!"
        description="Your trash collection data has been saved"
      />

      <Container fluid>
        <div className="d-flex flex-column dvh-100 text-center">
          <div>
            <h1 className="fs-2 mt-5 mb-5">Thanks!</h1>
          </div>
          <div className="flex-grow-1 overflow-scroll">
            <p className="mb-0">Your data has been saved.</p>
            <div className="feedback-form d-flex justify-content-center">
              <button
                className="feedback-form-button"
                onMouseEnter={() => setHoverValue(1)}
                onMouseLeave={() => setHoverValue(0)}
                onClick={() => saveFeedback(1)}
              >
                <i
                  aria-hidden="true"
                  className={
                    hoverValue >= 1 || feedbackValue >= 1
                      ? 'bi bi-star-fill'
                      : 'bi bi-star'
                  }
                />
              </button>
              <button
                className="feedback-form-button"
                onMouseEnter={() => setHoverValue(2)}
                onMouseLeave={() => setHoverValue(0)}
                onClick={() => saveFeedback(2)}
              >
                <i
                  aria-hidden="true"
                  className={
                    hoverValue >= 2 || feedbackValue >= 2
                      ? 'bi bi-star-fill'
                      : 'bi bi-star'
                  }
                />
              </button>
              <button
                className="feedback-form-button"
                onMouseEnter={() => setHoverValue(3)}
                onMouseLeave={() => setHoverValue(0)}
                onClick={() => saveFeedback(3)}
              >
                <i
                  aria-hidden="true"
                  className={
                    hoverValue >= 3 || feedbackValue >= 3
                      ? 'bi bi-star-fill'
                      : 'bi bi-star'
                  }
                />
              </button>
              <button
                className="feedback-form-button"
                onMouseEnter={() => setHoverValue(4)}
                onMouseLeave={() => setHoverValue(0)}
                onClick={() => saveFeedback(4)}
              >
                <i
                  aria-hidden="true"
                  className={
                    hoverValue >= 4 || feedbackValue >= 4
                      ? 'bi bi-star-fill'
                      : 'bi bi-star'
                  }
                />
              </button>
              <button
                className="feedback-form-button"
                onMouseEnter={() => setHoverValue(5)}
                onMouseLeave={() => setHoverValue(0)}
                onClick={() => saveFeedback(5)}
              >
                <i
                  aria-hidden="true"
                  className={
                    hoverValue === 5 || feedbackValue === 5
                      ? 'bi bi-star-fill'
                      : 'bi bi-star'
                  }
                />
              </button>
            </div>
            {feedbackGiven ? <p>Thanks for the feedback!</p> : ''}
            <p>
              Please send comments or suggestions to Darryl (
              <a
                href="mailto:dazsnow@gmail.com?subject=Feedback on the Data Collection Experiment"
                title="Email Darryl with feedback"
              >
                dazsnow@gmail.com
              </a>
              )
            </p>
          </div>
          <div>
            <Button
              className="mt-3 mb-3"
              size="lg"
              onClick={() => {
                //submit feedback value to mixpanel
                navigate(routes.home())
              }}
            >
              View All Trash Data
            </Button>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ThanksPage
