export function parceFormdata(formData:FormData) {
    let formatedData = Object.fromEntries(formData.entries())
    return JSON.stringify(formatedData)
}