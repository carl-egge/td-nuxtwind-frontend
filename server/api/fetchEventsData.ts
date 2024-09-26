export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const uri = `${config.public.pretixLocalBaseUrl}${config.public.pretixApiEndpoint}/events/`
  console.log('INFO : Fetching events from', uri)

  try {
    const response = await fetch(uri, {
      headers: { Authorization: `Token ${config.pretixApiKey}` },
    })
    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        statusMessage: `HTTP error! status: ${response.status}`,
      })
    }
    const data = await response.json()
    if (data.results) {
      return { events: data.results, error: null }
    } else {
      throw createError({
        statusCode: 500,
        statusMessage: 'No data received from the API',
      })
    }
  } catch (error) {
    console.error('Error fetching events:', error)
    return {
      events: [],
      error: {
        statusCode: 500,
        statusMessage:
          error instanceof Error ? error.message : 'An unknown error occurred',
      },
    }
  }
})
