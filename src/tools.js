export const sortTask = (tasklist) => {
    if (tasklist.length >= 2) {
        tasklist.sort((a, b) => b.finishDate -a.finishDate);
    }
    return tasklist
}

export const getCalendaryFrame = () => {
    const minDate = (new Date()).toJSON().slice(0, 10);
    const temp = minDate.split('-');
    temp[0] = Number(temp[0]) + 1;
    const maxDate = temp.join('-');

    return [minDate, maxDate];
}