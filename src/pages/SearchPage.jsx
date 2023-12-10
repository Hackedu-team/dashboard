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
        "title": "table 6",
        "type": "tableau",
        "source": null,
        "matrix": [[1, 7, 4, 6, 2], [8, 3, 2, 6, 10], [9, 0, 1, 7, 5]],
        "value": "accronym definition",
        "reference": {
            "docName": "Title du dernier doc",
            "link": "document path",
            "pageNumber": 12
        }
    },
    {
        "title": "text 3",
        "type": "text",
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
        "title": "text 4",
        "type": "text",
        "source": null,
        // "matrix": [[1, 7, 4, 6, 2], [8, 3, 2, 6, 10], [9, 0, 1, 7, 5]],
        "value": "voici le texte 1",
        "reference": {
            "docName": "Title du premier doc",
            "link": "document path",
            "pageNumber": 12
        }
    },
    {
        "title": "text 4",
        "type": "text",
        "source": null,
        // "matrix": [[1, 7, 4, 6, 2], [8, 3, 2, 6, 10], [9, 0, 1, 7, 5]],
        "value": "voici le texte 1",
        "reference": {
            "docName": "Title du premier doc",
            "link": "document path",
            "pageNumber": 12
        }
    },
]

export default function SearchPage() {

    const [query, setQuery] = useState('')
    const [resources, setResources] = useState([])

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
                                                        Réponse: {data.title } {data.value ? `: ${data.value}` : null}
                                                    </Typography>
                                                    <Typography>
                                                        Reference: ({data.reference.docName}, lien: {data.reference.link}, page {data.reference.pageNumber})
                                                    </Typography>
                                                </Box>
                                            : null
                                        }

                                        {
                                            data.type == "tableau" ?
                                                <Box width='40%'>
                                                    <BarChart table={data.matrix} title={data.title}/>
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