export const search = (searchTerm = "") => {
    return {
        type: "SEARCH_REQUEST",
        searchTerm
    }
}