import App from "./App";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Teste do componente App", () => {
  test("deve renderizar o componente App", () => {
   render(<App />);
    expect(screen.getByText("Cadastrar")).toBeInTheDocument();
  });
  test("deve cadastrar uma tarefa", () => {
    render(<App />)
    fireEvent.change(screen.getByTestId("campo-tarefa"), {
      target: { value: "Estudar Typescript" },
    });
    fireEvent.click(screen.getByTestId("botao-cadastrar"));
    expect(screen.getByText("Estudar Typescript")).toBeInTheDocument();
  });
});
