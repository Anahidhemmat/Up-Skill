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

---

## `Three Priciples`

1. Maintain our application state in a single object which would be managed by the redux store.

2. To update the state of your app, you need to let redux know about that with an action. you are not allowed to directly update the state object.

3. To specify how the state tree is transformed by actions, you write pure reducers.
   Reducer - (previous, action) => newState

![three priciples](Screen%20Shot%202022-07-28%20at%203.37.20%20PM.png);

---

### `Actions`

1. The only way your application can interact with the store.

2. Actions carry some information from your app to the redux store.

3. Actions are plain javascript objects.

4. They must have a type property that inicates the type of action being performed.

5. A type propertyis typically defined as string constants.

- an **action** is an object with type propery:

```Javascript
const BUY_CAKE = "BUY_CAKE";
{
    type: BUY_CAKE,
    info: "first redux action"
}
```

- an **action creator** is a function that returns an action:

```Javascript
const BUY_CAKE = "BUY_CAKE";

function buyCake() {
    return {
    type: BUY_CAKE,
    info: "first redux action"
  }
}
```

---

### `Reducers`

1. Reducers specify how the app's state changes in response to actions sent to the store.

2. Reducers are functions that accept state and action as an arguments, and returns the next state of the application.

```Javascript
const BUY_CAKE = "BUY_CAKE";

function buyCake() {
    return {
    type: BUY_CAKE,
    info: "first redux action"
  }
}

// (previousState, action) => newState;

const initialState = {
    numOfCakes: 10,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            // we are not mutating a state object, we return a new object
            return {
                //make a copy of state object
                ...state,
                //update value
               numOfCakes: state.numOfCakes - 1
            }
        default:
           return state
    }
}

```

---

### `Redux Store`

- We will always have just one store.
- The redux store has couple of responsibilities:

  1. Holds application state
  2. Allows access to state via **getState()**
  3. Allows state to be updated via **dispatch(action)**
  4. Register listeners via **subscribe(listener)**
  5. Handles unredistering of listeners via the function returned by **subscribe(listener)**

  ```Javascript
  const redux = require('redux');
  const createStore = redux.createStore;

  const BUY_CAKE = "BUY_CAKE";

    function buyCake() {
        return {
        type: BUY_CAKE,
        info: "first redux action"
     }
    }

    const initialState = {
        numOfCakes: 10,
    }

    const reducer = (state = initialState, action) => {
        switch(action.type) {
            case BUY_CAKE:
                return {
                    ...state,
                numOfCakes: state.numOfCakes - 1
                }
            default:
            return state
        }
    }
    // holding the app state
    const store = createStore(reducer);
    //acces to initial state
    store.getState();
    //register listeners
    store.subscribe(() => store.getState());
    const unsubscribe = store.subscribe(() => store.getState());
    //allows state to be updated
    store.dispatch(buyCake());
    store.dispatch(buyCake());
    store.dispatch(buyCake());
    //unsubscribe from the store
    unsubscribe();


  ```
