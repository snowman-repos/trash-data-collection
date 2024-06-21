import RecordsAccordion from 'src/components/RecordsAccordion/RecordsAccordion'

export const QUERY = gql`
  query RecordsQuery {
    records {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div className="text-center mb-5 mt-5 text-light-400">
    <h1>
      <i className="bi bi-arrow-down-circle mb-2 icon--large d-block"></i>
      No Records Yet
    </h1>
    <p className="lh-sm">Use the button below to add your cleanup record.</p>
  </div>
)

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ records }) => {
  return <RecordsAccordion records={records} />
}
