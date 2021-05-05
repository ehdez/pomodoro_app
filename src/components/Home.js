import React, {useState} from 'react'
import { Tab, Form, Nav } from 'react-bootstrap'
import BreakClock from './BreakClock'
import PomodoroClock from './PomodoroClock'

export default function Home() {

  const [currentTime, setCurrentTime] = useState()
  const [activeKey, setActiveKey] = useState('pomodoro')
  console.log(activeKey)

  return (
    <>
      <h1 className="text-center" style={{paddingTop: 20}}>PomoFocus</h1>
      <div className="d-flex flex-column align-items-center" style={{paddingTop: 60}}>
        <Tab.Container 
          defaultActiveKey={activeKey} 
          onSelect={(e) => setActiveKey(e)}
        >
          <Nav variant="tabs" className="justify-content-center">
            <Nav.Item>
              <Nav.Link eventKey="pomodoro">Pomodoro</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="break">Break</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className="flex-grow-1">
            <Tab.Pane eventKey="pomodoro">
              <PomodoroClock />
            </Tab.Pane>
            <Tab.Pane eventKey="break">
              <BreakClock />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  )
}
