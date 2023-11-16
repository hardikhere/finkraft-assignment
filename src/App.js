import Dashboard from './pages/Dashboard';
import 'react-tabs/style/react-tabs.css';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import './index.css'

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Dashboard />
    </div>
  );
}

export default App;
