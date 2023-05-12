import './App.css';
import {useState, useEffect} from 'react'
import List from '../list'
import Search from '../search/Search';


const data = ['html', 'css', 'javascript', 'typescript', 'React', 'vue', 'angular'];
function App() {
  const [search,setSearch] = useState('');
  const [items,setItems] = useState(data);

  useEffect(() => {
    setItems(data.filter(el => el.toLowerCase().includes(search.toLowerCase())));
  },[search])
  return (
    <div className="App">
      <div className="App-header">
        <Search children="Find Course" value={search} onChange={(e) => setSearch(e.target.value)} />
        <List items={items} />
      </div>
    </div>
  );
}

export default App;
