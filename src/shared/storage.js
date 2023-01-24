export const storageRead = (key) => {
    const value = localStorage.getItem(key)
    return JSON.parse(value) || null
}

export const storageWrite = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}