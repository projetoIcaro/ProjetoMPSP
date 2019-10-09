import React from 'react';
import {connect} from 'react-redux';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import ApiMap from 'utils/apisMap.json';
import {isImmutable} from "immutable";

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

const renderExtractionDataRecursively = (data = null) => {
	const dataToRender = [];
	data.forEach((value, key) => {
		const parentKey = !isImmutable(value) ? null : <Text key = {key}>{key + ': '}</Text>;
		const component = !isImmutable(value) ? <Text key = {key}>{key + ': ' + value}</Text> : renderExtractionDataRecursively(value);
		dataToRender.push(parentKey, component);
	});
	return dataToRender;
};

function DownloadButton (props) {
	const {extractionData} = props;
	// const MyDocument = GerarPDF({'ok': true})

	const renderItemsByApi = (apiName) => {
		const apiData = extractionData.get(apiName);
		if (!apiData) return [];
		return renderExtractionDataRecursively(apiData);
	};

	const render = ApiMap.map(data => {
		return (
			<Page key = {data.name} size="A4" style={styles.page}>
				<View style={styles.sectionRow}>
					<Text>{data.name}</Text>
					{renderItemsByApi(data.name)}
				</View>
			</Page>
		);
	});

	return (
		<PDFViewer width={'100%'}>
			<Document>
				{render}
			</Document>
		</PDFViewer>
	)
}

// const GerarPDF = (data = null, isPreview = false) => {
//
//
//
//
//
//     for (var api in data) {
//         console.log(`${api}`)
//         for (var resultado1 in data[api]) {
//             if(typeof data[api][resultado1] == 'object'){
//                 console.log(`${resultado1} :`)
//                 for (var resultado2 in data[api][resultado1]) {
//                     console.log(`       ${resultado2} e ${data[api][resultado1][resultado2]}`)
//                 }
//             }
//             else{
//                 console.log(`   ${resultado1} e ${data[api][resultado1]}`)
//             }
//         }
//     }
//
//     return MyDocument;
// };

const mapStateToProps = (state) => ({
	extractionData: state.getIn(['extraction']),
});

export default connect(mapStateToProps)(DownloadButton);


