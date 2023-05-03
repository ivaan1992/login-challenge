
export function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export function substractYear(date: Date) {
    const year = date.getFullYear();
    const newYear = year - 1;
    const month = date.getMonth();
    const day = date.getDate();
    return new Date(newYear, month, day);
}