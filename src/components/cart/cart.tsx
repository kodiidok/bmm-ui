import styles from '@/styles/cart.module.css';
import { Image, Input } from '@mantine/core';
import { IconMinus, IconPlus, IconTrashXFilled, IconX } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

const imgUrl =
  "https://i1.sndcdn.com/artworks-NURJW9AoK2D2yyIc-2p6oJw-t500x500.jpg";

export function QtyControls() {
  return (
    <div className={styles['qtyControls']}>
      <div className={styles['controller']}>
        <IconPlus size={15} />
      </div>
      <div className={styles['qtyInput']}>
        <Input className={styles['input']} placeholder='Qty' />
      </div>
      <div className={styles['controller']}>
        <IconMinus size={15} />
      </div>
    </div>
  );
}

export function Item() {
  return (
    <div className={styles['item']}>
      <div className={styles['itemImage']}>
        <Image src={imgUrl} width={50} />
      </div>

      <div className={styles['itemInfo']}>
        <h4>Ticket Name</h4>
        <p>Venue</p>
      </div>

      <QtyControls />

      <div className={styles['price']}>
        $ 60
      </div>

      <div className={styles['removeItem']}>
        <IconTrashXFilled />
      </div>
    </div>
  );
}

export default function ShoppingCart() {

  const router = useRouter();

  return (
    <div className={styles['cart']}>
      <div className={styles['cartTitle']}>
        <h5>Purchase Summary</h5>
        <div>
          <IconX size={18} />
          <h5>Clear</h5>
        </div>
      </div>

      <div className={styles['purchasedItems']}>

        {/* these are purchase order items with mock data. 
        add correct data from database */}
        <Item />
        <Item />
        <Item />

        <div className={styles['toCheckout']}>
          <div className={styles['subtotal']}>
            <p>subtotal</p>
            <span>$32.97</span>
          </div>
          <div className={styles['checkout']} onClick={() => router.push('/store/checkout')}>Checkout</div>
        </div>
      </div>
    </div>
  );
}