
import { create } from 'ipfs-http-client'
import { Buffer } from 'buffer'

/* configure Infura auth settings */
const projectId = process.env.REACT_APP_PROJECT_ID
const projectSecret = process.env.REACT_APP_PROJECT_SECRET
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
      authorization: auth,
  },
})

export default client