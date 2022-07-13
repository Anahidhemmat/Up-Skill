# What is Jest ?

Jest is a JavaScript **Testing Framework** with a focus on simplicity.

---

### `installing package`

```
npm install --save-dev jest
```

---

#### `Writing a simple test`

1. Write your function in js file and export it:

```Javascript
 function sum (a,b) {
     return a + b;
 }

 module.exports = sum;
```

2. In your test file with this format(sum.test.js):
   - import your function
   - write your test

```Javascript
 const sum = require('./sum');

test('adds 1 + 2 to equal 3',() => {
    expect(sum(1,2)).toBe(3)
})
```

3. Add following section to your package.json:

```JSON
{
  "scripts": {
    "test": "jest"
  }
}
```

5. Run **npm test** and jest will print thos massage:

```
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```

- This test used **expect** and **toBe** to test that two values were exactly identical.

---

### `Using Matchers`

Jest uses **"matchers"** to let you test values in different ways.

---

#### `Common Matchers`

1.  **toBe()** :
    it tracks all the failing matchers so that it can print out nice error messages for you. toBe uses **Object.is** to test exact equality

2.  **toEqual()** :
    f you want to check the value of an object, use toEqual(). toEqual recursively checks every field of an object or array.

- You can also test for the opposite of a matcher:

```Javascript
expect(a + b).not.toBe(0);
```

---

#### `Truthiness`

- **toBeNull** matches only null
- **toBeUndefined** matches only undefined
- **toBeDefined** is the opposite of toBeUndefined
- **toBeTruthy** matches anything that an if statement treats as true
- **toBeFalsy** matches anything that an if statement treats as false

ex:

```Javascript
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDifiend();
    expect(n).not.toBeUndifiend();
    expect(n).toBeTruthy();
    expect(n).toBeFalsy();
})
```

---

#### `Numbers`

- **toBeGreaterThan()**;
- **toBeGreaterThanOrEquial()**;
- **toBeLessThan()**;
- **toBeLessThanOrEqual()**;

- **toBe** and **toEqual** are equivalent for numbers

- For floating point equality, use **toBeCloseTo** instead of toEqual

---

#### `Strings`

- You can check strings against regular expressions with **toMatch**:

```Javascript
test('there is a "stop" in Cristoph',() => {
    expect('Cristoph').toMatch(/stop/)
})
```

---

#### `Arrays and iterables`

- You can check if an array or iterable contains a particular item using **toContain**:

```Javascript
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk')
})
```

---

#### `Exeptions`

- If you want to test whether a particular function throws an error when it's called, use **toThrow**.

---

### `Testing Asynchronous Code`

---

#### `Promises`

- Return a promise from your test, and Jest will wait for that promise to resolve. If the promise is rejected, the test will fail.

```Javascript
test('the data is peanut butter', () => {
    return fetchData().then(data => {
        expect(data).toBe("peanut butter")
    })
})
```

---

#### `Async/Await`

- To write an **async** test, use the async keyword in front of the function passed to test.

```Javascript
test('the data is peanut butter', async() => {
    const data = await fetchData();
    expect(data).toBe("peanut butter")
})
```

- You can combine async and await with .resolves or .rejects.

```Javascript
test("data is peanut butter", async() => {
    await expect(fetchData()).resolves.toBe('peanut butter');
})
```

- If you expect a promise to be rejected, use the **.catch** method. Make sure to add **expect.assertions** to verify that a certain number of assertions are called. Otherwise, a fulfilled promise would not fail the test.

```Javascript
test('the fetch fails with an error', async() => {
    expect.assertions(1);
    return fetchData().catch(e => expect(e).toMatch('error'));
})
```
