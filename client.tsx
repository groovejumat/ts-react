import * as React from 'react';
import * as  ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import WordRelay from './WordRelay';

const Hot = hot(WordRelay); // HOC : 컴포넌트를 다른 컴포넌트로 감싼다

ReactDOM.render(<WordRelay />, document.querySelector('#root'));