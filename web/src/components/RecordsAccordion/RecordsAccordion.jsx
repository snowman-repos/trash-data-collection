import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from '@govtechsg/sgds-react/Accordion'
import DataTable from 'src/components/DataTable/DataTable'

const RecordsAccordion = () => {
  return (
    <>
      <Accordion className="trash-data">
        <AccordionItem eventKey="0">
          <AccordionHeader>
            <span>16/06/2024</span>
            <span>SG Beach Warriors</span>
            <span>456kg</span>
          </AccordionHeader>
          <AccordionBody>
            <DataTable />
          </AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="1">
          <AccordionHeader>
            <span>16/06/2024</span>
            <span>SG Beach Warriors</span>
            <span>456kg</span>
          </AccordionHeader>
          <AccordionBody>Trash Data</AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="2">
          <AccordionHeader>
            <span>16/06/2024</span>
            <span>SG Beach Warriors</span>
            <span>456kg</span>
          </AccordionHeader>
          <AccordionBody>Trash Data</AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="3">
          <AccordionHeader>
            <span>16/06/2024</span>
            <span>SG Beach Warriors</span>
            <span>456kg</span>
          </AccordionHeader>
          <AccordionBody>Trash Data</AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="4">
          <AccordionHeader>
            <span>16/06/2024</span>
            <span>SG Beach Warriors</span>
            <span>456kg</span>
          </AccordionHeader>
          <AccordionBody>Trash Data</AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="5">
          <AccordionHeader>
            <span>16/06/2024</span>
            <span>SG Beach Warriors</span>
            <span>456kg</span>
          </AccordionHeader>
          <AccordionBody>Trash Data</AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="6">
          <AccordionHeader>
            <span>16/06/2024</span>
            <span>SG Beach Warriors</span>
            <span>456kg</span>
          </AccordionHeader>
          <AccordionBody>Trash Data</AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="7">
          <AccordionHeader>
            <span>16/06/2024</span>
            <span>SG Beach Warriors</span>
            <span>456kg</span>
          </AccordionHeader>
          <AccordionBody>Trash Data</AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="8">
          <AccordionHeader>
            <span>16/06/2024</span>
            <span>SG Beach Warriors</span>
            <span>456kg</span>
          </AccordionHeader>
          <AccordionBody>Trash Data</AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="9">
          <AccordionHeader>
            <span>16/06/2024</span>
            <span>SG Beach Warriors</span>
            <span>456kg</span>
          </AccordionHeader>
          <AccordionBody>Trash Data</AccordionBody>
        </AccordionItem>
      </Accordion>
      <a
        className="text-end mt-3 mb-3 d-block fs-4"
        href=""
        title="Download all data"
      >
        <i class="bi bi-cloud-download me-2"></i>
        Download all data
      </a>
    </>
  )
}

export default RecordsAccordion
