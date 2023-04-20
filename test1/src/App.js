import { useState } from 'react';
import './App.css';



function App() {

  const [state, setState] = useState("")
  const [data, setData] = useState(["리엑트를 배워봅시다."])

  const onChangeHandle = (e) => {
    setState({ content: e.target.value })
  }

  const handleSubmit = () => {
    const newItem = state.content

    setData([...data, newItem])

    setState({
      content: ""
    })
  }
  return (
    <div>
      <div className='StHeader'>
        <input
          value={state.content}
          onChange={onChangeHandle}
        />
        <button onClick={handleSubmit}>추가하기</button>
      </div>
      <h1>Todo List</h1>
      <div className='StList' >
        {
          data.map((e) => <div>{e}</div>)
        }
      </div>
    </div>
  );
}

export default App;
