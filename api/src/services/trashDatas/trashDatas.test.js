import {
  trashDatas,
  trashData,
  createTrashData,
  updateTrashData,
  deleteTrashData,
} from './trashDatas'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('trashDatas', () => {
  scenario('returns all trashDatas', async (scenario) => {
    const result = await trashDatas()

    expect(result.length).toEqual(Object.keys(scenario.trashData).length)
  })

  scenario('returns a single trashData', async (scenario) => {
    const result = await trashData({ id: scenario.trashData.one.id })

    expect(result).toEqual(scenario.trashData.one)
  })

  scenario('creates a trashData', async () => {
    const result = await createTrashData({
      input: { data: 'String' },
    })

    expect(result.data).toEqual('String')
  })

  scenario('updates a trashData', async (scenario) => {
    const original = await trashData({
      id: scenario.trashData.one.id,
    })
    const result = await updateTrashData({
      id: original.id,
      input: { data: 'String2' },
    })

    expect(result.data).toEqual('String2')
  })

  scenario('deletes a trashData', async (scenario) => {
    const original = await deleteTrashData({
      id: scenario.trashData.one.id,
    })
    const result = await trashData({ id: original.id })

    expect(result).toEqual(null)
  })
})
