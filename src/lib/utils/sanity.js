import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2023-09-20',
  useCdn: true
})

const builder = imageUrlBuilder({ projectId: import.meta.env.VITE_SANITY_PROJECT_ID, dataset: import.meta.env.VITE_SANITY_DATASET })

export const fetchManagersData = async () => {
  const query = '*[_type == "person" && playsFantasy == true]{...,"philosophy": fantasyPhilosophy, "tookOver": fantasyTakeover, "tradingScale": fantasyTradingScale, "mode": fantasyMode}'
  const managers = await client.fetch(query)
  return managers
}

export const urlForImage = (source) => {
  return builder.image(source)
}


