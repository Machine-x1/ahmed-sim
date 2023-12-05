/* eslint-disable no-console */
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
