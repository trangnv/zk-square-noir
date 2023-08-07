import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Lock", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployUltraVerifier() {
    const UltraVerifier = await ethers.getContractFactory("UltraVerifier");
    const ultraVerifier = await UltraVerifier.deploy();

    return { ultraVerifier };
  }

  describe("Deployment", function () {
    it("Should ...", async function () {
      const { ultraVerifier } = await loadFixture(deployUltraVerifier);
    });
  });
});
