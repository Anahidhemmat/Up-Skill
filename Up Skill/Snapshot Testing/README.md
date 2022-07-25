# Snapshot Testing

## `What is snapshot testing?`

- A typical snapshot test case renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test.

- The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component.

---

### `How snapshot testing works?`

1. Wheen we run the test it will check for each component:
   - if it has any snapshot
   - if it does not have snapshot then it will save the current state of the component as it's new snapshot and simply pass the test.
2. If it does have snapshot then it will run a different algorithm with our existing snapshot and for our new snapshot : if the existing snapshot and the new snapshot matches then we pass the test otherwise we simply fail the test and explain where it has a difference

---

## `Snapshot Testing with Jest`

- you can use a test renderer to quickly generate a serializable value for your React tree:

```Javascript
import renderer from 'react-test-renderer';
import Link from '../Link';

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
```

The first time this test is run, Jest creates a snapshot file that looks like this:

```Javascript
exports[`renders correctly 1`] = `
<a
  className="normal"
  href="http://www.facebook.com"
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}
>
  Facebook
</a>
`;
```

- On subsequent test runs, Jest will compare the rendered output with the previous snapshot.If they match, the test will pass.

---
