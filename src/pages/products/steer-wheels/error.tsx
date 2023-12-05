/* eslint-disable no-console */

'use client';

// Error components must be Client Components

import { Button } from '@nextui-org/react';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <h2>Something went wrong!</h2>
      <Button className="flex " radius="lg" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
