import './App.css'
import DisplayDate from './components/DisplayDate'
import Greeting from './components/Greeting'
import MemberValidation from './components/memberValidation'
import TaskList from './components/TaskList'


function App() {

  return (
    <>
    <div>
      <DisplayDate />
      <Greeting />
      <MemberValidation />
      <TaskList />
    </div>
    </>
  )
}

export default App
