import { NavProductos } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <NavProductos/>
        {children}
    </>
  )
}
