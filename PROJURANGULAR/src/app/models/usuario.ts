export class Usuario {

  constructor(
    public id: number,
    public nome: string,
    public sobrenome: string,
    public email: string,
    public dataNascimento: Date,
    public escolaridade: number
  ) {  }

}