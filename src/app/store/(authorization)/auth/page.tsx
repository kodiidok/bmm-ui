"use client";

import { ShopAuthenticationForm } from "@/components/forms/shopAuthenticationForm";

export default function Home() {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }}>
      <ShopAuthenticationForm></ShopAuthenticationForm>
    </div>
  );
}
