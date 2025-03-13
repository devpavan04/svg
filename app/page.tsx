import Box from '@/app/components/box';

export default function Home() {
  return (
    <main className="mx-auto max-w-xl flex flex-col gap-8 py-4">
      <h1 className="text-6xl font-[family-name:var(--font-instrument-serif)] text-center">
        testing
        <span className="text-4xl italic"> SVGs</span>
      </h1>
      <Box />
    </main>
  );
}
