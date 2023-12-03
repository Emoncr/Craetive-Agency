export const parseDate = (createdData) => {
    const date = new Date(createdData);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate
}