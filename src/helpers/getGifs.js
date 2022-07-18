const limit = 10
const apiKey = 'ydo1rgyzU7VlYQkV3lTZJDcxemmvDIos'

export const getGifs = async (category,) => {
    const apiURL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`

    return await fetch(apiURL)
        .then(res => res.json())
        .then(({data}) => data)
        .then(data => data.map(({id, title, images: {downsized_medium: {url}}}) => ({id, title, url})))
}
