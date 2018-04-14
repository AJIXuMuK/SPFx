##Icon Field Customizer Sample
To test the sample:
1. Create a list in your SP Online tenant
2. Add a Choice column named Forecast
3. Provide next values for the Forecast column: Sunny, Rainy, PartlyCloudy
4. Clone the repo
5. ```bash
npm i
gulp serve --nobrowser
```
6. copy the querystring below and add it to the List page Url
?loadSPFX=true&debugManifestsFile=https://localhost:4321/temp/manifests.js&fieldCustomizers={"Forecast":{"id":"d9a5c3e1-9726-45f9-b1dd-761fe3bc0c2a"}}
7. Have fun!