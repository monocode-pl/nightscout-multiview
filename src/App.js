import {ChakraProvider} from '@chakra-ui/react'
import {Welcome} from "./Welcome";
import {NumberOfMonitors} from "./NumberOfMonitors";
import {Dashboard} from "./Dashboard";
import {useState} from "react";
import {theme} from "./Theme";

function App() {
    const [view, setView] = useState('welcome');
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
        case 'welcome':
            content = <Welcome onClose={onHelloClose}></Welcome>
            break;
        case 'numberOfMonitors':
            content = <NumberOfMonitors numberOfMonitors={numberOfMonitors} onSubmit={onNumberOfMonitorsSubmit}></NumberOfMonitors>
            break;
        case 'dashboard':
        default :
            content = <Dashboard numberOfMonitors={numberOfMonitors}></Dashboard>
    }

  return (
      <ChakraProvider theme={theme}>
          {content}
      </ChakraProvider>
  );
}

export default App;
