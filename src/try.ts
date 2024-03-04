const sleep = (ms: number = 0) => new Promise(r => setTimeout(r, ms));

// sleep().then(() => {
//   console.log("waited for 2secs");
// });

async function printer() {
  while (true) {
    console.log("printing");
    await sleep(1000);
  }
}

printer();
