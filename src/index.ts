import 'module-alias/register';
import { Car } from "@/class/car";

function main() {
    const carro = new Car('Versa 1.6', 'cinza', 32000)

    carro.print()

}
main()
