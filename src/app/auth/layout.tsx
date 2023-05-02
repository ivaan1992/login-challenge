import '@/styles/main.scss';

export const metadata = {
    title: 'Login challenge',
    description: 'Small challenge to showcase my coding skills',
}

export default function AuthLayout({
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
