import {
  Table,
  TableBody,
  TableDataCell,
  TableHeaderCell,
  TableRow,
} from '@govtechsg/sgds-react/Table'

import config from 'src/config'

const DataTable = ({ record }) => {
  return (
    <Table bordered striped size="sm" className="lh-1">
      <TableBody>
        <TableRow>
          <TableHeaderCell>Location</TableHeaderCell>
          <TableDataCell>{record.location}</TableDataCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell>Number of Volunteers</TableHeaderCell>
          <TableDataCell>{record.numberOfVolunteers}</TableDataCell>
        </TableRow>
        {record.numberOfVolunteers !== 0 && (
          <TableRow>
            <TableHeaderCell>
              Trash per Volunteer ({config.weightUnits})
            </TableHeaderCell>
            <TableDataCell>
              {(record.totalWeight / record.numberOfVolunteers).toFixed(2)}
            </TableDataCell>
          </TableRow>
        )}
        {record.trashBagsUsed !== 0 && (
          <TableRow>
            <TableHeaderCell>Trash Bags Used</TableHeaderCell>
            <TableDataCell>{record.trashBagsUsed}</TableDataCell>
          </TableRow>
        )}
        {record.cans !== 0 && (
          <TableRow>
            <TableHeaderCell>Cans</TableHeaderCell>
            <TableDataCell>{record.cans}</TableDataCell>
          </TableRow>
        )}
        {record.drums !== 0 && (
          <TableRow>
            <TableHeaderCell>Drums</TableHeaderCell>
            <TableDataCell>{record.drums}</TableDataCell>
          </TableRow>
        )}
        {record.glass !== 0 && (
          <TableRow>
            <TableHeaderCell>Glass</TableHeaderCell>
            <TableDataCell>{record.glass}</TableDataCell>
          </TableRow>
        )}
        {record.electronics !== 0 && (
          <TableRow>
            <TableHeaderCell>Electronics</TableHeaderCell>
            <TableDataCell>{record.electronics}</TableDataCell>
          </TableRow>
        )}
        {record.footwear !== 0 && (
          <TableRow>
            <TableHeaderCell>Footwear</TableHeaderCell>
            <TableDataCell>{record.footwear}</TableDataCell>
          </TableRow>
        )}
        {record.jerryCans !== 0 && (
          <TableRow>
            <TableHeaderCell>Jerry Cans</TableHeaderCell>
            <TableDataCell>{record.jerryCans}</TableDataCell>
          </TableRow>
        )}
        {record.plasticContainers !== 0 && (
          <TableRow>
            <TableHeaderCell>Plastic Containers</TableHeaderCell>
            <TableDataCell>{record.plasticContainers}</TableDataCell>
          </TableRow>
        )}
        {record.plasticStraws !== 0 && (
          <TableRow>
            <TableHeaderCell>Plastic Straws</TableHeaderCell>
            <TableDataCell>{record.plasticStraws}</TableDataCell>
          </TableRow>
        )}
        {record.smokingRelated !== 0 && (
          <TableRow>
            <TableHeaderCell>Smoking Related</TableHeaderCell>
            <TableDataCell>{record.smokingRelated}</TableDataCell>
          </TableRow>
        )}
        {record.tires !== 0 && (
          <TableRow>
            <TableHeaderCell>Tires</TableHeaderCell>
            <TableDataCell>{record.tires}</TableDataCell>
          </TableRow>
        )}
        {record.other !== '' && (
          <TableRow>
            <TableHeaderCell>Other</TableHeaderCell>
            <TableDataCell>{record.other}</TableDataCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default DataTable
