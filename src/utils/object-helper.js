export const updateObjectInArray = (items, actionParam, userId, newObjs) => {
    return items.map(u => {
        if (u[actionParam] === userId) {
            return {...u, ...newObjs}
        }
        return u;
    })
}