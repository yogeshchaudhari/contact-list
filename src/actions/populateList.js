export const populateList = (url = null) => {
    return {
        type: "POPULATE_LIST_REQUEST",
        url,
        jsonData : []
    }
}