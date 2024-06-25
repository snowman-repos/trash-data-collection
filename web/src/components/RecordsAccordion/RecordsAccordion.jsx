import writeXlsxFile from 'write-excel-file'
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from '@govtechsg/sgds-react/Accordion'
import DataTable from 'src/components/DataTable/DataTable'

const getData = (records) => {
  let data = []
  const HEADER_ROW = [
    {
      value: 'Date',
      fontWeight: 'bold',
      fontSize: '12',
      backgroundColor: '#f3f3f3',
      bottomBorderColor: '#000000',
      alignVertical: 'center',
    },
    {
      value: 'Location',
      fontWeight: 'bold',
      fontSize: '12',
      backgroundColor: '#f3f3f3',
      bottomBorderColor: '#000000',
      alignVertical: 'center',
    },
    {
      value: 'Group',
      fontWeight: 'bold',
      fontSize: '12',
      backgroundColor: '#f3f3f3',
      bottomBorderColor: '#000000',
      alignVertical: 'center',
    },
    {
      value: 'Number of Volunteers',
      fontWeight: 'bold',
      fontSize: '12',
      backgroundColor: '#f3f3f3',
      bottomBorderColor: '#000000',
      alignVertical: 'center',
    },
    {
      value: 'Number of Trash Bags Used',
      fontWeight: 'bold',
      fontSize: '12',
      backgroundColor: '#f3f3f3',
      bottomBorderColor: '#000000',
      alignVertical: 'center',
    },
    {
      value: 'Total Weight (kg)',
      fontWeight: 'bold',
      fontSize: '12',
      backgroundColor: '#f3f3f3',
      bottomBorderColor: '#000000',
      alignVertical: 'center',
    },
    {
      value: 'Weight / Volunteer (kg)',
      fontWeight: 'bold',
      fontSize: '12',
      backgroundColor: '#f3f3f3',
      bottomBorderColor: '#000000',
      alignVertical: 'center',
    },
    {
      value: 'Cans',
      fontWeight: 'bold',
      fontSize: '12',
      backgroundColor: '#f3f3f3',
      bottomBorderColor: '#000000',
      alignVertical: 'center',
    },
    {
      value: 'Drums',
      fontWeight: 'bold',
      fontSize: '12',
      backgroundColor: '#f3f3f3',
      bottomBorderColor: '#000000',
      alignVertical: 'center',
    },
    {
      value: 'Electronics',
      fontWeight: 'bold',
      fontSize: '12',
      backgroundColor: '#f3f3f3',
      bottomBorderColor: '#000000',
      alignVertical: 'center',
    },
    {
      value: 'Footwear',
      fontWeight: 'bold',
      fontSize: '12',
      backgroundColor: '#f3f3f3',
      bottomBorderColor: '#000000',
      alignVertical: 'center',
    },
    {
      value: 'Glass',
      fontWeight: 'bold',
      fontSize: '12',
      backgroundColor: '#f3f3f3',
      bottomBorderColor: '#000000',
      alignVertical: 'center',
    },
    {
      value: 'Jerry Cans',
      fontWeight: 'bold',
      fontSize: '12',
      backgroundColor: '#f3f3f3',
      bottomBorderColor: '#000000',
      alignVertical: 'center',
    },
    {
      value: 'Plastic Containers',
      fontWeight: 'bold',
      fontSize: '12',
      backgroundColor: '#f3f3f3',
      bottomBorderColor: '#000000',
      alignVertical: 'center',
    },
    {
      value: 'Plastic Straws',
      fontWeight: 'bold',
      fontSize: '12',
      backgroundColor: '#f3f3f3',
      bottomBorderColor: '#000000',
      alignVertical: 'center',
    },
    {
      value: 'Smoking Related',
      fontWeight: 'bold',
      fontSize: '12',
      backgroundColor: '#f3f3f3',
      bottomBorderColor: '#000000',
      alignVertical: 'center',
    },
    {
      value: 'Tires',
      fontWeight: 'bold',
      fontSize: '12',
      backgroundColor: '#f3f3f3',
      bottomBorderColor: '#000000',
      alignVertical: 'center',
    },
    {
      value: 'Other Items',
      fontWeight: 'bold',
      fontSize: '12',
      backgroundColor: '#f3f3f3',
      bottomBorderColor: '#000000',
      alignVertical: 'center',
    },
  ]

  data.push(HEADER_ROW)

  for (let i = 0; i < records.length; i++) {
    data.push([
      {
        value: new Date(records[i].date),
        type: Date,
        format: 'dd/mm/yyyy',
      },
      {
        value: records[i].location,
        type: String,
      },
      {
        value: records[i].group,
        type: String,
      },
      {
        value: records[i].numberOfVolunteers,
        type: Number,
      },
      {
        value: records[i].numberOfTrashBagsUsed,
        type: Number,
      },
      {
        value: records[i].totalWeight,
        type: Number,
      },
      {
        value: records[i].numberOfVolunteers
          ? parseFloat(
              (records[i].totalWeight / records[i].numberOfVolunteers).toFixed(
                2
              )
            )
          : '',
        type: Number,
      },
      {
        value: records[i].cans,
        type: Number,
      },
      {
        value: records[i].drums,
        type: Number,
      },
      {
        value: records[i].electronics,
        type: Number,
      },
      {
        value: records[i].footwear,
        type: Number,
      },
      {
        value: records[i].glass,
        type: Number,
      },
      {
        value: records[i].jerryCans,
        type: Number,
      },
      {
        value: records[i].plasticContainers,
        type: Number,
      },
      {
        value: records[i].plasticStraws,
        type: Number,
      },
      {
        value: records[i].smokingRelated,
        type: Number,
      },
      {
        value: records[i].tires,
        type: Number,
      },
      {
        value: records[i].other,
        type: String,
      },
    ])
  }

  return data
}

const RecordsAccordion = ({ records }) => {
  const downloadExcel = async (e) => {
    e.preventDefault()
    let date = new Date()
    await writeXlsxFile(getData(records), {
      fileName: `trash-data-${date
        .toLocaleDateString('en-SG')
        .replace(/\//g, '-')
        .replace(/,/, '')}.xlsx`,
    })
  }
  return (
    <>
      <Accordion>
        {records.map((record) => (
          <AccordionItem eventKey={record.id.toString()} key={record.id}>
            <AccordionHeader>
              <span>
                <span className="fw-bold">
                  {new Date(record.date).toLocaleDateString('en-SG')}
                </span>
                <br />
                <span>{record.group}</span>
              </span>
              <span className="text-center fw-bold fs-4">
                {record.totalWeight + 'kg'}
              </span>
            </AccordionHeader>
            <AccordionBody>
              <DataTable record={record} />
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
      <a
        className="text-end mt-3 mb-3 d-block fs-4"
        href="#"
        title="Download all data"
        onClick={downloadExcel}
      >
        <i className="bi bi-cloud-download me-2"></i>
        Download all data
      </a>
    </>
  )
}

export default RecordsAccordion
