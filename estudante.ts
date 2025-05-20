export enum Curso {
    INFO = "Informática",
    MECA = "Mecatrônica",
    REDES = "Redes"
}

export class Estudante {
    private matricula: string
    private nome: string
    private curso: Curso
    private periodo: number

    constructor(mat: string, nome: string, cr: Curso = Curso.INFO, pr: number = 1) {
        this.matricula = mat
        this.nome = nome
        this.curso = cr
        this.periodo = pr
    }


    obterMatricula(): string {
        return this.matricula
    }


    obterNome(): string {
        return this.nome
    }


    obterCurso(): string {
        return this.curso
    }

    obterPeriodo(): number {
        return this.periodo
    }
    
    alterarPeriodo(per: number): void {
        if (per >= 1 && per <= 9) {
            this.periodo = per
        }
    }
}
