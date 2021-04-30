import './App.css';
import Endpoint from './Endpoint';

function App() {
  return (
    <div className="App">
        <div className="dashboard">
            <h1>Check endpoints</h1>
            <Endpoint endpoint={"GET /posts/1"}/>
            <Endpoint endpoint={"POST /posts/1"}/>
            <Endpoint endpoint={"DELETE /posts/1"}/>
            <Endpoint endpoint={"PATCH /posts/1"}/>
            <Endpoint endpoint={"GET /comments/"}/>
            <Endpoint endpoint={"GET /users/"}/>
        </div>
    </div>
  );
}

export default App;
