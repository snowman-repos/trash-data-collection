import { navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { Container } from '@govtechsg/sgds-react/Container'
import { Button } from '@govtechsg/sgds-react/Button'
import RecordsCell from 'src/components/RecordsCell/RecordsCell'

const HomePage = () => {
  const handleClick = () => {
    navigate(routes.addNewRecord())
  }
  return (
    <>
      <Metadata
        title="All Trash Data"
        description="See and download all trash data."
      />

      <Container fluid>
        <div className="d-flex flex-column vh-100">
          <div>
            <h1 className="fs-2 mt-3 mb-3">All Trash Data</h1>
          </div>
          <div className="flex-grow-1 overflow-scroll">
            <RecordsCell />
          </div>
          <div className="text-center">
            <Button className="mt-3 mb-3" size="lg" onClick={handleClick}>
              Add New Cleanup Record
            </Button>
          </div>
        </div>
      </Container>
    </>
  )
}

export default HomePage
