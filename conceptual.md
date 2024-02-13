### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  It allows single page applications the ability to handle clinet side and server-side routing in React.

- What is a single page application?
  It is a application that works directly in the browser and doesn't need to be rerendered during use. They rely on JS and API's to communicate with the server.

- What are some differences between client side and server side routing?
  Server side routing rerenders entire DOM on the requested page, client side routing maps between URL bar and page via browser.

- What are two ways of handling redirects with React Router? When would you use each?
  You can use <Redirect to="/" /> or <Route exact path="/"><Home /></Route>. Using the redirect tag is helpful when a user needs redirection to a protected route such as in user authentication when they enter an incorrect password.

- What are two different ways to handle page-not-found user experiences using React Router?
  404 page not found errors can be handled by including a <Route> <h1> Not Found </h1> </Route> included in the Routes function inside the <Switch> tag. The <Redirect to="/"> tag can also be used to go back to the home screen.

- How do you grab URL parameters from within a component using React Router?
  You can grab URL parameters by calling useParams hook to grab an object. useParams is imported and the variable is set within the function.

- What is context in React? When would you use it?
  Context is used when data needs to be accessed globally by many components. One example is when you want to access data from a nested component from child to great-grandchild such as in a theme.

- Describe some differences between class-based components and function
  components in React.
  Class based components are the older way that React used components to require you to extend from React. Functional components are newer plain JS pure functions that accepts props and returns a JSX React element.

- What are some of the problems that hooks were designed to solve?
  Hooks are ways to reuse code and stateful logic in functional components. They made it so class components were no longer needed.
