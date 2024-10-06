
export class Car {
    private model: string
    private cor: string
    private price: number

    constructor(model: string, cor: string, price: number) {
        this.model = model
        this.cor = cor
        this.price = price
    }

    public print() {
        console.log(`Meu carro é do modelo ${this.model}, e sua cor é ${this.cor}, e eu paguei o valor ${this.price}`)
        console.log('Meu carro é do modelo ' + this.model + ', e sua cor é' + this.cor + ', e eu paguei o valor R$' + this.price)
    }

}
