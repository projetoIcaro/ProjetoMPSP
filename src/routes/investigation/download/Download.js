import React from 'react';
import {connect} from 'react-redux';
import {isImmutable} from 'immutable';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';


function DownloadButton (props) {

    const MyDocument = GerarPDF(props.extractionData.toJS())
    
    return (
        <PDFViewer>
            {MyDocument}
        </PDFViewer>
    )
}

const GerarPDF = (data = null, isPreview = false) => {
    const dataToRender = [];

    const styles = StyleSheet.create({
        page: {
          flexDirection: 'row',
          backgroundColor: '#E4E4E4'
        },
        section: {
          margin: 10,
          padding: 10,
          flexGrow: 1
        }
      });

    const MyDocument = (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Section #1</Text>
                </View>
                <View style={styles.section}>
                    <Text>Section #2</Text>
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


