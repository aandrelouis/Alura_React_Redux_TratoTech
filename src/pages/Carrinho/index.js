import Header from "components/Header";
import styles from './Carrinho.module.scss';
import { useSelector } from "react-redux";
import Item from "components/Item";


export default function Carrrinho(){
    const carrinho = useSelector(state => {
        const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
            const item = state.itens.find(item => item.id === itemNoCarrinho.id);
            itens.push({
                ...item,
                quantidade: itemNoCarrinho.quantidade
            })
            return itens;
        },[])
        return carrinhoReduce;
    })
    
    return (
        <div>
            <Header
                titulo="Carrinho de Compra"
                descricao="Confire produtos adicionados ao carrinho"
            /> 

            <div className={styles.carrinho}>

            </div>
            {
                carrinho.map(item => <Item key={item.id} {...item} />)
            }
            <div className={styles.total}>
                <strong>
                    Resumo do Pedido
                </strong>
                <span>
                    Subtotal: <strong> R$ {0.0.toFixed(2)}</strong>
                </span>
            </div>
        </div>
    )
}