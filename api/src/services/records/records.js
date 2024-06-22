import { db } from 'src/lib/db'

export const getLocation = async ({ lat, long }) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.GOOGLE_API_KEY}`
  )
  const results = await response.json()
  return results.results[0].formatted_address
}

export const records = () => {
  return db.record.findMany()
}

export const record = ({ id }) => {
  return db.record.findUnique({
    where: { id },
  })
}

export const createRecord = ({ input }) => {
  return db.record.create({
    data: input,
  })
}

export const updateRecord = ({ id, input }) => {
  return db.record.update({
    data: input,
    where: { id },
  })
}

export const deleteRecord = ({ id }) => {
  return db.record.delete({
    where: { id },
  })
}
