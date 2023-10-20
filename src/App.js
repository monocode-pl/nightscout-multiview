import './App.css';
import {ChakraProvider} from '@chakra-ui/react'
import {HelloModal} from "./HelloModal";
import {NumberOfPeopleModal} from "./NumberOfPeople";
import {Dashboard} from "./Dashboard";
import {useState} from "react";

function App() {
    function download() {
        const aElement = document.createElement('a');
        aElement.setAttribute('download', "index.html");
        const blob = new Blob(["<h1>Hello</h1>"], {type: "text/html"})
        const href = URL.createObjectURL(blob);
        aElement.href = href;
        aElement.setAttribute('target', '_blank');
        aElement.click();
        URL.revokeObjectURL(href);
    }

    const [view, setView] = useState('hello');
    const [numberOfPeople, setNumberOfPeople] = useState(4);

    function onHelloClose() {
        setView('numberOfPeople')
    }

    function onNumberOfPeopleSubmit(numberOfPeople) {
        setNumberOfPeople(numberOfPeople);
        setView('dashboard')
    }

    let content = null;

    switch (view) {
        case 'hello':
            content = <HelloModal onClose={onHelloClose}></HelloModal>
            break;
        case 'numberOfPeople':
            content = <NumberOfPeopleModal numberOfPeople={numberOfPeople} onSubmit={onNumberOfPeopleSubmit}></NumberOfPeopleModal>
            break;
        case 'dashboard':
        default :
            content = <Dashboard numberOfPeople={numberOfPeople}></Dashboard>
    }

  return (
      <ChakraProvider>
          {content}

          {/*<Grid></Grid>*/}
          {/*<EditPerson isOpen={true} onClose={onClose}></EditPerson>*/}
      </ChakraProvider>
  );
}

export default App;
