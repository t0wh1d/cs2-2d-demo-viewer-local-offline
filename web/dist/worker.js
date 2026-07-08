const WASM_BASE_URL = "/";

importScripts(WASM_BASE_URL + "wasm/wasm_exec.js");

onmessage = (event) => {
  var demoData = event.data.data;
  var filename = event.data.filename;
  if (demoData instanceof Uint8Array) {
    globalThis.wasmParseDemo(filename, demoData, async function (data) {
      if (data instanceof Uint8Array) {
        postMessage(data);
        // const msg = proto.Message.deserializeBinary(data).toObject()
        // messageBus.emit(msg)
      } else {
        console.log(
          "[message] text data received from server, this is weird. We're using protobufs ?!?!?",
          data
        );
        postMessage(JSON.parse(data));
      }
    });
  }
};

async function loadWasm() {
  const go = new globalThis.Go();
  await WebAssembly.instantiateStreaming(
    fetch(WASM_BASE_URL + "wasm/csdemoparser.wasm"),
    go.importObject
  ).then((result) => {
    go.run(result.instance);
    postMessage("ready");
  });
}
loadWasm();
