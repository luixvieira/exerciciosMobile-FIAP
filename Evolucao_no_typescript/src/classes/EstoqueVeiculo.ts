class EstoqueVeiculos<T> {
  private estoque: Record<string, number> = {};

  // Adiciona um modelo ao estoque ou atualiza a quantidade
  adicionarEstoque(modelo: string, quantidade: number): void {
    if (this.estoque[modelo]) {
      this.estoque[modelo] += quantidade;
    } else {
      this.estoque[modelo] = quantidade;
    }
    console.log(`${quantidade} unidade(s) do modelo ${modelo} adicionadas ao estoque.`);
  }

  // Remove um modelo do estoque
  removerEstoque(modelo: string): void {
    if (this.estoque[modelo]) {
      delete this.estoque[modelo];
      console.log(`Modelo ${modelo} removido do estoque.`);
    } else {
      console.log(`Modelo ${modelo} não encontrado no estoque.`);
    }
  }

  // Consulta a quantidade de um modelo no estoque
  consultarEstoque(modelo: string): void {
    if (this.estoque[modelo]) {
      console.log(`Estoque de ${modelo}: ${this.estoque[modelo]} unidade(s).`);
    } else {
      console.log(`Modelo ${modelo} não está no estoque.`);
    }
  }
}

export { EstoqueVeiculos };
