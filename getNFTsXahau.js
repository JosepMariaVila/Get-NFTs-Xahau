function getNet() {
  let net;
  net = "wss://xahau.network";
  NetworkID = 21337;
  return net;
}

async function getTokens() {
  let net = getNet();
  const client = new xrpl.Client(net);

  results = "Connecting to " + net + "...";
  document.getElementById("resultField").value = results;
  await client.connect();
  results += "\nConnected. Getting Ridworld NFTs on Xahau...";
  document.getElementById("resultField").value = results;

  await client.connect();
  const response = await client.request({
    command: "account_objects",
    account: accountField.value,
    type: "uri_token",
    limit: 400,
  });
  //console.log(response);
  /*console.log("\nNFTs:\n " + JSON.stringify(response, null, 2));
  results += "\nNFTs:\n " + JSON.stringify(response, null, 2);
  document.getElementById("resultField").value = results;*/

  const objects = response.result.account_objects;
  //console.log(objects);
  console.log("\nNFTs:\n " + JSON.stringify(objects, null, 2));
  results += "\nNFTs:\n " + JSON.stringify(objects, null, 2);
  document.getElementById("resultField").value = results;

  client.disconnect();
}

//getTokens();
