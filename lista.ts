import { Disciplina } from "./disciplina"
import { Estudante, Curso } from "./estudante"

let d1 = new Disciplina(149602, "Matemática", 60, "Prof. Carlos")
let d2 = new Disciplina(144785, "Português", 40, "Profa. Marcela")

let e1 = new Estudante("20201144010074", "Vinícius", Curso.INFO, 4)
e1.alterarPeriodo(4)

console.log("Disciplinas:")
console.log(`Código: ${d1.obterCod()}, Nome: ${d1.obterNome()}, CH: ${d1.obterCH()}, Docente: ${d1.obterDocente()}`)
console.log(`Código: ${d2.obterCod()}, Nome: ${d2.obterNome()}, CH: ${d2.obterCH()}, Docente: ${d2.obterDocente()}`)

console.log("\nEstudante:")
console.log(`Matrícula: ${e1.obterMatricula()}`)
console.log(`Nome: ${e1.obterNome()}`)
console.log(`Curso: ${e1.obterCurso()}`)
console.log(`Período atual: ${e1.obterPeriodo()}`)
