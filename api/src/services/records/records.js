import { db } from 'src/lib/db'

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
