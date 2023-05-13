import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'

import {
    StyledContainer,
    InnerContainer,
    UpperContainer,
    IconsContainer,
    PageTitle,
    Icon,
    Notice,
    StyledText,
    ListTitle,
    StyledButton,
    ButtonText,
    Line,
    TableContainer,
    ScrollableContainer,
    SelectImage,
    PrescriptionImage
} from './styles'

import SettingsImage from '../../images/icons/settings.svg'
import { Colors } from '../../shared/variables'

const VerifiedResultScreen = ({ navigation, route }) => {
    const id = route.params.query.id
    const tableHead = ['Drug name', 'Symptoms', 'Alternatives', 'Suggestions']
    const tableData = [
        ['Microcef CV 200 mg', 'Throat infections', 'Goodcif CV 200mg', '-'],
        ['Ventryl D', 'Sore throat', 'Chericof', 'Avoid cold beverages'],
        ['Pantotav DSR', 'Acidity', 'Pantin D', 'Drink warm water in morning'],
        ['BENZ Pearls', 'Dry cough', '-', '-'],
        ['Montak LC', 'Runny nose, watery eyes, sneezing', 'Levocet M', 'Avoid sour edibles']
    ]

    return (
        <StyledContainer>
            <StatusBar style='dark' />
            <InnerContainer>
                <UpperContainer>
                    <PageTitle>
                        Verified Result
                    </PageTitle>
                    <IconsContainer>
                        <Icon settings={true} onPress={() => navigation.navigate('Settings')}>
                            <SettingsImage width="30px" height="30px" fill="#0F2E53" />
                        </Icon>
                    </IconsContainer>
                </UpperContainer>
                <Notice>
                    <StyledText>
                        Your upload prescription has been verified by{' '}
                        <Text style={{ fontWeight: 'bold' }}>Dr. Puneet Sharma</Text>
                        , a trained medical professional.
                    </StyledText>
                </Notice>
                <ScrollableContainer>
                    <SelectImage>
                        <PrescriptionImage resizeMode="cover" source={require('../../images/test/prescription.jpg')} />
                    </SelectImage>
                    <ListTitle>Drugs' alternatives and suggestions:</ListTitle>
                    <TableContainer>
                        <Table borderStyle={{ borderWidth: 1, borderColor: `${Colors.primary}` }}>
                            <Row data={tableHead} style={{
                                height: 50, backgroundColor: `${Colors.tertiary}`
                            }} textStyle={{ margin: 4, fontWeight: 'bold' }} />
                            <Rows data={tableData} textStyle={{ margin: 6 }} />
                        </Table>
                    </TableContainer>
                </ScrollableContainer>
                <Line />
                <StyledButton onPress={() => navigation.goBack()}>
                    <ButtonText>Continue</ButtonText>
                </StyledButton>
            </InnerContainer>
        </StyledContainer>
    )
}

export default VerifiedResultScreen