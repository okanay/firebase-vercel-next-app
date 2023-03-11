export function withOpacity(variableName) {
    return ({opacityValue}) => {

        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`
        } else {
            return `rgba(var(${variableName}))`
        }
    }
}
