class Selecao
{
    constructor(selecao, grupo,pontos, saldoGols,jogosGanhos)
    {
        this.selecao = selecao;
        this.grupo = grupo;
        this.pontos = pontos;
        this.saldoGols = saldoGols;
        this.jogosGanhos = jogosGanhos;
    }
                                                    //Tipo dado necessario para variavel:
    get selecao() {return this.selecao;}            //String
    set selecao(s) {this.selecao = s;}              //String
    get grupo() {return this.grupo;}                //String
    set grupo(g) {this.grupo = g;}                  //String
    get pontos() {return this.pontos;}              //Int
    set pontos(p) {this.pontos = p;}                //Int
    get saldoGols() {return this.saldoGols;}        //Int
    set saldoGols(s) {this.saldoGols = s;}          //Int
    get jogosGanhos() {return this.jogosGanhos;}    //Int
    set jogosGanhos(j) {this.jogosGanhos = j;}      //Int
}
