export const storageRead = (key) => {
    
    if (!key || typeof key !== "string") {
        throw new Error("storageRead: Invalid storage key provided")
    }

    const value = sessionStorage.getItem(key)
    return JSON.parse(value) || null
}

export const storageWrite = (key, value) => {
    
    if (!key || typeof key !== "string") {
        throw new Error("storageWrite: Invalid storage key provided")
    }
    
    if (!value) {
        throw new Error(`storageWrite: No value provided for ${key}`)
    }

    sessionStorage.setItem(key, JSON.stringify(value))
}

export const storageDelete = (key) => {
    
    if (!key || typeof key !== "string") {
        throw new Error("storageDelete: Invalid storage key provided")
    }
    
    sessionStorage.removeItem(key)
}