import {
    Button, FormControl, FormErrorMessage,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    NumberInput,
    NumberInputField
} from "@chakra-ui/react";
import {useState} from "react";

export function NumberOfPeopleModal({numberOfPeople, onSubmit}) {
    const [value, setValue] = useState(numberOfPeople);
    const valueInvalid = isValueValid(value);

    function isValueValid(value) {
        value = parseInt(value, 10);

        if (isNaN(value)) {
            return true;
        }

        return value <= 0;
    }

    function onChange(event) {
        setValue(event.target.value);
    }

    function onBtbClick() {
        onSubmit(parseInt(value, 10));
    }

    function onClose() {

    }

    return (
        <Modal isOpen={true} onClose={onClose} isCentered={true}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Ile osób chcesz monitorować?</ModalHeader>
                <ModalBody>
                    <FormControl isInvalid={valueInvalid}>
                        <NumberInput value={value} min={1} max={50} size='lg'>
                            <NumberInputField onChange={onChange}/>
                        </NumberInput>
                        <FormErrorMessage>Niepoprawna liczba monitorów</FormErrorMessage>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme={'teal'} size={'lg'} onClick={onBtbClick} isDisabled={valueInvalid}>Dalej</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}