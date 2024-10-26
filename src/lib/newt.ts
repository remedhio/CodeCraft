import { createClient } from 'newt-client-js'

export interface Article {
  title: string
  slug: string
  meta: string
  body: string
}
export interface Tag {
  name: string
  slug: string
}
export interface Navigation {
  nav_text: string
  header_logo: string
  header_nav: string
}

export const newtClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: 'cdn',
})
