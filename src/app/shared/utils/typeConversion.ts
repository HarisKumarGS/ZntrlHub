export const convertObjectToDropdownArray = (inputValue: any) => {
    let dropdownArray: { value: any; text: any }[] = []
    Object.keys(inputValue).forEach((item: any) => {
        let arrayObject = {
            value: item,
            text: inputValue[item]
        }
        dropdownArray.push(arrayObject)
    })
    return dropdownArray;
}