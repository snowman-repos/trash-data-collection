import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from '@govtechsg/sgds-react/Accordion'
import DataTable from 'src/components/DataTable/DataTable'

const RecordsAccordion = ({ records }) => {
  return (
    <>
      <Accordion className="trash-data">
        {records.map((record) => (
          <AccordionItem eventKey={record.id.toString()} key={record.id}>
            <AccordionHeader>
              <span>{new Date(record.date).toLocaleDateString('en-SG')}</span>
              <span>{record.group}</span>
              <span>{record.totalWeight + 'kg'}</span>
            </AccordionHeader>
            <AccordionBody>
              <DataTable record={record} />
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
      <a
        className="text-end mt-3 mb-3 d-block fs-4"
        href=""
        title="Download all data"
      >
        <i className="bi bi-cloud-download me-2"></i>
        Download all data
      </a>
    </>
  )
}

export default RecordsAccordion
