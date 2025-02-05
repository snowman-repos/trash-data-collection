import { navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { Container } from '@govtechsg/sgds-react/Container'
import { Button } from '@govtechsg/sgds-react/Button'
import RecordsCell from 'src/components/RecordsCell/RecordsCell'
import { useEffect } from 'react'
import track from 'src/lib/analytics'

const HomePage = () => {
  const handleClick = () => {
    track({ event: 'New Record' })
    navigate(routes.addData())
  }

  useEffect(() => {
    track({ event: 'Home Page View' })
  })
  return (
    <>
      <Metadata
        title="All Trash Data"
        description="See and download all trash data."
      />

      <Container fluid>
        <div className="d-flex flex-column dvh-100">
          <div>
            <h1 className="fs-2 mt-3 mb-3">All Trash Data</h1>
          </div>
          <div className="flex-grow-1 overflow-scroll">
            <RecordsCell />
          </div>
          <div className="text-center">
            <Button className="mt-3 mb-3" size="lg" onClick={handleClick}>
              Submit New Cleanup Data
            </Button>
          </div>
        </div>
      </Container>
    </>
  )
}

export default HomePage
