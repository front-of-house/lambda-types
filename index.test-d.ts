import { Event, Context, Response, Handler } from '.'

const event: Event = {
  rawUrl: '/',
  rawQuery: '?foo=bar',
  path: '/',
  httpMethod: 'GET',
  headers: {},
  multiValueHeaders: {},
  body: '',
  isBase64Encoded: false,
  requestContext: {},
  resource: '',
}
const fullEvent: Event = {
  ...event,
  queryStringParameters: {},
  multiValueQueryStringParameters: {},
  pathParameters: {},
}
const customEvent: Event<{ cookies: object }> = {
  ...event,
  cookies: { foo: 'bar' },
}

const context: Context = {
  callbackWaitsForEmptyEventLoop: false,
  functionName: '',
  functionVersion: '',
  invokedFunctionArn: '',
  memoryLimitInMB: '',
  awsRequestId: '',
  logGroupName: '',
  logStreamName: '',
  getRemainingTimeInMillis() {
    return 0
  },
}
const customContext: Context<{ error: Error }> = {
  ...context,
  error: new Error(),
}

const response: Response = {
  statusCode: 200,
}
const fullResponse: Response = {
  statusCode: 200,
  headers: { foo: 'bar' },
  multiValueHeaders: { foo: ['bar'] },
  body: '',
  isBase64Encoded: false,
}
const customResponse: Response<{ cookies: object }> = {
  statusCode: 200,
  headers: { foo: 'bar' },
  multiValueHeaders: { foo: ['bar'] },
  body: '',
  isBase64Encoded: false,
  cookies: { foo: 'bar' },
}

function createHandler(handler: Handler) {
  return handler
}

const callbackHandler = createHandler((event, context, cb) => {
  cb(undefined, {
    statusCode: 200,
  })
})

const callbackHandlerWithError = createHandler((event, context, cb) => {
  cb(new Error())
})

const asyncHandler = createHandler(async (event, context) => {
  return {
    statusCode: 200,
  }
})
