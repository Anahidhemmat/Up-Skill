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

---

### `Multiple Reducers`

```Javascript
  const redux = require('redux');
  const createStore = redux.createStore;

  const BUY_CAKE = "BUY_CAKE";
  const BUY_ICECREAM = "BUY_ICECREAM";

    function buyCake() {
        return {
        type: BUY_CAKE,
        info: "first redux action"
     }
    }
    function buyIcecream() {
        return {
            type: BUY_ICECREAM,
        }
    }
    const initialState = {
        numOfCakes: 10,
        numOfIcecreames: 20,
    }

    const reducer = (state = initialState, action) => {
        switch(action.type) {
            case BUY_CAKE:
                return {
                    ...state,
                numOfCakes: state.numOfCakes - 1
                }
            case BUY_ICECREAM:
                return {
                     ...state,
                numOfIcecreames: state.numOfIcecreames - 1
                }
            default:
            return state
        }
    }
    const store = createStore(reducer);
    store.getState();
    store.subscribe(() => store.getState());
    const unsubscribe = store.subscribe(() => store.getState());
    store.dispatch(buyCake());
    store.dispatch(buyIcecreame());
    unsubscribe();
```

- better approach:

```Javascript
  const redux = require('redux');
  const createStore = redux.createStore;

  const BUY_CAKE = "BUY_CAKE";
  const BUY_ICECREAM = "BUY_ICECREAM";

    function buyCake() {
        return {
        type: BUY_CAKE,
        info: "first redux action"
     }
    }
    function buyIcecream() {
        return {
            type: BUY_ICECREAM,
        }
    }

    const initialCakeState = {
        numOfCakes: 10,
    }
    const initialIcecreameState = {
        numOfIcecreames: 20,
    }
    const cakeReducer = (state = initialCakeState, action) => {
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

    const icecreameReducer = (state = initialIcecreameState, action) => {
        switch(action.type) {
            case BUY_ICECREAM:
                return {
                     ...state,
                numOfIcecreames: state.numOfIcecreames - 1
                }
            default:
            return state
        }
    }
    const store = createStore(reducer);
    store.getState();
    store.subscribe(() => store.getState());
    const unsubscribe = store.subscribe(() => store.getState());
    store.dispatch(buyCake());
    store.dispatch(buyIcecreame());
    unsubscribe();
```

- combine reducers:

```Javascript
const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

  function buyCake() {
      return {
      type: BUY_CAKE,
      info: "first redux action"
   }
  }
  function buyIcecream() {
      return {
          type: BUY_ICECREAM,
      }
  }

  const initialCakeState = {
      numOfCakes: 10,
  }
  const initialIcecreameState = {
      numOfIcecreames: 20,
  }
  const cakeReducer = (state = initialCakeState, action) => {
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

  const icecreameReducer = (state = initialIcecreameState, action) => {
      switch(action.type) {
          case BUY_ICECREAM:
              return {
                   ...state,
              numOfIcecreames: state.numOfIcecreames - 1
              }
          default:
          return state
      }
  }
  const rootReducer = combineReducers({
      cake: cakeReducer,
      icecreame: icecreamReducer,
  })
  const store = createStore(reducer);
  store.getState();
  store.subscribe(() => store.getState());
  const unsubscribe = store.subscribe(() => store.getState());
  store.dispatch(buyCake());
  store.dispatch(buyIcecreame());
  unsubscribe();
```
***

### `Middleware`

- is the suggested way to extend Redux with custom functionality(Redux with extra features)
-  Provides a third-party extension point between dispatching an action and the moment it reaches the reducer

- u can use middleware for logging, crash reporting, performing async tasks ect

**Redux Logger** is a middleware:
- install middleware
```
npm install redux-logger
```
- apply middleware:
```Javascript
const redux = require('redux');
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

  function buyCake() {
      return {
      type: BUY_CAKE,
      info: "first redux action"
   }
  }
  function buyIcecream() {
      return {
          type: BUY_ICECREAM,
      }
  }

  const initialCakeState = {
      numOfCakes: 10,
  }
  const initialIcecreameState = {
      numOfIcecreames: 20,
  }
  const cakeReducer = (state = initialCakeState, action) => {
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

  const icecreameReducer = (state = initialIcecreameState, action) => {
      switch(action.type) {
          case BUY_ICECREAM:
              return {
                   ...state,
              numOfIcecreames: state.numOfIcecreames - 1
              }
          default:
          return state
      }
  }
  const rootReducer = combineReducers({
      cake: cakeReducer,
      icecreame: icecreamReducer,
  })
  const store = createStore(reducer, applyMiddleware(logger));
  store.getState();
  const unsubscribe = store.subscribe(() => {});
  store.dispatch(buyCake());
  store.dispatch(buyIcecreame());
  unsubscribe();
```
