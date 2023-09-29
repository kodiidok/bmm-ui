'use client'

import styles from '@/styles/store.module.css';
import { Logo } from "@/components/common/logo";
import Navbar from "@/components/navbar/navbar";
import Searchbar from "@/components/input/searchbar";
import Button from "@/components/button/button";
import { defaultNavbarItems } from "@/components/navbar/navbarItems";
import { IconShoppingCart } from '@tabler/icons-react';
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import ShoppingCart from '../cart/cart';

export default function Header() {
  const [openCart, setOpenCart] = useState(false);
  const router = useRouter();

  const handleCart = () => {
    console.log(openCart);
    setOpenCart(!openCart);
  }

  return (
    <div className={styles['header']}>
      <div className={styles['logo']}>
        <Logo placement="center" bg={true} />
      </div>
      <div className={styles['headerLayout']}>
        <Navbar items={defaultNavbarItems} />
        <div className={styles['searchSection']}>
          <Searchbar />
          <Button
            size={1}
            text="Sign in"
            onClick={() => router.push("/store/auth")}
            type="primary"
          ></Button>
          <div className={styles['shoppingCart']} onClick={() => handleCart()}>
            <IconShoppingCart size={25} />
          </div>
        </div>
      </div>
      {
        openCart &&
        <ShoppingCart />
      }
    </div>
  );
}