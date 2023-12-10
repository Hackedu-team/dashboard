import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import SearchBar from "material-ui-search-bar";
import { Typography } from "@mui/material";
import Topbar from "../Topbar";
import Sidebarr from "../Sidebar";
import BarChart from "../components/charts/Chart1";
import "../index.css";

export const resourcesTable = [
    {
        "title": "image 230",
        "type": "image",
        "source": "http://cri-info.cm/wp-content/uploads/2023/11/LogoCAYSTI1.png",
        "matrix": null,
        "value": "accronym definition",
        "reference": {
            "docName": "Title du dernier doc",
            "link": "document path",
            "pageNumber": 12
        }
    },
    {
        "title": "Répartition des élèves du préscolaire par région en 2019-2020",
        "type": "tableau",
        "source": null,
        // "matrix": [[1, 7, 4, 6, 2], [8, 3, 2, 6, 10], [9, 0, 1, 7, 5]],
        "matrix": [15960, 199185, 33079, 23917, 152543, 18611, 8323, 71375, 26630, 17558],
        "labels": ["ADAMAOUA", "CENTRE", "EST", "EXTRÊME-NORD", "LITTORAL", "NORD", "NORD-OUEST", "OUEST", "SUD", "SUD-OUEST"],
        "value": "accronym definition",
        "reference": {
            "docName": "Title du dernier doc",
            "link": "document path",
            "pageNumber": 12
        }
    },
    {
        "title": "text 3",
        "type": "ta",
        "source": null,
        // "matrix": [[1, 7, 4, 6, 2], [8, 3, 2, 6, 10], [9, 0, 1, 7, 5]],
        "value": "voici le texte 2",
        "reference": {
            "docName": "Title du second doc",
            "link": "document path",
            "pageNumber": 12
        }
    },
    {
        "title": "Education",
        "type": "text",
        "source": null,
        // "matrix": [[1, 7, 4, 6, 2], [8, 3, 2, 6, 10], [9, 0, 1, 7, 5]],
        "value": "action d’éduquer, de former, d’instruire quelqu’un. L’éducation peut être définie comme un processus de transmission des connaissances et d’acquisition des valeurs dont le but est de permettre à l’individu d’agir plus efficacement dans son milieu naturel et social en tant que citoyen.",
        "reference": {
            "docName": "Annuaire2019_2020",
            "link": "document path",
            "pageNumber": 19
        }
    },
    {
        "title": "Éducation extrascolaire",
        "type": "text",
        "source": null,
        // "matrix": [[1, 7, 4, 6, 2], [8, 3, 2, 6, 10], [9, 0, 1, 7, 5]],
        "value": "elle est appréhendée comme cette forme d’éducation offerte aux jeunes en dehors des structures scolaires classiques essentiellement par des méthodes pédagogiques non directives.",
        "reference": {
            "docName": "Title du premier doc",
            "link": "document path",
            "pageNumber": 20
        }
    },
]

export default function SearchPage() {

    const [query, setQuery] = useState('')
    const [resources, setResources] = useState(resourcesTable)

	// useEffect(() => {
	// 	getData()
	// }, [])

    const getData = async () => {
        console.log('hey');
		try {
			
			const response = await axios.get(`https://hackedu-backend.onrender.com/search/${query}`)
						
			setResources(response.data)
            console.log(resources);
		} catch (err) {
			console.log(err);
		}
	}

    // Send search query form
    const handleSubmit = async() =>{

		const data = {
            searchTerm: query
		}
        const options = {
            headers: {
                // 'Authorization' : `Bearer ${token}`,
                'Accept': 'application/json',
                'content-type': 'application/json'
            }
        };

        try{
            const response = await axios.get(`https://hackedu-backend.onrender.com/search/`, JSON.stringify(data), options);
            if(response.status===200){
                console.log('Requête envoyée avec succès')
            }																																																																																																																																																																																																																																																																																																		
        
        }catch(error){
            console.log('error', error.response.status)
        }
	}


    return (
        <div className="content">
            <Sidebarr />
            <Box width="100%" justifyContent="space-between">
                <Topbar />
                <main className="mainSection">
                
                    <Typography textAlign='center' m={2} color='gray'>
                        Search omething or ask a question
                    </Typography>

                    <Box 
                        width='80%'
                        m={'auto'}
                    >
                        <SearchBar
                            value={query}
                            onChange={(newValue) => setQuery(newValue )}
                            onRequestSearch={() => getData()}
                        />
                    </Box>

                    <Box display='flex' flexDirection='column' justifyContent='center' marginTop={5}>
                        {
                            resources.map((data) => {
                                console.log(data.source);
                                return(
                                    <>
                                        
                                        {
                                            data.type == "text" ? 
                                                <Box
                                                    bgcolor='blueviolet'
                                                    padding={2}
                                                    color="#fff"
                                                    margin={1}
                                                    width={900}
                                                >
                                                    <Typography>
                                                        {data.title } {data.value ? `: ${data.value}` : null}
                                                    </Typography>
                                                    <Typography>
                                                        ({data.reference.docName}, lien: {data.reference.link}, page {data.reference.pageNumber})
                                                    </Typography>
                                                </Box>
                                            : null
                                        }

                                        {
                                            data.type == "tableau" ?
                                                <Box width='40%'>
                                                    <BarChart table={data.matrix} title={data.title} labels={data.labels}/>
                                                </Box>
                                            : null
                                        }

                                        {/* {
                                            data.source ?
                                                <img src={data.source} alt="" />
                                            : null
                                        } */}
                                        
                                    </>
                                )
                            })
                        }
                    </Box>
                
                </main>
            </Box>
        </div>
    );
}