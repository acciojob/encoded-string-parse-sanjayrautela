function parseCode(encodedString) {
    // Split the input string using '000' as the separator
    const [firstName, lastName, id] = encodedString.split('000');

    // Create and return an object with the extracted values
    return {
        firstName: firstName,
        lastName: lastName,
        id: id
    };
}

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
