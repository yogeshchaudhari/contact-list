export const search = (searchTerm = "", contactList = []) => {
    return {
        type: "SEARCH_REQUEST",
        searchTerm,
        contactList
    }
}