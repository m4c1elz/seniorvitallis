import { Outlet } from "react-router-dom"

export default function AuthLayout() {
    return (
        <main className="mt-12 flex flex-col items-center gap-24">
            <img src="login-img.png" alt="Logo SêniorVitallis" />
            <Outlet />
            <footer className="absolute bottom-0 w-screen border-t border-black/50 py-4 text-center">
                <p className="text-black/50">Seleniors © 2024</p>
            </footer>
        </main>
    )
}
