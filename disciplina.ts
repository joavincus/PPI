export class Disciplina {
    private cod: number
    private nome: string
    private ch: number
    private docente: string

    constructor(cod: number, nome: string, ch: number, docente: string) {
        this.cod = cod
        this.nome = nome
        this.ch = ch
        this.docente = docente
    }

    obterCod(): number {
        return this.cod
    }

    inserirCod(cod: number): void {
        this.cod = cod
    }

    obterNome(): string {
        return this.nome
    }

    inserirNome(nome: string): void {
        this.nome = nome
    }

    obterCH(): number {
        return this.ch
    }

    inserirCH(ch: number): void {
        this.ch = ch
    }

    obterDocente(): string {
        return this.docente
    }

    inserirDocente(docente: string): void {
        this.docente = docente
    }
}
