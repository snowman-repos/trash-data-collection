import track from './analytics'

describe('track function', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ ip: '1.2.3.4' }),
      })
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should track successfully when fetch calls succeed', async () => {
    await track({ event: 'test-event', value: 123 })

    expect(global.fetch).toHaveBeenCalledTimes(2) // Two fetch calls: for IP and analytics
    expect(global.fetch).toHaveBeenNthCalledWith(
      1,
      'https://api.ipify.org?format=json'
    )
    expect(global.fetch).toHaveBeenNthCalledWith(
      2,
      `${window.location.origin}/.netlify/functions/analytics/`,
      {
        method: 'POST',
        body: JSON.stringify({
          event: 'test-event',
          value: 123,
          ip: '1.2.3.4',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  })

  it('should handle error when IP fetch fails', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error('Failed to fetch IP'))
    )

    await track({ event: 'test-event', value: 123 })

    expect(global.fetch).toHaveBeenCalledTimes(1) // Only one fetch call for IP
    expect(global.fetch).not.toHaveBeenCalledWith(
      `${window.location.origin}/.netlify/functions/analytics/`
    )
  })

  it('should handle error when analytics fetch fails', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ ip: '1.2.3.4' }),
      })
    )
    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error('Failed to send analytics'))
    )

    await track({ event: 'test-event', value: 123 })

    expect(global.fetch).toHaveBeenCalledTimes(2) // Two fetch calls: for IP and analytics
  })

  it('should handle non-200 status code from IP fetch', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      })
    )

    await track({ event: 'test-event', value: 123 })

    expect(global.fetch).toHaveBeenCalledTimes(1) // Only one fetch call for IP
    expect(global.fetch).not.toHaveBeenCalledWith(
      `${window.location.origin}/.netlify/functions/analytics/`
    )
  })

  it('should handle non-200 status code from analytics fetch', async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ ip: '1.2.3.4' }),
      })
    )
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      })
    )

    await track({ event: 'test-event', value: 123 })

    expect(global.fetch).toHaveBeenCalledTimes(2) // Two fetch calls: for IP and analytics
  })
})
