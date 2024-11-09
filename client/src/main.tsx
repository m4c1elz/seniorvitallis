import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Routes } from "@generouted/react-router"
import { AuthProvider } from "./providers/auth-provider"
import { queryClient } from "@/lib/react-query"
import "./globals.css"
import { QueryClientProvider } from "@tanstack/react-query"

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </QueryClientProvider>
    </StrictMode>,
)
