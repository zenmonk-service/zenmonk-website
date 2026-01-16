import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zenmonk | Technology Center',
  description: 'We are a leading technology company specializing in software development, IT training, and product development.',
}

export default function RouteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
    </>
  )
}
