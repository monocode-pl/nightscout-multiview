import {ChakraProvider} from '@chakra-ui/react'
import {HelloModal} from "./HelloModal";
import {NumberOfMonitors} from "./NumberOfMonitors";
import {Dashboard} from "./Dashboard";
import {useState} from "react";

function App() {
    const [view, setView] = useState('hello');
    const [numberOfMonitors, setNumberOfMonitors] = useState(4);

    function onHelloClose() {
        setView('numberOfMonitors')
    }

    function onNumberOfMonitorsSubmit(numberOfMonitors) {
        setNumberOfMonitors(numberOfMonitors);
        setView('dashboard')
    }

    let content = null;

    switch (view) {
        case 'hello':
            content = <HelloModal onClose={onHelloClose}></HelloModal>
            break;
        case 'numberOfMonitors':
            content = <NumberOfMonitors numberOfMonitors={numberOfMonitors} onSubmit={onNumberOfMonitorsSubmit}></NumberOfMonitors>
            break;
        case 'dashboard':
        default :
            content = <Dashboard numberOfMonitors={numberOfMonitors}></Dashboard>
    }

  return (
      <ChakraProvider>
          {content}
      </ChakraProvider>
  );
}

export default App;
