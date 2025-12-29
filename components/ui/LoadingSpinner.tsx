'use client';

import { Icon } from '@iconify/react';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-20">
      <Icon
        icon="eos-icons:loading"
        className="text-6xl text-[var(--color-neon-pink)] animate-spin"
      />
    </div>
  );
}
