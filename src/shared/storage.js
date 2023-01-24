export const storageRead = (key) => {
    const value = sessionStorage.getItem(key)
    return JSON.parse(value) || null
}

export const storageWrite = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value))
}

export const storageDelete = (key) => {
    sessionStorage.removeItem(key)
}