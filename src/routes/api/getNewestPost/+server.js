import { json, error } from '@sveltejs/kit';
import { getNewestPost } from '$lib/utils/sanity'

export const GET = async () => {
  const data = await getNewestPost().catch((e) => {
    console.error(e)
    throw error(500, "Problem retrieving newest blog post")
  })

  return json(data)

}

