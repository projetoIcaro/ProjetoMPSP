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

// const renderExtractionDataRecursively = (data = null, isPreview = false) => {
// 	const dataToRender = [];
// 	data.forEach((value, key) => {
// 		if (!isPreview || previewData === '*' || previewData.includes(key)) {
// 			dataToRender.push(
// 				<div className = {styles.itemData} key = {key}>
// 					<div className = {styles.itemDataKey}>{key + ': '}</div>
// 					{!isImmutable(value) ? <span>{value}</span> : renderExtractionDataRecursively(value, isPreview)}
// 				</div>
// 			);
// 		}
// 	});
// 	return dataToRender;
// };

function DownloadButton (props) {
	const {extractionData} = props;
  // const MyDocument = GerarPDF({'ok': true})

	const renderItemsByApi = (apiName) => {
		const apiData = extractionData.get(apiName);
		const dataToRender = [];
		if (!apiData) return dataToRender;
		apiData.forEach(((data, key) => {
			let component;
			if (!isImmutable(data)) {
				component = <Text key = {key}>{key + ': ' + data}</Text>;
			} else {
				component = [];
				component.push(<Text key = {key}>{key + ':'}</Text>);
				data.forEach((value, keyValue) => {
					component.push(<Text key = {keyValue}>{keyValue + ': ' + value}</Text>);
				});
			}
			dataToRender.push(component);
		}));
		return dataToRender;
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


