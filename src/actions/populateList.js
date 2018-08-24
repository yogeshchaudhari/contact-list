export const populateList = (url = null) => {
    return {
        type: "POPULATE_LIST",
        url,
        jsonData: []
    }
}