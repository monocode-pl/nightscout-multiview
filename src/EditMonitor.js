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
import {useTranslation} from "react-i18next";

export function EditMonitor({monitor, onSubmit}) {
    const [label, setLabel] = useState(monitor.label || '');
    const [url, setUrl] = useState(monitor.url || '');
    const [withClock, setWithClock] = useState(monitor.withClock);
    const [token, setToken] = useState(monitor.token || '');
    const {t} = useTranslation();
    function onLabelInput(event) {
        setLabel(event.target.value);
    }

    function onUrlInput(event) {
        setUrl(event.target.value);
    }

    function onUrlPaste(event) {
        try {
            const pastedText = event.clipboardData.getData("text/plain");
            const pastedUrl = new URL(pastedText);

            if (pastedUrl.searchParams.has("token")) {
                setToken(pastedUrl.searchParams.get("token"));
                pastedUrl.searchParams.delete("token");
            }

            setUrl(pastedUrl.toString());

            event.preventDefault();
        } catch (error) {
            console.error(error);
        }
    }

    function onWithClockChange(event) {
        setWithClock(event.target.checked);
    }

    function onTokenChange(event) {
        setToken(event.target.value);
    }

    function submit() {
        const newPerson = {...monitor, label, url, withClock, token};

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
                <ModalHeader>{t('Provide person\'s data')}</ModalHeader>
                <ModalBody>
                    <FormControl mb={5}>
                        <FormLabel>{t('Name')}</FormLabel>
                        <Input type='text' value={label} onInput={onLabelInput} />
                    </FormControl>
                    <FormControl mb={5} isInvalid={urlInvalid}>
                        <FormLabel>{t('Nightscout page address')}</FormLabel>
                        <Input type='text' value={url} onInput={onUrlInput} onPaste={onUrlPaste}/>
                        {urlInvalid && <FormErrorMessage>Niepoprawny adres</FormErrorMessage>}
                    </FormControl>
                    <FormControl mb={5}>
                        <FormLabel>{t('Token')}</FormLabel>
                        <Input type='text' value={token} onInput={onTokenChange} />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor='withClockSwitch'>{t('Clock')}</FormLabel>
                        <Switch id='withClockSwitch' size='lg' colorScheme={'teal'} isChecked={withClock} onChange={onWithClockChange}/>
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme={'teal'} size={'lg'} onClick={submit} isDisabled={urlInvalid}>
                        {t('Save')}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}