import './App.css';
import {useState, useEffect} from 'react'
import List from '../list'
import Search from '../search/Search';


const data = ['html', 'css', 'javascript', 'typescript', 'react', 'vue', 'angular'];
function App() {
  const [search,setSearch] = useState('')
  return (
    <div className="App">
      <div className="App-header">
        <Search children="Find Course" value={search} onChange={(e) => setSearch(e.target.value)} />
        <List items={data} />
      </div>
    </div>
  );
}

export default App;
