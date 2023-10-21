import {
    Button,
    FormControl, FormErrorMessage,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Switch
} from "@chakra-ui/react";
import {useState} from "react";

export function EditMonitor({monitor, onSubmit}) {
    const [label, setLabel] = useState(monitor.label || '');
    const [url, setUrl] = useState(monitor.url || '');
    const [withClock, setWithClock] = useState(monitor.withClock);

    function onLabelInput(event) {
        setLabel(event.target.value);
    }

    function onUrlInput(event) {
        setUrl(event.target.value);
    }

    function onWithClockChange(event) {
        setWithClock(event.target.checked);
    }

    function submit() {
        const newPerson = {...monitor, label, url, withClock};

        onSubmit(newPerson);
    }

    function isValidUrl(url) {
        try {
            new URL(url);

            return true;
        } catch (Error) {
            return false;
        }
    }

    const urlInvalid = url.length > 0 && !isValidUrl(url);

    return (
        <Modal isOpen={true} onClose={submit} closeOnOverlayClick={false} closeOnEsc={false}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Podaj dane osoby</ModalHeader>
                <ModalBody>
                    <FormControl mb={5}>
                        <FormLabel>Imię</FormLabel>
                        <Input type='text' value={label} onInput={onLabelInput} />
                    </FormControl>
                    <FormControl mb={5} isInvalid={urlInvalid}>
                        <FormLabel>Adres strony Nightscout</FormLabel>
                        <Input type='text' value={url} onInput={onUrlInput} />
                        {urlInvalid && <FormErrorMessage>Niepoprawny adres</FormErrorMessage>}
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='withClockSwitch'>Clock</FormLabel>
                        <Switch id='withClockSwitch' size='lg' colorScheme={'teal'} isChecked={withClock} onChange={onWithClockChange}/>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme={'teal'} size={'lg'} onClick={submit} isDisabled={urlInvalid}>Zapisz</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}