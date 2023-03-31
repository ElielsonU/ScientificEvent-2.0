const getElement = (obj: any, key: string) => {
    if (Object.hasOwn(obj, key)) {
        return obj[key]
    }
    return false
}

export { getElement }