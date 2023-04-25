import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    empresa = 'Siri Cascudo';
    cnpj = '21251523156';
    endereco = 'Fenda do Biquine 235';
    produto = 'Hamburguer de siri';
    descricao = 'Hamburguer feito de carne de siri';
    preco = 'R$:5,00';
    oferta1 = 'Leve 3 e pague 2';
    oferta2 = 'Compre um combo grande de hamburguer e Refri pelo o preço do medio';
    showDiv2 = true;
    showDiv3 = true;

  

    Trocadiv() {
      
        this.showDiv2 = !this.showDiv2;
        this.showDiv3 = !this.showDiv3;
    }
}
