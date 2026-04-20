import { useState } from "react";
import { Shield, CheckCircle2, Smartphone, Zap, Clock, Star, Gift, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatePresence, motion } from "framer-motion";

const mockupImage = "https://i.ibb.co/Sw4D3bGW/Gemini-Generated-Image-6kjak86kjak86kja.png";
const basicCheckout = "https://app.bancobabylon.com/payment/checkout/4e43f606-5dce-4871-9191-36eb6ff9fca5";
const premiumCheckout = "https://app.bancobabylon.com/payment/checkout/8032296c-6214-4c0c-8a1f-082c4d84e58c";
const premiumOfferCheckout = "https://app.bancobabylon.com/payment/checkout/03de95ee-6aa2-4e0c-8f53-a30d8ecc7071";

export default function Home() {
  const [showOffer, setShowOffer] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
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
              +1000 Convites Editáveis no <br className="hidden md:block" />
              <span className="gradient-text">Canva</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-medium">
              Crie Convites Profissionais em Menos de 5 Minutos
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative mx-auto max-w-3xl mb-10"
            >
              <div className="absolute -inset-5 bg-gradient-to-r from-purple-500/20 via-pink-500/10 to-emerald-400/20 blur-2xl rounded-[2rem]" />
              <img
                src={mockupImage}
                alt="Mockup de convites editáveis no Canva"
                className="w-full h-auto rounded-2xl shadow-2xl border border-border/50 relative object-cover max-h-[520px]"
              />
            </motion.div>

            <p className="text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto font-semibold">
              Você só precisa trocar nome, data e pronto.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm md:text-base font-medium text-foreground">
              <div className="flex items-center gap-1.5"><Smartphone className="w-5 h-5 text-primary" /> Pelo celular</div>
              <div className="flex items-center gap-1.5"><Shield className="w-5 h-5 text-primary" /> Sem experiência</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-5 h-5 text-primary" /> Tudo pronto</div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <a href="#oferta" className="w-full max-w-sm">
                <Button size="lg" className="w-full h-16 text-lg bg-secondary hover:bg-secondary/90 text-white font-extrabold shadow-xl pulse-glow rounded-xl">
                  COMEÇAR AGORA
                </Button>
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background overflow-hidden flex items-center justify-center">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="cliente satisfeito" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span>Mais de <strong className="text-foreground">2.000</strong> clientes satisfeitos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sem enrolação: tudo pronto para editar</h2>
            <p className="text-muted-foreground text-lg">Você ganha tempo, economiza dinheiro e entrega convites com aparência profissional.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Não cria do zero</h3>
                <p className="text-muted-foreground">Os modelos já vêm prontos. Você só troca as informações principais e baixa o convite.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Não paga designer</h3>
                <p className="text-muted-foreground">Tenha artes profissionais por um valor baixo e use quantas vezes quiser.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Não instala nada</h3>
                <p className="text-muted-foreground">Funciona direto no Canva, inclusive pelo celular. Simples para qualquer pessoa.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="oferta" className="py-24 px-4 bg-background scroll-mt-16">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Escolha seu acesso</h2>
            <p className="text-xl text-muted-foreground">Acesso imediato após o pagamento.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="relative p-8 border-2 border-border/50 shadow-sm flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Básico</h3>
                <p className="text-muted-foreground mb-4">Para começar agora com acesso rápido.</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold">R$10</span>
                  <span className="text-xl text-muted-foreground">,00</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>+1000 convites</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Acesso imediato</span>
                </li>
              </ul>
              <Button onClick={() => setShowOffer(true)} size="lg" variant="outline" className="w-full h-14 text-lg font-bold border-2 hover:bg-muted">
                QUERO ESSE
              </Button>
            </Card>

            <Card className="relative p-8 border-2 border-primary shadow-2xl flex flex-col bg-primary/5">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                RECOMENDADO
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <p className="text-muted-foreground mb-4">Completo, com bônus para vender mais.</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold">R$19</span>
                  <span className="text-xl text-muted-foreground">,00</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>+1000 convites</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Acesso imediato</span>
                </li>
                <li className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Elementos PNG</span>
                </li>
                <li className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Guia de vendas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>Artes prontas</span>
                </li>
              </ul>
              <a href={premiumCheckout} className="w-full">
                <Button size="lg" className="w-full h-14 text-lg font-extrabold bg-secondary hover:bg-secondary/90 text-white pulse-glow">
                  QUERO COMPLETO
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-12">Quem comprou, recomenda</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-left border-border/50">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-sm text-foreground/80 mb-4 font-medium italic">“Simples e rápido”</p>
              <p className="text-sm font-bold text-muted-foreground">- Mariana S.</p>
            </Card>
            <Card className="p-6 text-left border-border/50">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-sm text-foreground/80 mb-4 font-medium italic">“Usei no mesmo dia”</p>
              <p className="text-sm font-bold text-muted-foreground">- Juliana P.</p>
            </Card>
            <Card className="p-6 text-left border-border/50">
              <div className="flex text-yellow-400 mb-4">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-sm text-foreground/80 mb-4 font-medium italic">“Vale muito pelo preço”</p>
              <p className="text-sm font-bold text-muted-foreground">- Renata C.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-3xl">
          <Card className="p-8 bg-muted/50 border-border text-center flex flex-col items-center mb-16">
            <Shield className="w-16 h-16 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">7 dias de garantia</h3>
            <p className="text-muted-foreground mb-6">
              Se não gostar, devolvemos tudo. Risco zero para você testar.
            </p>
            <a href={premiumCheckout} className="w-full max-w-sm">
              <Button size="lg" className="w-full h-14 text-lg font-bold bg-secondary hover:bg-secondary/90 text-white pulse-glow">
                COMEÇAR AGORA
              </Button>
            </a>
            <p className="text-sm font-bold text-destructive mt-5">Acesso imediato após pagamento</p>
          </Card>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">FAQ rápido</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold text-lg">Precisa saber Canva?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">Não.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold text-lg">Funciona no celular?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">Sim.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-bold text-lg">Recebo quando?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">Na hora.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50">
        <p>© {new Date().getFullYear()} ConvitesFácil. Todos os direitos reservados.</p>
        <p className="mt-2 text-xs opacity-70">Este site não é afiliado ao Canva.</p>
      </footer>

      <AnimatePresence>
        {showOffer && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.22 }}
              className="relative w-full max-w-md rounded-3xl bg-card p-7 shadow-2xl border border-border"
            >
              <button
                type="button"
                onClick={() => setShowOffer(false)}
                className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition"
                aria-label="Fechar oferta"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-extrabold mb-4">
                Oferta especial
              </div>
              <h3 className="text-3xl font-extrabold tracking-tight mb-3">
                Leve o Premium por apenas R$13
              </h3>
              <p className="text-muted-foreground mb-5">
                Antes de finalizar o Básico, aproveite para desbloquear os bônus do Premium pagando só R$3 a mais agora.
              </p>

              <div className="rounded-2xl bg-primary/10 border border-primary/20 p-4 mb-6">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-sm text-muted-foreground line-through">R$19,00</span>
                  <span className="text-4xl font-extrabold text-primary">R$13,00</span>
                </div>
                <ul className="space-y-2 text-sm font-semibold">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" /> +1000 convites</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" /> Elementos PNG</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" /> Guia de vendas</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" /> Artes prontas</li>
                </ul>
              </div>

              <a href={premiumOfferCheckout} className="block w-full mb-3">
                <Button size="lg" className="w-full h-14 text-base font-extrabold bg-secondary hover:bg-secondary/90 text-white pulse-glow">
                  SIM, QUERO PREMIUM POR R$13
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href={basicCheckout} className="block text-center text-sm font-bold text-muted-foreground hover:text-foreground underline underline-offset-4">
                Não, continuar com o Básico por R$10
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
