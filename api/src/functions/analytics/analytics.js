import { logger } from 'src/lib/logger'
import Mixpanel from 'mixpanel'
import platform from 'platform'

const mixpanel = Mixpanel.init(process.env.MIXPANEL_PROJECT_TOKEN)

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } _context - contains information about the invocation,
 * @param { object } [mixpanelInstance] - Optional Mixpanel instance for testing
 * function, and execution environment.
 */
export const handler = async (event, _context, mixpanelInstance = mixpanel) => {
  logger.info(`${event.httpMethod} ${event.path}: analytics function`)

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: 'POST only',
      }),
    }
  }

  // console.log(event)

  if (!event.body.length) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: 'Missing payload',
      }),
    }
  }

  const payload = JSON.parse(event.body)
  const info = platform.parse(event.headers['user-agent'])

  if (!payload.event) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: 'Please pass an event property',
      }),
    }
  }

  await mixpanelInstance.track(payload.event, {
    score: payload.value,
    browser: info.name,
    device: info.product,
    os: info.os.toString(),
    ip: payload.ip,
  })

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: `${payload.event} event tracked`,
    }),
  }
}
