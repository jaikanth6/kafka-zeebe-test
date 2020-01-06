# kafka-zeebe-test

zeebe-broker version: 0.22.0-alpha2
zeebe-node version: 0.22.0-alpha.2
kafka-node version: 5.0.0

The following error occurs only when kafka-node is installed. This happens when the worker tries to connect to the broker and immediately disconnects due to the below error.

```
{"timestamp":"2020-01-06T12:13:26.977Z","context":"C:\\kafka-zeebe-test\\node_modules\\zeebe-node\\dist\\zb\\ZBWorker.js:151","id":"test","level":50,"message":"Cannot read property 'on' of undefined","time":"2020 Jan-06 17:43:26PM","pollInterval":30000,"namespace":"ZBWorker","taskType":"demo-service"}
{"timestamp":"2020-01-06T12:13:27.979Z","context":"C:\\kafka-zeebe-test\\node_modules\\zeebe-node\\dist\\lib\\GRPCClient.js:193","id":"gRPC Channel","level":50,"message":{},"time":"2020 Jan-06 17:43:27PM","pollInterval":30000,"namespace":"ZBWorker","taskType":"demo-service"}
{"timestamp":"2020-01-06T12:13:27.981Z","context":"C:\\kafka-zeebe-test\\node_modules\\zeebe-node\\dist\\zb\\ZBWorker.js:151","id":"test","level":50,"message":"Cannot read property 'on' of undefined","time":"2020 Jan-06 17:43:27PM","pollInterval":30000,"namespace":"ZBWorker","taskType":"demo-service"}
{"timestamp":"2020-01-06T12:13:28.984Z","context":"C:\\kafka-zeebe-test\\node_modules\\zeebe-node\\dist\\lib\\GRPCClient.js:193","id":"gRPC Channel","level":50,"message":{},"time":"2020 Jan-06 17:43:28PM","pollInterval":30000,"namespace":"ZBWorker","taskType":"demo-service"}
{"timestamp":"2020-01-06T12:13:28.985Z","context":"C:\\kafka-zeebe-test\\node_modules\\zeebe-node\\dist\\zb\\ZBWorker.js:151","id":"test","level":50,"message":"Cannot read property 'on' of undefined","time":"2020 Jan-06 17:43:28PM","pollInterval":30000,"namespace":"ZBWorker","taskType":"demo-service"}
```

# Steps to reproduce

1. clone the above repo.
2. npm install
3. node app.js
