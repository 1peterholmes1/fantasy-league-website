import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2023-09-20',
  useCdn: true
})

export const fetchManagersData = async () => {
  const query = '*[_type == "person" && playsFantasy == true]'
  const managers = await client.fetch(query)
  return managers
}
