import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Table, Row, Rows } from 'react-native-table-component'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'

import {
    StyledContainer,
    InnerContainer,
    UpperContainer,
    IconsContainer,
    PageTitle,
    Icon,
    TableContainer,
    Line,
    StyledButton,
    ButtonText,
    SuggestionsContainer,
    SuggestionContainer,
    StyledText,
    InputContainer,
    TextInputContainer,
    StyledTextInput,
    StyledLabel,
    RadioContainer,
    BottomContainer,
    DrugName,
    SelectImage,
    PrescriptionImage,
    ScrollableContainer
} from './styles'
import { Colors } from '../../shared/variables'

import SettingsImage from '../../images/icons/settings.svg'

const drugsData = [
    {
        id: "1",
        type: "text",
        label: "Microcef CV 200 mg",
        name: "Microcef CV 200 mg",
        value: "",
        approved: "Yes",
    },
    {
        id: "2",
        type: "text",
        label: "Ventryl D",
        name: "Ventryl D",
        value: "",
        approved: "Yes",
    },
    {
        id: "3",
        type: "text",
        label: "Pantotav DSR",
        name: "Pantotav DSR",
        value: "",
        approved: "Yes",
    },
    {
        id: "4",
        type: "text",
        label: "BENZ Pearls",
        name: "BENZ Pearls",
        value: "",
        approved: "Yes",
    },
    {
        id: "5",
        type: "text",
        label: "Montak LC",
        name: "Montak LC",
        value: "",
        approved: "Yes",
    },
];

const PrescriptionScreen = ({ navigation }) => {
    const [sideEffects, setSideEffects] = useState('')
    const [value, setValue] = useState(0)
    const tableHead = ['Drug name', 'Symptoms']
    const tableData = [
        ['Microcef CV 200 mg', 'Throat infections'],
        ['Ventryl D', 'Sore throat'],
        ['Pantotav DSR', 'Acidity'],
        ['BENZ Pearls', 'Dry cough'],
        ['Montak LC', 'Runny nose, watery eyes, sneezing']
    ]

    const items = [
        { label: 'Yes', value: 0 },
        { label: 'No', value: 1 }
    ]

    const handleSubmit = () => { }

    return (
        <StyledContainer>
            <StatusBar style='dark' />
            <InnerContainer>
                <UpperContainer>
                    <PageTitle>
                        Prescription
                    </PageTitle>
                    <IconsContainer>
                        <Icon settings={true} onPress={() => navigation.navigate('Settings')}>
                            <SettingsImage width="30px" height="30px" fill="#0F2E53" />
                        </Icon>
                    </IconsContainer>
                </UpperContainer>
                <ScrollableContainer>
                    <SelectImage>
                        <PrescriptionImage resizeMode="cover" source={require('../../images/test/prescription.jpg')} />
                    </SelectImage>
                    <TableContainer>
                        <Table borderStyle={{ borderWidth: 1, borderColor: `${Colors.primary}` }}>
                            <Row data={tableHead} style={{
                                height: 50, backgroundColor: `${Colors.tertiary}`
                            }} textStyle={{ margin: 6, fontWeight: 'bold' }} />
                            <Rows data={tableData} textStyle={{ margin: 6 }} />
                        </Table>
                    </TableContainer>
                    <SuggestionsContainer>
                        <StyledText>Select your side effects or type them out:</StyledText>
                        {drugsData.map((drug) => (
                            <SuggestionContainer key={drug.id}>
                                <StyledLabel>Approval for{' '}
                                    <DrugName>"{drug.name}"</DrugName>:
                                </StyledLabel>
                                <InputContainer>
                                    <RadioContainer>
                                        <RadioForm formHorizontal>
                                            {items.map((obj, index) => (
                                                <RadioButton key={index}>
                                                    <RadioButtonInput
                                                        obj={obj}
                                                        index={index}
                                                        isSelected={index === value}
                                                        onPress={(value) => setValue(value)}
                                                        borderWidth={2}
                                                        buttonInnerColor='#0F2E53'
                                                        buttonOuterColor={index === value ? '#0F2E53' : '#0F2E53'}
                                                        buttonSize={10}
                                                        buttonWrapStyle={{ marginRight: 5 }}
                                                    />
                                                    <RadioButtonLabel
                                                        obj={obj}
                                                        index={index}
                                                        labelStyle={{
                                                            color: index === value ? '#0F2E53' : '#0F2E53',
                                                            fontSize: 19,
                                                            fontWeight: 'bold',
                                                            marginRight: 20
                                                        }}
                                                    />
                                                </RadioButton>
                                            ))}
                                        </RadioForm>
                                    </RadioContainer>
                                    {value === 1 && (
                                        <TextInputContainer>
                                            <StyledTextInput
                                                onChangeText={(sideEffects) => setSideEffects(sideEffects)}
                                                value={sideEffects}
                                                keyboardType="email-address"
                                            />
                                        </TextInputContainer>
                                    )}
                                </InputContainer>
                            </SuggestionContainer>
                        ))}
                    </SuggestionsContainer>
                </ScrollableContainer>
                <Line />
                <BottomContainer>
                    <StyledButton onPress={() => navigation.navigate("ViewMedicalHistory")}>
                        <ButtonText>View Patient's medical history</ButtonText>
                    </StyledButton>
                    <StyledButton submit={true} onPress={handleSubmit}>
                        <ButtonText submit={true}>Submit</ButtonText>
                    </StyledButton>
                </BottomContainer>
            </InnerContainer>
        </StyledContainer>
    )
}

export default PrescriptionScreen