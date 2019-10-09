import React from 'react';
import {connect} from 'react-redux';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';


function DownloadButton (props) {

    const MyDocument = GerarPDF(props.extractionData.toJS())

    return (
        <PDFViewer width={'100%'}>
            {MyDocument}
        </PDFViewer>
    )
}

const GerarPDF = (data = null, isPreview = false) => {

    const styles = StyleSheet.create({
        page: {
          flexDirection: 'column',
          backgroundColor: 'white',
          fontFamily: 'Helvetica',
        },
        sectionRow: {
          margin: 1,
          padding: 1,
          flexGrow: 1,
          color: 'black',
          textAlign: 'center'
        }
      });

    const MyDocument = (       
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.sectionRow}>
                    <Text>Section #1</Text>
                </View>
            </Page>
            <Page size="A4" style={styles.page}>
                <View style={styles.sectionRow}>
                    <Text>Section #1</Text>
                </View>
            </Page>
            <Page size="A4" style={styles.page}>
                <View style={styles.sectionRow}>
                    <Text>Section #1</Text>
                </View>
            </Page>
        </Document>
    );

    for (var api in data) {
        console.log(`${api}`)
        for (var resultado1 in data[api]) {
            if(typeof data[api][resultado1] == 'object'){
                console.log(`${resultado1} :`)
                for (var resultado2 in data[api][resultado1]) {
                    console.log(`       ${resultado2} e ${data[api][resultado1][resultado2]}`)    
                }
            }
            else{
                console.log(`   ${resultado1} e ${data[api][resultado1]}`)
            }
        }
    }

    return MyDocument;
};

const mapStateToProps = (state) => ({
	extractionData: state.getIn(['extraction']),
});

export default connect(mapStateToProps)(DownloadButton);


