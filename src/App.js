import "./App.css";
import CommentsForm from "./components/CommentsForm";
import CommentsList from "./components/CommentsList";

function App() {
  return (
    <div className="App">
      <CommentsForm />
      <CommentsList />
    </div>
  );
}

export default App;
