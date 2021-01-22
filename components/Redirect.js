import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();

  return <span onClick={() => router.push('/about2')}>Click me</span>;
}
