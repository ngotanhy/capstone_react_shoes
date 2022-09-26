export const searchByName = (value, array) => {
    let C = true;
    let newArray = []
    while (C) {
        newArray = array.reduce((newArray, item) => {
            let name = item.name.toLocaleLowerCase()
            let findItem = name.indexOf(value);
            if (findItem > -1) {
                newArray.push(item);
            }
            return newArray;
        }, [])
        if (newArray.length > 0) {
            C = false;
        } else {
            value = value.slice(0, value.length - 1)
        }
    }
    return newArray;
}


export const sortProducts = (type, array) => {
    array.sort((a, b) => a.price - b.price);
    if (type === 'increase') {
        return array;
    } else {
        return array.reverse();
    }
}