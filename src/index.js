import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Cấu hình mặc định để sử dụng store của redux và redux-react
import store from './redux/store';
import {Provider} from 'react-redux';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));