import { Shield, CheckCircle2, Smartphone, Zap, Clock, Star, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-extrabold text-xl tracking-tight text-primary">
            Convites<span className="text-foreground">Fácil</span>
          </div>
          <a href="#oferta">
            <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-white font-bold pulse-glow">
              QUERO ACESSO
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-hero-pattern">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-primary font-semibold mb-6 border border-primary/10">
              <Zap className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm">Acesso Imediato • +1000 Templates</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              +1000 Convites Editáveis no <br className="hidden md:block"/>
              <span className="gradient-text">Canva</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-medium">
              Crie Convites Profissionais em Menos de 5 Minutos. Você só precisa trocar nome, data e pronto.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm md:text-base font-medium text-foreground">
              <div className="flex items-center gap-1.5"><Smartphone className="w-5 h-5 text-primary" /> Pelo celular</div>
              <div className="flex items-center gap-1.5"><Shield className="w-5 h-5 text-primary" /> Sem experiência</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-5 h-5 text-primary" /> Tudo pronto</div>
            </div>

            <div className="flex flex-col items-center gap-4 mb-16">
              <a href="#oferta" className="w-full max-w-sm">
                <Button size="lg" className="w-full h-16 text-lg bg-secondary hover:bg-secondary/90 text-white font-extrabold shadow-xl pulse-glow rounded-xl">
                  COMEÇAR AGORA
                </Button>
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background overflow-hidden flex items-center justify-center">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span>Mais de <strong className="text-foreground">2.000</strong> clientes satisfeitos</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto max-w-4xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 h-full w-full pointer-events-none" />
            <img 
              src="https://i.ibb.co/Sw4D3bGW/Gemini-Generated-Image-6kjak86kjak86kja.png" 
              alt="Mockup de Convites no Celular" 
              className="w-full h-auto rounded-2xl shadow-2xl border border-border/50 relative z-0 object-cover max-h-[600px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher nosso pacote?</h2>
            <p className="text-muted-foreground text-lg">Tudo foi pensado para facilitar a sua vida e economizar seu tempo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Pronto em Minutos</h3>
                <p className="text-muted-foreground">Não perca horas tentando criar um design do zero. Nossos templates já estão com layout, fontes e cores perfeitas.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Edite pelo Celular</h3>
                <p className="text-muted-foreground">O aplicativo Canva é gratuito e você pode fazer todas as alterações direto do seu smartphone, de onde estiver.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Qualidade Premium</h3>
                <p className="text-muted-foreground">Convites de casamento, aniversário, chá de bebê, formatura e muito mais, todos com design profissional.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="oferta" className="py-24 px-4 bg-background scroll-mt-16">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Escolha seu Pacote</h2>
            <p className="text-xl text-muted-foreground">Acesso vitalício com pagamento único. Sem mensalidades.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <Card className="relative p-8 border-2 border-border/50 shadow-sm flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Pacote Básico</h3>
                <p className="text-muted-foreground mb-4">O essencial para quem quer praticidade.</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold">R$10</span>
                  <span className="text-xl text-muted-foreground">,00</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Acesso a +500 templates base</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Edição via Canva Gratuito</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Acesso Vitalício</span>
                </li>
              </ul>
              <Button size="lg" variant="outline" className="w-full h-14 text-lg font-bold border-2 hover:bg-muted">
                QUERO ESSE
              </Button>
            </Card>

            {/* Premium Plan */}
            <Card className="relative p-8 border-2 border-primary shadow-2xl flex flex-col bg-primary/5">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                MAIS VENDIDO
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Pacote Premium</h3>
                <p className="text-muted-foreground mb-4">A coleção completa com todos os bônus.</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold">R$19</span>
                  <span className="text-xl text-muted-foreground">,00</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Acesso a +1000 templates exclusivos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Edição via Canva Gratuito</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Acesso Vitalício</span>
                </li>
                <li className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>BÔNUS: 50 Fontes Premium</span>
                </li>
                <li className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>BÔNUS: Mini-curso de edição</span>
                </li>
              </ul>
              <Button size="lg" className="w-full h-14 text-lg font-extrabold bg-secondary hover:bg-secondary/90 text-white pulse-glow">
                QUERO COMPLETO
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-12">Quem comprou, recomenda!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-left border-border/50">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-sm text-foreground/80 mb-4 font-medium italic">"Salvou o aniversário do meu filho! Fiz o convite em 5 minutinhos pelo celular enquanto ele dormia. Lindo e fácil."</p>
              <p className="text-sm font-bold text-muted-foreground">- Mariana S.</p>
            </Card>
            <Card className="p-6 text-left border-border/50">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-sm text-foreground/80 mb-4 font-medium italic">"Comprei o pacote premium. Tem tanta opção linda que foi até difícil escolher. Já fiz convite pra família toda!"</p>
              <p className="text-sm font-bold text-muted-foreground">- Juliana P.</p>
            </Card>
            <Card className="p-6 text-left border-border/50">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-sm text-foreground/80 mb-4 font-medium italic">"Muito barato pro tanto de coisa que vem. Sou péssima com design mas com esses modelos ficou super profissional."</p>
              <p className="text-sm font-bold text-muted-foreground">- Renata C.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ & Guarantee */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
          </div>
          <Accordion type="single" collapsible className="w-full mb-16">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold text-lg">Preciso pagar o Canva Pro?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Não! Todos os nossos convites foram criados com elementos gratuitos do Canva. Você não precisa pagar nenhuma mensalidade extra.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold text-lg">Como vou receber o acesso?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Assim que o pagamento for confirmado, você receberá um e-mail com o link imediato para acessar todos os templates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-bold text-lg">Por quanto tempo tenho acesso?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                O acesso é vitalício. Você paga apenas uma vez e pode usar para sempre!
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Card className="p-8 bg-muted/50 border-border text-center flex flex-col items-center">
            <Shield className="w-16 h-16 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Garantia de 7 Dias</h3>
            <p className="text-muted-foreground mb-6">
              Temos tanta certeza que você vai amar que oferecemos garantia incondicional de 7 dias. Se não gostar, devolvemos 100% do seu dinheiro. Sem burocracia.
            </p>
            <a href="#oferta" className="w-full max-w-sm">
              <Button size="lg" className="w-full h-14 text-lg font-bold bg-secondary hover:bg-secondary/90 text-white pulse-glow">
                QUERO ACESSO AGORA
              </Button>
            </a>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50">
        <p>© {new Date().getFullYear()} ConvitesFácil. Todos os direitos reservados.</p>
        <p className="mt-2 text-xs opacity-70">Este site não é afiliado ao Canva.</p>
      </footer>
    </div>
  );
}
