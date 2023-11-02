import { createClient, type ClientConfig, type SanityClient, type ClientPerspective } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { sanity, sanityReadToken, sanityWriteToken } from '@/config'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const readClient = (cdn: boolean = true, perspective: ClientPerspective = 'published'): SanityClient => {
    return createClient({ ...sanity, useCdn: cdn, token: sanityReadToken, perspective })
}

export const writeClient = (cdn: boolean = false, perspective: ClientPerspective = 'published'): SanityClient => {
    return createClient({ ...sanity, useCdn: cdn, token: sanityWriteToken, perspective })
}

const builder = imageUrlBuilder(readClient());

export function urlFor(source: SanityImageSource) {
    return builder.image(source)
}