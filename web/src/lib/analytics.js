const track = async ({ event, value }) => {
  const api = window.location.origin + '/.netlify/functions/analytics/'
  let ip = null

  try {
    const response = await fetch('https://api.ipify.org?format=json')
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    const json = await response.json()
    ip = json.ip

    try {
      const response = await fetch(api, {
        method: 'POST',
        body: JSON.stringify({ event, value, ip }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }
      const json = await response.json()
      console.info(json.data)
    } catch (error) {
      console.error(error.message)
    }
  } catch (error) {
    console.error(error.message)
  }
}

export default track
