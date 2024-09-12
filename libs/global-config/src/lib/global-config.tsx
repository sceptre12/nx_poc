/**
 * 
 * These type of files can be dangerous if we have functions with side affects
 * that are exectued when the file is imported.
 */

export function GlobalConfig() {
  return (
    <div className="text-pink-500 bg-gray-100 p-4 rounded-lg">
      {/**
       * Something to take note when creating libraries that are components.
       * The styles that are used within a library can be overriden by the project the component
       * is being shared in. Creating style boundaries wwould be best to encapsulate the css styles
       *
       */}
      <h1 className="text-8xl">Welcome to GlobalConfig!!</h1>
      <p>
        This could also be a util thats shared by many components within the
        app. Prescriptively speaking anything within the lib should be self
        contained, have minimal dependency, and is heavily documented.
      </p>
    </div>
  );
}

export default GlobalConfig;
