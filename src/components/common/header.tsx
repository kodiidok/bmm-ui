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
import UserProfile from '../user/UserProfile';
import { useStore } from '../providers/storeProvider';

export default function Header() {
  const [openCart, setOpenCart] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const { activeCustomer, setActiveCustomer, activeOrder, setActiveOrder } = useStore();

  const router = useRouter();

  useEffect(() => {
    console.log('active', activeCustomer);
    console.log('active', activeOrder);
  }, []);

  const handleCart = () => {
    console.log(openCart);
    setOpenCart(!openCart);
    setOpenProfile(false);
  }

  const handleProfile = () => {
    console.log(openProfile);
    setOpenProfile(!openProfile);
    setOpenCart(false);
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
          {
            activeCustomer === null ?
              <Button
                size={1}
                text="Sign in"
                onClick={() => router.push("/store/auth")}
                type="primary"
              ></Button> :
              <Button
                size={1}
                text={`${activeCustomer.firstName}`}
                onClick={() => handleProfile()}
                type="primary"
              ></Button>
          }
          <div className={styles['shoppingCart']} onClick={() => handleCart()}>
            <IconShoppingCart size={25} />
          </div>
        </div>
      </div>
      {
        openCart &&
        <ShoppingCart />
      }
      {
        openProfile &&
        <UserProfile
          name={`${activeCustomer.firstName} ${activeCustomer.lastName}`}
          email={activeCustomer.emailAddress}
          id={activeCustomer.id}
        />
      }
    </div>
  );
}