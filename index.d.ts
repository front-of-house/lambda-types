export type Params = { [name: string]: string | undefined }
export type MultiValueParams = { [name: string]: string[] | undefined }

/**
 * @see https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1c0d34eff93e70c289fb4207174e8bfd0f37b0d4/types/aws-lambda/trigger/api-gateway-proxy.d.ts#L109
 */
export type Event<T = unknown> = T & {
  rawUrl: string
  rawQuery: string
  path: string
  httpMethod: string
  headers: Params
  multiValueHeaders: MultiValueParams
  queryStringParameters?: Params
  multiValueQueryStringParameters?: MultiValueParams
  pathParameters?: Params
  body: string | null
  isBase64Encoded: boolean
  requestContext: any
  resource: string
}

/**
 * @see https://github.com/DefinitelyTyped/DefinitelyTyped/blob/1c0d34eff93e70c289fb4207174e8bfd0f37b0d4/types/aws-lambda/handler.d.ts#L94
 * @see https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 */
export type Context<T = unknown> = T & {
  callbackWaitsForEmptyEventLoop: boolean
  functionName: string
  functionVersion: string
  invokedFunctionArn: string
  memoryLimitInMB: string
  awsRequestId: string
  logGroupName: string
  logStreamName: string
  identity?: { [key: string]: any }
  clientContext?: { [key: string]: any }
  getRemainingTimeInMillis(): number
}

export type Response<T = unknown> = T & {
  statusCode: number
  headers?:
    | {
        [header: string]: boolean | number | string
      }
    | undefined
  multiValueHeaders?:
    | {
        [header: string]: ReadonlyArray<boolean | number | string>
      }
    | undefined
  body?: string
  isBase64Encoded?: boolean
}

export type Handler<E = unknown, C = unknown, R = unknown> = (
  event: Event<E>,
  context: Context<C>,
  callback: (error?: Error, response?: Response<R>) => void
) => void | Promise<Response<R>>
