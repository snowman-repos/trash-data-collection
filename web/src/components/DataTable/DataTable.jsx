import { Table, TableBody, TableDataCell, TableHeaderCell, TableRow } from '@govtechsg/sgds-react/Table'

const DataTable = () => {
  return (
    <Table bordered striped size="sm">
                    <TableBody>
                      <TableRow>
                        <TableHeaderCell>Total Weight</TableHeaderCell>
                        <TableDataCell>456kg</TableDataCell>
                      </TableRow>
                      <TableRow>
                        <TableHeaderCell>Total Trash Bags</TableHeaderCell>
                        <TableDataCell>42</TableDataCell>
                      </TableRow>
                      <TableRow>
                        <TableHeaderCell>Plastic Containers</TableHeaderCell>
                        <TableDataCell>789</TableDataCell>
                      </TableRow>
                    </TableBody>
                  </Table>
  )
}

export default DataTable
