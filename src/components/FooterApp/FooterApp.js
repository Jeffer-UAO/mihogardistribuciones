import { WhatsApp } from "../WhatsApp";

import styles from "./FooterApp.module.scss";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import Link from "next/link";

export function FooterApp() {
  return (
    <div className={styles.btnWhatsapp}>
      <div className={styles.paneluser}>
        <Link href="/">
          <div className={styles.icon}>
            <AiOutlineHome size={30} />
            <p>home</p>
          </div>
        </Link>
        <Link href="/featured">
          <div className={styles.icon}>
            <MdOutlineCategory size={30} />
            <p>Exclusivo</p>
          </div>
        </Link>

        <WhatsApp
          phoneNumber="+573156665224"
          message="Hola, me gustaría obtener más información sobre sus productos."
        />

        <Link href="/ofert">
          <div className={styles.icon}>
            <MdOutlineLocalOffer size={30} />
            <p>Ofertas</p>
          </div>
        </Link>

        <Link href="/join/sing-in">
          <div className={styles.icon}>
            <CiUser size={30} />
            <p>cuenta</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
