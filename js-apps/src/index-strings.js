//strings

var firstName = "Subramanian"
var lastName = 'Murugan';

console.log(" Name " + firstName + " " + lastName);
console.log(" Name ", firstName, " ", lastName);

//es 6 concatation syntax. `${variableName}` - interpolation

console.log(`Name ${firstName} ${lastName} `)

//Roles of `` notation : string concation,multi line string litreal.

var title = 'Game Portal'

var htmlDoc = "<html>" +
    "<head><title>" +
    title +
    "</title>" +
    "</head>" +
    "<body><h1>Sony Digital</h1>" +
    "</body></html>";
console.log(htmlDoc);

var newHtmlDoc = `
    <html>
      <head>
        <title>${title}</title>
    </head>
    <body><h1>Astro Gaming Site</h1>
    </body></html>
`;
console.log(newHtmlDoc);