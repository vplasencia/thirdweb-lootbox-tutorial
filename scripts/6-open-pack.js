import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = "0xb97ade93dF52E79D21FF7A7fC41D792C03aa92dC";
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log("Opening the pack...");
  const opened = await packModule.open("0");
  console.log("Opened the pack!");
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}
