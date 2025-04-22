function transformString(input) {
    const withSpaces = input
        .replace(/_/g, ' ')
        .replace(/-/g, ' ')
        .replace(/([a-z])([A-Z])/g, '$1 $2');

    const formatted = withSpaces
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase());

    return formatted;
}

// Example usage
console.log(transformString("i_love_cats")); 
console.log(transformString("i-love-cats")); 
console.log(transformString("iLoveCats"));   
console.log(transformString("I love cats")); 