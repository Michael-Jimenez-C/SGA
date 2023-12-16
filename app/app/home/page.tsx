import hedr from './header'
export default function home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-r from-cyan-300 to-blue-500">
    {hedr()}
    <div className="flex w-full">
      <div className="min-h-screen w-96"></div>
      <div className="min-h-screen w-full"></div>
    </div>
    </main>
  )
}
