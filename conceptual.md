### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  - - The purpose is to allow navigating between components and pages without reloading the browser.
- What is a single page application?
  - - It is dynamically updates the content on a single page without reloading the entire page.
- What are some differences between client side and server side routing?
  - - Client side happens on user side and Sever side happens backend where user don't have access to it.
- What are two ways of handling redirects with React Router? When would you use each?
- - Navigate and useNavigate.
- What are two different ways to handle page-not-found user experiences using React Router?
  - - By adding Route with wildcard path(\*) to display a custom 404 component or use Navigate component to redirect users to valid route.
- How do you grab URL parameters from within a component using React Router?
  - - useParams hook which returns an object containing the route parameters as key value.
- What is context in React? When would you use it?
  - - Context is sharing state or data across multiple components. When there is prop drilling you should use it.
- Describe some differences between class-based components and function
  components in React.
  - - State management this.state() vs useState hook, component base is simpler, better performance with components.
- What are some of the problems that hooks were designed to solve?
  - - Reusability, managing state, don't need to use this.
