# Notes

### The This Keyword

1. In Object (Method) 👉 this = `<Object>`
2. Function Decl 👉 this = `undefined` (Only valid for strict mode; else window object)
<!-- A GOOD USECASE OF ARROW FUNCTION IS TO USE IT INSIDE REGULAR FUNCTION WHICH IS A METHOD TO GET ITS PARENT THIS KEYWORD -->
3. Arrow Function 👉 = `<this of surrounding function (lexical this)>`
4. Event Listener 👉 = `<DOM element>`
5. new, call, apply, bind 👉 `<LATER...>`
