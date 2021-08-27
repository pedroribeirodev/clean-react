import { HttpPostClient, HttpPostParams } from '../protocols/http/http-post-client'

export class HtttpPostClientSpy implements HttpPostClient {
  url?: string

  async post (params: HttpPostParams): Promise<void> {
    this.url = params.url
    return await Promise.resolve()
  }
}
