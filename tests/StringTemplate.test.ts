import { Template, StringTemplate } from '../src';

test("replace text", () => {
    let template: Template = new StringTemplate("test %test% end.");
    expect(template.render({test: "replaced"})).toBe("test replaced end.");
});

test("no text to replace", () => {
    let template: Template = new StringTemplate("test end.");
    expect(template.render({test: "replaced"})).toBe("test end.");
});