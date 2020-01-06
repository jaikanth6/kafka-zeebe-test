const ZB = require('zeebe-node')

const zbc = new ZB.ZBClient({
  onReady: () => console.log(`Connected!`),
  onConnectionError: () => console.log(`Disconnected!`)
})

const zbWorker = zbc.createWorker(
  null,
  'demo-service',
  (job, complete) => {
    console.log(job);
  },
  {
    onReady: () => console.log(`Worker connected!`),
    onConnectionError: () => console.log(`Worker disconnected!`)
  })