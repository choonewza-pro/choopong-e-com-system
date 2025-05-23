import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>E-Com System 8.0.1</h1>
      <div>
        <ol>
          <li>Add login page</li>
          <li>Update label cart button</li>
          <li>add grid ui</li>
          <li>fix bug not display name</li>
          <li>CEC-13-display-the-receipt-on-the-order-summary-page</li>
          <li>CEC-10-create-the-payment-form</li>
        </ol>
        <ol>
          <li>PO : Create login form</li>
        </ol>
      </div>
      <div>
        <ol>
          <li>DEV : Create login api</li>
          <li>BUG : 101</li>
          <li>BUG : 201</li>
          <li>BUG : 301</li>
        </ol>
      </div>
    </>
  )
}

export default App
