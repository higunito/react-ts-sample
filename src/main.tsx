import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

//特定のDOM要素(id='root')をターゲットにし、Reactコンポーネントを表示するためのルートを作成する
//Element型として型アサーション
//non-nullアサーション演算子(!)を利用し、"document.getElementById('root')!"としてもよい
const root = createRoot(document.getElementById('root') as Element);

//renderメソッドを呼び出してReactコンポーネントを表示
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
