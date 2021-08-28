import { HttpResponse } from './http-response'

export type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<T> {
  post: (params: HttpPostParams<T>) => Promise<HttpResponse>
}
