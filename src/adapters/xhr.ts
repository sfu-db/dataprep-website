export interface IResponse {
  url: string
  id: number
  published_at: string
  tag_name: string
  html_url: string
}

export const getReleaseVer = async (): Promise<Array<IResponse>> => {
  const response = await fetch(
    "https://api.github.com/repos/sfu-db/dataprep/releases"
  )

  if (!response.ok) {
    throw new Error(`An error has occured: ${response.text()}`)
  }
  const releaseData = await response.json()
  return releaseData
}
