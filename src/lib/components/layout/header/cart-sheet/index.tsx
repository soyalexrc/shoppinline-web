'use client';
import { Button } from '@/lib/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/lib/components/ui/sheet';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

export function CartSheet({ children }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  function onGoToCart() {
    router.push('/carrito');
    setOpen(false);
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div
          className="flex justify-center items-center"
          style={{ height: 'calc(100% - 60px)' }}
        >
          <Image
            src="/images/product/empty-bag.svg"
            alt="Empty bag"
            className="opacity-50"
            width={192}
            height={192}
          />
        </div>

        <SheetFooter>
          <Button onClick={onGoToCart}>Go To Cart</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
