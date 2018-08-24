export const search = (searchTerm = "") => {
    return {
        type: "SEARCH",
        searchTerm
    }
}