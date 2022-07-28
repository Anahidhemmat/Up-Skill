# Redux

## `What is Redux?`

Redux is a predictable state container for JavaScript apps.

- Redux is a library for JavaScript applications
- is a state container
- the changes to your application's state become predictable

State in a React App:

![states](Screen%20Shot%202022-07-27%20at%207.17.00%20PM.png)

React + Redux:

![states in redux](Screen%20Shot%202022-07-27%20at%207.20.55%20PM.png)

---

## `Three Core Concepts`

1. A **store** that holds the state of your application.
2. An **action** that describes the changes in the state of the application.
3. A **reducer** which actually carries out the state transition depending on the action.

![Three Core Concepts](Screen%20Shot%202022-07-27%20at%207.58.44%20PM.png);

## `Three Priciples`

1. Maintain our application state in a single object which would be managed by the redux store.

2. To update the state of your app, you need to let redux know about that with an action. you are not allowed to directly update the state object.

3. To specify how the state tree is transformed by actions, you write pure reducers.
   Reducer - (previous, action) => newState

![three priciples](Screen%20Shot%202022-07-28%20at%203.37.20%20PM.png);