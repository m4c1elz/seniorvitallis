import { Button } from "@/components/ui/button"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/providers/auth-provider"
import { Link } from "@/router"
import { useForm } from "react-hook-form"
import { LoginRequest } from "./types"

export default function Login() {
    const { loginMutation } = useAuth()
    const { register, handleSubmit } = useForm<LoginRequest>()

    const { isPending, isSuccess } = loginMutation

    async function onSubmit({ email, password }: LoginRequest) {
        await loginMutation.mutateAsync({ email, password })
    }

    return (
        <Card className="w-[350px] bg-primary">
            <CardHeader className="text-center">
                <CardTitle className="font-bold">Login</CardTitle>
                <CardDescription>Entre com seu usuário.</CardDescription>
            </CardHeader>
            <CardContent>
                <form
                    className="space-y-4"
                    id="login-form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="space-y-2.5">
                        <Label>E-mail</Label>
                        <Input
                            type="email"
                            placeholder="milaelipe.maciel@gmail.com"
                            {...register("email")}
                        />
                    </div>
                    <div className="space-y-2.5">
                        <Label>Senha</Label>
                        <Input
                            type="password"
                            placeholder="senha123"
                            {...register("password")}
                        />
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex flex-col gap-2.5 justify-center">
                <Button type="submit" form="login-form" disabled={isPending}>
                    Enviar
                </Button>
                <p className="text-sm">
                    Não possui conta?{" "}
                    <Link to="/login" className="text-accent underline">
                        Cadastre-se
                    </Link>
                </p>
            </CardFooter>
        </Card>
    )
}
