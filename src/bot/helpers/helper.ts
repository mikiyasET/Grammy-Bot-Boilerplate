export const generateList = ({array,label,row,callback,unique,extra,extraPos}:{array: any[], label: string, row: number, callback?: string, unique?: any,extra?: any[],extraPos?: 'TOP' | 'BOTTOM'}): any[] => {
    let temp = [];
    let list = [];
    let count = 0;
    const uniquer = unique !== undefined ? unique : label;
    if (extra !== undefined) {
        if (extraPos === 'TOP') {
            list.push(...extra);
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (count < row) {
            if (callback !== undefined) {
                temp.push({text: array[i][label], callback_data: `${callback}:${array[i][uniquer]}`});
            } else {
                temp.push({text: array[i][label]});
            }
            count++;
        } else {
            list.push(temp);
            temp = [];
            if (callback !== undefined) {
                temp.push({text: array[i][label], callback_data: `${callback}:${array[i][uniquer]}`});
            } else {
                temp.push({text: array[i][label]});
            }
            count = 1;
        }
    }
    if (temp.length > 0) {
        list.push(temp);
    }
    if (extra !== undefined) {
        if (extraPos === 'BOTTOM' || extraPos === undefined) {
            list.push(...extra);
        }
    }
    return list;
}