import identifyTechnologies from "./index";

test("Identify technologies based on text", () => {
  const tech = identifyTechnologies("hello world React Nodejs PHP");

  expect(tech).toEqual(["react", "nodejs", "php"]);
});

test("Technologies are unique", () => {
  const tech = identifyTechnologies(
    "hello world React Nodejs PHP React Nodejs PHP"
  );

  expect(tech).toEqual(["react", "nodejs", "php"]);
});

test("Text are trim", () => {
  const tech = identifyTechnologies(" React ");

  expect(tech).toEqual(["react"]);
});

test("Ignore /", () => {
  const tech = identifyTechnologies("React/Angular/Vue");

  expect(tech).toEqual(["react", "angular", "vue"]);
});

test("Ignore \\", () => {
  const tech = identifyTechnologies("React\\Angular\\Vue");

  expect(tech).toEqual(["react", "angular", "vue"]);
});

test("Igore dots", () => {
  const text = "Vue.js 2.0 HTML5/CSS3 ECMAScript 6 (ES6) (RESTfull) Git";
  const tech = identifyTechnologies(text);

  expect(tech).toEqual(["vue", "js", "html", "css", "restfull", "git"]);
});

test("Igore numbers", () => {
  const text = "HTML5/CSS3";
  const tech = identifyTechnologies(text);

  expect(tech).toEqual(["html", "css"]);
});
