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
import {useTranslation} from "react-i18next";

export function NumberOfMonitors({numberOfMonitors, onSubmit}) {
    const [value, setValue] = useState(numberOfMonitors);
    const valueInvalid = isValueValid(value);
    const {t} = useTranslation();

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
                <ModalHeader>
                    {t('How many people you want to monitor?')}
                </ModalHeader>
                <ModalBody>
                    <FormControl isInvalid={valueInvalid}>
                        <NumberInput value={value} min={1} max={50} size='lg'>
                            <NumberInputField onChange={onChange}/>
                        </NumberInput>
                        <FormErrorMessage>Niepoprawna liczba monitorów</FormErrorMessage>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme={'teal'} size={'lg'} onClick={onBtbClick} isDisabled={valueInvalid}>
                        {t('Next')}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}