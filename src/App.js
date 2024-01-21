import { ArcElement, CategoryScale, Legend, Tooltip } from 'chart.js';
import { Chart } from 'chart.js/auto';
import WrapBothSide from './components/WrapBothSide';

Chart.register(CategoryScale, ArcElement, Tooltip, Legend);

function App() {
    return <WrapBothSide />;
}

export default App;
