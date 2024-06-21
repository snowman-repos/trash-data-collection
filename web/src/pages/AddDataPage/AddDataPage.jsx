import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { RecordContext } from 'src/context'
import { useContext } from 'react'

const AddDataPage = () => {
  const [recordContext, setRecordContext] = useContext(RecordContext)
  console.log(recordContext)

  return (
    <>
      <Metadata
        title="Add Data"
        description="Provide details about the trash you've collected"
      />

      <h1>AddDataPage</h1>
      <p>
        Find me in <code>./web/src/pages/AddDataPage/AddDataPage.jsx</code>
      </p>
      <p>
        My default route is named <code>addData</code>, link to me with `
        <Link to={routes.addData()}>AddData</Link>`
      </p>
    </>
  )
}

export default AddDataPage
