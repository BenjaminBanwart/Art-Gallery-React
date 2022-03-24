import {useState, useEffect} from 'react'
import Gallery from './components/Gallery'
import ButtonBar from './components/ButtonBar'

function App(){

  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

  useEffect(() => {
      document.title = 'Welcome to ArtWorld'
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(res => res.json())
      .then(resData => setData(resData))
      .catch(err => console.log(err))
  }, [artId])

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }

    return (
      <div>
        <Gallery objectImg={data.primaryImage} title={data.title} artist={data.artistDisplayName}/>
        <ButtonBar handleIterate={handleIterate}/>
      </div>
    )
}

export default App;