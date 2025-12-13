'use client';

import DeskTop from '@/components/deskTop/page';
import { useDevice } from '@/lib/useDevice';
import CartPage from './desktop/cart/page';
import Mobile from '@/components/Mobile/page';

export default function Page() {
  const device = useDevice();
  if (device === 'mobile') return <Mobile />;
  return <DeskTop />;
}

