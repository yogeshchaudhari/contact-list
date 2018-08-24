export const selectContact = (contactData = {}) => {
    return {
        type: "SELECT_CONTACT",
        ...contactData
    }
}