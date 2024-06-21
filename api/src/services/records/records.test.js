import {
  records,
  record,
  createRecord,
  updateRecord,
  deleteRecord,
} from './records'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('records', () => {
  scenario('returns all records', async (scenario) => {
    const result = await records()

    expect(result.length).toEqual(Object.keys(scenario.record).length)
  })

  scenario('returns a single record', async (scenario) => {
    const result = await record({ id: scenario.record.one.id })

    expect(result).toEqual(scenario.record.one)
  })

  scenario('creates a record', async () => {
    const result = await createRecord({
      input: {
        date: 'String',
        group: 'String',
        location: 'String',
        data: 'String',
      },
    })

    expect(result.date).toEqual('String')
    expect(result.group).toEqual('String')
    expect(result.location).toEqual('String')
    expect(result.data).toEqual('String')
  })

  scenario('updates a record', async (scenario) => {
    const original = await record({ id: scenario.record.one.id })
    const result = await updateRecord({
      id: original.id,
      input: { date: 'String2' },
    })

    expect(result.date).toEqual('String2')
  })

  scenario('deletes a record', async (scenario) => {
    const original = await deleteRecord({
      id: scenario.record.one.id,
    })
    const result = await record({ id: original.id })

    expect(result).toEqual(null)
  })
})
