import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/thanks" page={ThanksPage} name="thanks" />
      <Route path="/add-data" page={AddDataPage} name="addData" />
      <Route path="/add-new-record" page={AddNewRecordPage} name="addNewRecord" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
