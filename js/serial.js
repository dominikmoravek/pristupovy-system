// js/serial.js

// Function to connect to micro:bit using Web Serial API
async function connectMicrobit() {
    const port = await navigator.serial.requestPort();
    await port.open({ baudRate: 115200 });
    return port;
}

// Function to receive data from micro:bit
async function receiveData(port) {
    const reader = port.readable.getReader();
    while (true) {
        const { value, done } = await reader.read();
        if (done) break; // Reader has been canceled.
        // Handle the received data
        console.log(new TextDecoder().decode(value));
    }
    reader.releaseLock();
}

// Usage example
// (async () => {
//     const port = await connectMicrobit();
//     await receiveData(port);
// })();
