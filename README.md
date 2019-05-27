## Template module

Replace parts of the string with dynamic values.

## Installation

```sh
npm install --save @wildebeest/template
```

## Requirements

It's usefull to know these libraries:

* @wildebeest/js-modules

## Usage

Part of the string that shoul be replaced has to be marked by `%` at the begining and also at the end. For exmample, in the strin `My name is %name%"`  we can replace `%name%` for our dynemic value.

### Replace parts of the string

To replace parts of the string you can use `StringTemplate`. Just create a new instane with a string template and then run `render()` method with actual dynamic data to be put inside the template.

```ts
function foo()
{
    let template: Template = new StringTemplate("Hallo, ma name is %name%.");
    let result: string = template.render({name: 'Hannah'});
}
```

### Replace parts of the file

Sometimes a template is too big a you would like to use file to generate messages. You can replace parts of the file with dynamic data. Simular to StringTemplate, just create new instane with tha path to a file and than call `render()` method with corect data.

```
Hallo, %name%,

you order %orderNumber% is ready for pick up in our store on %street%.
```

```ts
function foo()
{
    let template: Template = new FileTemplate("path/to/file.txt");
    let result: string = template.render({name: 'Hannah', orderNumber: '111000222', street: 'Street 54'});
}
```