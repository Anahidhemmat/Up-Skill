# Story Book

### `What is story book?`

- Storybook is an open source tool for building UI components and pages in isolation.

- It simplies UI development, testing, and documentation.

---

### `What does story book do?`

- Storybook helps you document components for reuse.

- and automatically visually test your components to prevent bugs.

- help you do things like fine-tune responsive layouts or verify accessibility.

---

##### `Set Up Story Book`

1. Run Command:

```
 npx sb init
```

- It's gonna make storybook folder with two files:
  1.  main.js => configuration file for story book itself.
  2.  preview.js => configuration file for the stories that you write.
- also add some boilerplate stories

2. Run storybook with command:

```
npm run storybook
```

---

##### `Writing stories`

- Storybook is basically a collection of stories and each story represents a single visual state of a component.

- As part of story procces we need to have 3 main files:

1. a component itself
2. styles related to that component
3. a story file corresponding to the component.

- You have to make new folder for each component and put these files in it in components folder in **src folder**.

- Write your component in js file.
- Write your styles for differen ex(Buttons) in css folder.
- In your story file import your (Button) component then we write a story called component story format.
  You have to add **title** and **component** in **export** object.
  Then you can add different variant for your button as component.

```JSX
export const Primary = () =>
<Button variant="primary">Primary<Button>
```

- Stories can be nested:

```Javascript
export default {
  title: "form/Button"
}
```

- Story names are changable:

```Javascript
ContainedPrimary.storyName = 'contained primary btn'
```

- You Can sort stories.
  - go to docs => sorting stories.
