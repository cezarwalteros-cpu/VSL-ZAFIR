import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-2">
            Fórmula Natural para Hombres
          </CardTitle>
          <CardDescription className="text-lg">
            Resultados Garantizados - Envío Discreto a toda Colombia
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <p className="text-2xl font-semibold text-blue-900 mb-2">
              ¡Bienvenido!
            </p>
            <p className="text-blue-700">
              Tu aplicación está lista y funcionando correctamente.
            </p>
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="w-full max-w-md">
              Comenzar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
