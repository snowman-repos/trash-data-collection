import {
  records,
  record,
  createRecord,
  updateRecord,
  deleteRecord,
  getLocation,
} from './records'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('records', () => {
  const mockLat = 1.234567
  const mockLong = 3.456789

  let originalFetch

  beforeAll(() => {
    originalFetch = global.fetch
  })

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ results: [] }), // Simulating empty results
      })
    )
  })

  afterEach(() => {
    global.fetch.mockClear()
  })

  afterAll(() => {
    global.fetch = originalFetch
  })

  it('throws error when no results are found', async () => {
    await expect(getLocation({ lat: mockLat, long: mockLong })).rejects.toThrow(
      'No results found'
    )
  })

  it('fetches location correctly with valid results', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [
              {
                formatted_address: '123 Main St, Example City',
              },
            ],
          }),
      })
    )

    const location = await getLocation({ lat: mockLat, long: mockLong })
    expect(location).toBe('123 Main St, Example City')
  })

  it('handles API error', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Failed to fetch')))

    await expect(getLocation({ lat: mockLat, long: mockLong })).rejects.toThrow(
      'Failed to fetch'
    )
  })

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
        numberOfVolunteers: 5,
        totalWeight: 100,
        trashBagsUsed: 20,
        cans: 1,
        drums: 2,
        glass: 3,
        electronics: 4,
        footwear: 5,
        jerryCans: 6,
        plasticContainers: 7,
        plasticStraws: 8,
        smokingRelated: 9,
        tires: 10,
        other: 'String',
      },
    })

    expect(result.date).toEqual('String')
    expect(result.group).toEqual('String')
    expect(result.location).toEqual('String')
    expect(result.numberOfVolunteers).toEqual(5)
    expect(result.totalWeight).toEqual(100)
    expect(result.trashBagsUsed).toEqual(20)
    expect(result.cans).toEqual(1)
    expect(result.drums).toEqual(2)
    expect(result.glass).toEqual(3)
    expect(result.electronics).toEqual(4)
    expect(result.footwear).toEqual(5)
    expect(result.jerryCans).toEqual(6)
    expect(result.plasticContainers).toEqual(7)
    expect(result.plasticStraws).toEqual(8)
    expect(result.smokingRelated).toEqual(9)
    expect(result.tires).toEqual(10)
    expect(result.other).toEqual('String')
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
