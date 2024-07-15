import { mockHttpEvent, mockContext } from '@redwoodjs/testing/api'

import { handler } from './analytics'

// jest.mock('mixpanel', () => ({
//   init: jest.fn(() => ({
//     track: jest.fn(),
//   })),
// }))

jest.mock('platform', () => ({
  parse: jest.fn(() => ({
    name: 'TestBrowser',
    product: 'TestDevice',
    os: {
      toString: () => 'TestOS',
    },
  })),
}))

describe('analytics function', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return 405 if not a POST request', async () => {
    const httpEvent = mockHttpEvent({
      queryStringParameters: {
        id: '42',
      },
      httpMethod: 'GET',
      path: '/test',
      body: '{"event": "test-event", "value": 123, "ip": "1.2.3.4"}',
      headers: {
        'user-agent': 'Test User Agent',
      },
    })
    const result = await handler({ event: httpEvent }, mockContext)

    expect(result.statusCode).toEqual(405)
    expect(JSON.parse(result.body)).toEqual({ data: 'POST only' })
  })

  it('should return 400 if body is empty', async () => {
    const httpEvent = mockHttpEvent({
      queryStringParameters: {
        id: '42',
      },
      httpMethod: 'POST',
      path: '/test',
      body: '',
      headers: {
        'user-agent': 'Test User Agent',
      },
    })
    const result = await handler(
      { ...httpEvent, httpMethod: 'POST' },
      mockContext
    )

    expect(result.statusCode).toEqual(400)
    expect(JSON.parse(result.body)).toEqual({ data: 'Missing payload' })
  })

  it('should return 400 if event property is missing', async () => {
    const httpEvent = mockHttpEvent({
      queryStringParameters: {
        id: '42',
      },
      httpMethod: 'POST',
      path: '/test',
      body: '{"value": 123, "ip": "1.2.3.4"}',
      headers: {
        'user-agent': 'Test User Agent',
      },
    })
    const result = await handler(
      { ...httpEvent, httpMethod: 'POST' },
      mockContext
    )

    expect(result.statusCode).toEqual(400)
    expect(JSON.parse(result.body)).toEqual({
      data: 'Please pass an event property',
    })
  })

  it('should track event and return 200 on valid request', async () => {
    const mockTrack = jest.fn()
    const mockMixpanelInstance = {
      track: mockTrack,
    }

    const httpEvent = mockHttpEvent({
      queryStringParameters: {
        id: '42',
      },
      httpMethod: 'POST',
      path: '/test',
      body: '{"event": "test-event", "value": 123, "ip": "1.2.3.4"}',
      headers: {
        'user-agent': 'Test User Agent',
      },
    })

    const result = await handler(httpEvent, mockContext, mockMixpanelInstance)

    expect(result.statusCode).toEqual(200)
    expect(JSON.parse(result.body)).toEqual({
      data: 'test-event event tracked',
    })

    // // Check if Mixpanel track method was called with correct arguments
    // expect(mockTrack).toHaveBeenCalledTimes(1)
    // expect(mockTrack).toHaveBeenCalledWith('test-event', {
    //   score: 123,
    //   browser: 'TestBrowser',
    //   device: 'TestDevice',
    //   os: 'TestOS',
    //   ip: '1.2.3.4',
    // })
  })
})
