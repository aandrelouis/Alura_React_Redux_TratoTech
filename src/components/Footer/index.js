import styles from './Footer.module.scss'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter
} from 'react-icons/fa'


const iconeProps = {
    color: 'white',
    size: 24
}

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div>
                <FaFacebook {...iconeProps} />
                <FaInstagram  {...iconeProps} />
                <FaTwitter {...iconeProps} />
            </div>
            <span>
                Desenvolvido por Alura
            </span>
        </footer>
    )
}