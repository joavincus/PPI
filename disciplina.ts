export class Disciplina {
    private codigo: number

    constructor(cod: number) {
        this.codigo = cod
    }

    obterCodigo(): number {
        return this.codigo
    }

    inserirCodigo(cod: number): void {
        this.codigo = cod

        // Disciplina
    }
}