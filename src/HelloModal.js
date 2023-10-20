import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text} from "@chakra-ui/react";

export function HelloModal({onClose}) {
    return (
        <Modal isOpen={true} onClose={onClose} className='HelloModal' isCentered={true} size={'lg'}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader fontSize={'2xl'}>Witaj w Generatorze Nightscout&nbsp;MultiView</ModalHeader>
                <ModalBody>
                    <Text mb={5}>
                        Używając Generatora możesz w prosty sposób stworzyć panel pozwalający jednocześnie monitorować wiele
                        osób.
                    </Text>
                    <Text mb={5}>
                        Określ ile osób ma być monitorowanych, a następnie podaj adres strony Nightscout dla każdej osoby.
                    </Text>
                    <Text mb={5}>
                        Generator stworzy plik z panelem, który można będzie pobrać na Twój komputer.
                    </Text>
                    <Text mb={5}>
                        Pobrany plik otwórz w dowolnej przeglądarce internetowej.
                    </Text>
                </ModalBody>

                <ModalFooter justifyContent={'center'}>
                    <Button size={'lg'}
                            colorScheme={'teal'} onClick={onClose}>Zaczynamy</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}