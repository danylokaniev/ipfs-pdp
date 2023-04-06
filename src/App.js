import './App.css'
import { useState } from 'react'
import client from './ipfs'

function App() {
  const [fileUrl, updateFileUrl] = useState(``)
  const [isLoading, setIsLoading] = useState(false)

  async function onChange(e) {
    const file = e.target.files[0]
    try {
      setIsLoading(true)
      const added = await client.add(file)
      updateFileUrl(added.path)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log('Error uploading file: ', error)
    }  
  }

  return (
    <div className="App">
      <h1>IPFS Example</h1>
        <div>
              <label>
              Upload file:  
              <input
                type="file"
                onChange={onChange}
              />
              </label>
        </div>
        <div>
              <label>
                or paste a file hash here:
                <input type="string" onChange={(e) => updateFileUrl(e.target.value)} />
              </label>
        </div>

      {isLoading && <div>Loading...</div>}
      {
        fileUrl && (
          <div>
            <img src={`https://infura-ipfs.io/ipfs/${fileUrl}`} width="100px" />
            <a href={`https://infura-ipfs.io/ipfs/${fileUrl}`} target="_blank" rel="noreferrer">{fileUrl}</a>
          </div>
        )
      }


    </div>
  );
}

export default App
