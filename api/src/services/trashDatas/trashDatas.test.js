import { trashData } from './trashDatas'

describe('trashData function', () => {
  const mockCompletion = {
    choices: [
      {
        message: {
          content: JSON.stringify({
            trashBags: [15.0, 5.5, 6.2, 3.8, 2.1],
            otherWeights: [],
            items: {
              plasticContainers: 50,
              plasticStraws: 25,
              glassContainers: 10,
              metalCans: 20,
              footwear: 12,
              smokingRelated: 18,
              jerryCans: 2,
              drums: 4,
              electronics: 5,
              tires: 4,
              other: ['pallet', 'rope'],
            },
          }),
        },
      },
    ],
  }

  const mockTranscript = 'Enter your test transcript content here...'

  beforeAll(() => {
    jest.mock('openai', () => ({
      chat: {
        completions: {
          create: jest.fn(() => Promise.resolve(mockCompletion)),
        },
      },
    }))
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('handles empty transcript', async () => {
    let result = await trashData({ transcript: '' })
    result = {
      id: result.id,
      data: JSON.parse(result.data),
    }

    expect(result.id).toEqual(1)
    expect(result.data.trashBags).toEqual([])
    expect(result.data.otherWeights).toEqual([])
    expect(result.data.items.plasticContainers).toEqual(0)
    expect(result.data.items.plasticStraws).toEqual(0)
    expect(result.data.items.glassContainers).toEqual(0)
    expect(result.data.items.metalCans).toEqual(0)
    expect(result.data.items.footwear).toEqual(0)
    expect(result.data.items.smokingRelated).toEqual(0)
    expect(result.data.items.jerryCans).toEqual(0)
    expect(result.data.items.drums).toEqual(0)
    expect(result.data.items.electronics).toEqual(0)
    expect(result.data.items.tires).toEqual(0)
    expect(result.data.items.other).toEqual([])
  })

  it('properly parses valid transcript', async () => {
    const mockTranscript =
      'plastic containers 50 plastic straws 25 glass 10 cans 20 shoes 12 smoking related 18 jerry can 2 drum 4 electronics 5 tires 4 pallet rope 15.0 5.5 6.2 3.8 2.1'

    let result = await trashData({ transcript: mockTranscript })
    result = {
      id: result.id,
      data: JSON.parse(result.data),
    }

    expect(result.id).toEqual(1)
    expect(result.data.trashBags).toEqual([15, 5.5, 6.2, 3.8, 2.1])
    expect(result.data.otherWeights).toEqual([])
    expect(result.data.items.plasticContainers).toEqual(50)
    expect(result.data.items.plasticStraws).toEqual(25)
    expect(result.data.items.glassContainers).toEqual(10)
    expect(result.data.items.metalCans).toEqual(20)
    expect(result.data.items.footwear).toEqual(12)
    expect(result.data.items.smokingRelated).toEqual(18)
    expect(result.data.items.jerryCans).toEqual(2)
    expect(result.data.items.drums).toEqual(4)
    expect(result.data.items.electronics).toEqual(5)
    expect(result.data.items.tires).toEqual(4)
    expect(result.data.items.other).toEqual(['pallet', 'rope'])
  })

  it('handles transcript with no recognizable data', async () => {
    let result = await trashData({
      transcript: 'This is a random transcript.',
    })
    result = {
      id: result.id,
      data: JSON.parse(result.data),
    }

    expect(result.id).toEqual(1)
    expect(result.data.trashBags).toEqual([])
    expect(result.data.otherWeights).toEqual([])
    expect(result.data.items.plasticContainers).toEqual(0)
    expect(result.data.items.plasticStraws).toEqual(0)
    expect(result.data.items.glassContainers).toEqual(0)
    expect(result.data.items.metalCans).toEqual(0)
    expect(result.data.items.footwear).toEqual(0)
    expect(result.data.items.smokingRelated).toEqual(0)
    expect(result.data.items.jerryCans).toEqual(0)
    expect(result.data.items.drums).toEqual(0)
    expect(result.data.items.electronics).toEqual(0)
    expect(result.data.items.tires).toEqual(0)
    expect(result.data.items.other).toEqual([])
  })
})
