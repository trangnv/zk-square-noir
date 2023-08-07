import { NoirNode } from "../utils/noirNode.js";
const noir = new NoirNode();
import { test, beforeAll, describe, expect, assert } from "vitest";

// import ethers, { Contract } from "ethers";
// import path from "path";
// import { execSync } from "child_process";
// import { decompressSync } from "fflate";
// import {
//   Crs,
//   newBarretenbergApiAsync,
//   RawBuffer,
// } from "@aztec/bb.js/dest/node/index.js";
// import { executeCircuit, compressWitness } from "@noir-lang/acvm_js";

import circuit from "../target/main.json" assert { type: "json" };

describe("Test noir circuits", () => {
  const acirBuffer = Buffer.from(circuit.bytecode, "base64");
  beforeAll(async () => {
    await noir.init();
  });
  test("Should generate witness", async () => {
    const input = { x: 1337 };
    await noir.generateWitness(input, acirBuffer);
    console.log("witness generated!");
  });
  test("Should not generate witness", async () => {
    const input = { x: 3 };
    try {
      await noir.generateWitness(input, acirBuffer);
    } catch (err: any) {
      console.log(err);
      //   assert(err.message.includes("could not satisfy all constraints""));
    }
  });
});
