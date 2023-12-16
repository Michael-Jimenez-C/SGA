import hedr from './header'
export default function home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-r from-cyan-300 to-blue-500">
    {hedr()}
    </main>
  )
}
