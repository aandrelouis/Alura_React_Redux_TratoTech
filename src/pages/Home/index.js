import styles from './Home.module.scss';
import Header from 'components/Header';
import relogio from 'assets/inicial.png';


export default function Home() {
    return (
       <div>
            <Header 
                titulo="Classificados Tech"
                descricao="O melhor site de classificados de tecnologia do Brasil"
                imagem={relogio}
                className={styles.header}
            />
       </div>
    )
}