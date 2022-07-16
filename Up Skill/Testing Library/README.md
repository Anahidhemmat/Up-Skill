# `Testing Library`

- **Jest** and **Testing Library** are not the same thing. They work together.

## set up

```
npm install --save-dev @testing-library/react
```

---

### `Importance of testing`

- Catch bugs
- Increases confidence in Appliation
- Speeds up QA time
- Can serve ad ducumentation

---

### `Test's types`

- Unit tests: to test a component in isolation
- Integration tests: to test how are components working together
- End to End test: to test from the beginning to the very end

### `Writing Tests`

- In real world applications :

  1. first write your tests.
  2. then make your components.

  ***

1. Make your test file with format:

```
ComponentName.test.js
```

2. Import **screen** and **render** from testing library.

3. Import the component you want to test.

4. We need a test block:

```Javascript
test("", () => {});
it("",() => {})
```

#### `Test Block`

In the test block:

- we have to render the component we want to test

```Javascript
test("renders learn reat link", () => {
    render(<App/>);
});
```

- find elements we want to interact with:

```Javascript
test("renders learn reat link", () => {
    render(<App/>);
    const linkElement = screen.getByText(/learn react/i)
});
```

- interact with those elements
- asserts that the results are az expected:

```Javascript
test("renders learn react link", () => {
    render(<App/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
```
