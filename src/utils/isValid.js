export const isValid = (value, validation) => {
    const { required, min, max } = validation;
    const trimmedValue = value.trim();
    let errorMessage = '';
    let isValid = false;
    if(required) {
        isValid = trimmedValue.length > 0;
        errorMessage = `Should be not empty`;
    }
    if(min) {
        isValid = trimmedValue.length >= min;
        errorMessage = `Should be more than ${min}`;
    }
    if(max) {
        isValid = trimmedValue.length <= max;
        errorMessage = `Should be less than ${max}`;
    }
    if(min && max) {
        isValid = trimmedValue.length >= min && trimmedValue.length <= max;
        errorMessage = `Should be more than ${min} and less than ${max}`;
    }
    return {isValid, errorMessage};
};
