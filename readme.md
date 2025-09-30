1. JSX, or JavaScript XML, is a syntax extension for JavaScript that allows developers to write HTML-like code directly within JavaScript files. It is primarily used with React, a popular JavaScript library for building user interfaces. 
Why JSX is Used:
Improved Readability and Maintainability: JSX offers a more intuitive and visually clear way to describe UI components within JavaScript. By combining markup and logic in the same file, it enhances the readability and maintainability of React components.
Declarative UI Description: JSX enables a declarative approach to UI development. Instead of imperatively manipulating the DOM, developers describe the desired state of the UI, and React handles the updates efficiently.
Leveraging JavaScript's Full Power: Unlike traditional templating languages, JSX is a syntax extension of JavaScript, meaning it has access to the full power of JavaScript. This allows embedding JavaScript expressions, variables, and functions directly within the UI structure using curly braces.
Enhanced Error Messages: React can provide more informative error and warning messages when using JSX, which can significantly aid in debugging and development.
Component-Based Architecture: JSX facilitates the creation of reusable and self-contained UI components, aligning with React's component-based architecture. This promotes modularity and makes it easier to manage complex user interfaces.
2. In a React application, props (short for properties) are data passed from a parent to a child component, while state is data managed internally by a component that can change over time. Key differences include: Props are immutable, passed from above, and used for configuring children, whereas state is mutable, controlled locally, and used for dynamic data within the component.
3. The useState hook in React is a function that allows functional components to manage and update state, which is data that can change over time and triggers component re-renders. It returns an array with two values: the current state value and a setter function to update that value. You use array destructuring to assign names to these two values, and then call the setter function to change the state, which in turn causes React to re-render the component and display the updated information. 
How it works
Import useState: First, you must import useState from the React library. 
Call useState: Inside your functional component, you call useState and pass it an initial state value.
4. Sharing state between components in React can be achieved through several methods, depending on the relationship between the components and the complexity of the state:
A. Lifting State Up.
b. React Context API.
C. External State Management Libraries (e.g., Redux, Zustand, MobX).
5. Event handling in React is similar to standard HTML event handling but with key differences in syntax and implementation, primarily leveraging React's Synthetic Event system.
the ways how event handling is done in React:
A. Synthetic Event System.
B. JSX Syntax.
C. Defining Event Handler Functions.
D. Preventing Default Behavior.
E. Passing Arguments to Event Handlers.
