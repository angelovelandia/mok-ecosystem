import { formatCpf, clearFormatCpf, isValidCpf } from "./cpf";

describe("Probando formateo de cpf", () => {
    it("Enviado el CPF de pruebas '12999222999'", () => {
      expect(formatCpf("12999222999")).toBe("129.992.229-99");
    });
});

describe("Probando quitar formato de CPF", () => {
  it("Enviado el CPF de pruebas '129.992.229-99'", () => {
    expect(clearFormatCpf("129.992.229-99")).toBe("12999222999");
  });
});

describe("Probando si CPF es valido", () => {
  it("Enviado el CPF de pruebas '129.992.229-99'", () => {
    expect(isValidCpf("129.992.229-99")).toBe(true);
  });
});