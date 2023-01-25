/**
 * Read a value from the browsers sessionStorage
 * @param {string} key Key for value you want to read
 * @returns Value matching the key
 */
export const storageRead = (key) => {
    
    if (!key || typeof key !== "string") {
        throw new Error("storageRead: Invalid storage key provided")
    }

    const value = sessionStorage.getItem(key)
    return JSON.parse(value) || null
}

/**
 * Save a key/value pair to the browsers sessionStorage
 * @param {string} key Key for value you want to save
 * @param {*} value Value you want to save
 */
export const storageWrite = (key, value) => {
    
    if (!key || typeof key !== "string") {
        throw new Error("storageWrite: Invalid storage key provided")
    }
    
    if (!value) {
        throw new Error(`storageWrite: No value provided for ${key}`)
    }

    sessionStorage.setItem(key, JSON.stringify(value))
}

/**
 * Delete a value from browsers sessionStorage
 * @param {string} key Key of value you want to remove
 */
export const storageDelete = (key) => {
    
    if (!key || typeof key !== "string") {
        throw new Error("storageDelete: Invalid storage key provided")
    }
    
    sessionStorage.removeItem(key)
}