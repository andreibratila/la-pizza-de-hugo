import { Product, ProductDiv } from "@/components";
import { bebidasData } from "@/data/productos";

export default function Bebidas() {
    return (
        <ProductDiv>
            {
                bebidasData.map( ({path, name, price}) => (
                    <Product path={path} price={price} name={name} key={name}/>
                ))
            }
        </ProductDiv>
    )
}