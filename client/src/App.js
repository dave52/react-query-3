import { Switch, Route } from "react-router-dom";
import { BooksList } from "./BooksList/BooksList";
import { CreateBook } from "./CreateBook";
import { UpdateBook } from "./UpdateBook";

function App() {
  return (
    <Switch>
      <Route path="/update-book">
        <UpdateBook />
      </Route>
      <Route path="/create-book">
        <CreateBook />
      </Route>
      <Route path="/">
        <BooksList />
      </Route>
    </Switch>
  );
}

export default App;
