import { Outlet } from "react-router-dom"

export default function AuthLayout() {
    return (
        <main className="flex flex-col gap-24 mt-12 items-center">
            <img src="login-img.png" alt="Logo SêniorVitallis" />
            <Outlet />
            <footer className="text-center absolute bottom-0 py-4 w-screen border-t border-black/50">
                <p className="text-black/50">Seleniors © 2024</p>
            </footer>
        </main>
    )
}
