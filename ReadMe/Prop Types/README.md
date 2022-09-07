# `Typechecking With PropTypes`

To run typechecking on the props for a component, you can assign the special propTypes property:

```Javascript
import PropTypes from 'prop-types';

const Greeting = (props) => {

    return (
      <h1>Hello, {props.name}</h1>
    );
}

Greeting.propTypes = {
  name: PropTypes.string
};

```

---

### `All prop types:`

1. PropTypes.array
2. PropTypes.bool
3. PropTypes.func
4. PropTypes.number
5. PropTypes.object
6. PropTypes.string
7. PropTypes.symbol
8. PropTypes.node
9. PropTypes.element
10. PropTypes.elementType

- You can also declare that a prop is an instance of a class. This uses
  JS's instanceof operator.

11.

```Javascript
 PropTypes.instanceOf(Message)
```

- You can ensure that your prop is limited to specific values by treating it as an enum.

12.

```Javascript
 PropTypes.oneOf(['News', 'Photos']),
```

- An object that could be one of many types.

13.

```Javascript
PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
  ])
```

- An array of a certain type:

14.

```Javascript
PropTypes.arrayOf(PropTypes.number)
```

- An object with property values of a certain type:

15.

```Javascript
PropTypes.objectOf(PropTypes.number),
```

---

#### `Resourses`

[Documentation](https://reactjs.org/docs/typechecking-with-proptypes.html)
