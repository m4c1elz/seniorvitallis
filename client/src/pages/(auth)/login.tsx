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

export default function Login() {
    return (
        <Card className="w-[350px] bg-primary">
            <CardHeader className="text-center">
                <CardTitle className="font-bold">Login</CardTitle>
                <CardDescription>Entre com seu usuário.</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-4">
                    <div className="space-y-2.5">
                        <Label>E-mail</Label>
                        <Input
                            type="email"
                            placeholder="milaelipe.maciel@gmail.com"
                        />
                    </div>
                    <div className="space-y-2.5">
                        <Label>Senha</Label>
                        <Input type="password" placeholder="senha123" />
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button type="submit">Enviar</Button>
            </CardFooter>
        </Card>
    )
}
