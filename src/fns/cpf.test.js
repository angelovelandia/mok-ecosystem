import { formatCpf } from "./cpf";

describe("it should say hello", () => {
    it("should greet '12999222999'", () => {
      expect(formatCpf("12999222999")).toBe("129.992.229-99");
    });
});