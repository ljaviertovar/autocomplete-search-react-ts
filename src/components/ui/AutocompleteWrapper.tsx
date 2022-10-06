import { useEffect, useState } from "react"
import axios from "axios"

import { Col, Container, Row, Text } from "@nextui-org/react"
import { Autocomplete } from "."

import { Country } from "../../ts/interfaces/Country.interface"

const AutocompleteWrapper = () => {
	const [data, setData] = useState<Country[]>([])

	useEffect(() => {
		axios.get(`https://restcountries.com/v3.1/lang/eng`).then(resp => setData(resp.data))
	}, [])

	return (
		<Container>
			<Row>
				<Col>
					<Text
						h1
						css={{
							textAlign: "center",
							textGradient: "45deg, $blue600 -20%, $pink600 50%",
						}}
					>
						English-speaking countries:
					</Text>
				</Col>
			</Row>
			<Row>
				<Col
					style={{
						width: "60%",
						margin: "auto",
						padding: "1rem",
					}}
				>
					<Autocomplete data={data} />
				</Col>
			</Row>
		</Container>
	)
}

export default AutocompleteWrapper
