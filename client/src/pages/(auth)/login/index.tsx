import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CommonLoginForm } from "./_partials/common-login-form"
import { ProfessionalLoginForm } from "./_partials/professional-login-form"

export default function Login() {
    return (
        <Tabs defaultValue="common">
            <TabsList className="w-[350px]">
                <TabsTrigger value="common" className="bg-primary flex-1">
                    Comum
                </TabsTrigger>
                <TabsTrigger value="professional" className="bg-primary flex-1">
                    Profissional
                </TabsTrigger>
            </TabsList>
            <TabsContent value="common">
                <CommonLoginForm />
            </TabsContent>
            <TabsContent value="professional">
                <ProfessionalLoginForm />
            </TabsContent>
        </Tabs>
    )
}
