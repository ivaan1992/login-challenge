import '@/styles/main.scss';

export const metadata = {
    title: 'Home page',
    description: 'Small challenge to showcase my coding skills',
}

export default function UserLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            {children}
        </main>
    )
}
