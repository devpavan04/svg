export default function Wrapper({ children, name }: { children: React.ReactNode; name?: string }) {
  return (
    <div className="flex flex-col gap-1">
      {children}
      {name && <p className="text-base text-gray-600 text-center">{name}</p>}
    </div>
  );
}
