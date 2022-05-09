import React, { useState, useLayoutEffect, createRef, useEffect } from 'react'
import BpmnModeler from 'camunda-bpmn-js/lib/camunda-platform/Modeler'
import 'camunda-bpmn-js/dist/assets/camunda-platform-modeler.css'

const BPMNModeler = () => {
	const canvas = createRef()
	const [data, setData] = useState()
	const [bpmn, setBpmn] = useState()

	const modelParentId = 'modelParentId'
	const modelId = 'modelId'

	useLayoutEffect(() => {
		console.log('count')
		const container = canvas.current

		const newBpmn = new BpmnModeler({
			container: container,
		})

		setBpmn(newBpmn)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [setBpmn])

	useEffect(() => {
		const importXML = async () => {
			try {
				await bpmn.importXML(data)
			} catch (err) {
				console.log(err)
			}
		}

		if (!bpmn || !data) return
		importXML()
	}, [bpmn, data])

	useEffect(() => {
		const loadXml = async () => {
			await fetch('./data.bpmn')
				.then((response) => response.text())
				.then((data) => {
					setData(data)
				})
		}

		if (!bpmn) return
		loadXml()
	}, [bpmn])

	return (
		<div id={modelParentId}>
			<canvas id={modelId} ref={canvas} />
		</div>
	)
}

export default BPMNModeler
