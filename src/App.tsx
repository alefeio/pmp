import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './globalStyles';
import guaranteeImage from './assets/garantia-de-30-dias-ou-seu-dinheiro-de-volta-copy.png';
import ebookCoverImage from './assets/sexo-casal.webp';
import Countdown from './CountDown';

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 2rem;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
`;

const Image = styled.img<{ largura: string; }>`
  width: ${props => props.largura}px;
  margin: 1rem 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Content = styled.section`
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  margin-bottom: 2rem;
  text-align: center;
`;

const SectionTitle = styled.h3`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin: auto;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
  text-align: center;
`;

const CTAButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.25rem;
  color: white;
  background-color: ${({ theme }) => theme.colors.accent};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const PriceSection = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 8px;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
`;

const PriceTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Price = styled.p`
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Discount = styled.p`
  font-size: 1.25rem;
  text-decoration: line-through;
  margin-bottom: 0.5rem;
`;

const OfferDetails = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Footer = styled.footer`
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

// Meta Tags for SEO
const Head: React.FC = () => (
  <>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Transforme sua vida com nosso eBook sobre exercícios para fortalecer o músculo pubococcígeo (PC). Melhore sua saúde sexual e geral agora!" />
    <meta name="keywords" content="exercícios músculo PC, saúde sexual, controle ejaculação, ereção forte, ebook saúde" />
    <meta property="og:title" content="Transforme Sua Vida com Nosso eBook sobre o Músculo PC" />
    <meta property="og:description" content="Descubra como fortalecer o músculo pubococcígeo e melhorar sua vida sexual e saúde geral com nosso eBook completo e comprovado." />
    <meta property="og:image" content="https://example.com/ebook-cover.jpg" />
    <meta property="og:url" content="https://example.com" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Transforme Sua Vida com Nosso eBook sobre o Músculo PC" />
    <meta name="twitter:description" content="Descubra como fortalecer o músculo pubococcígeo e melhorar sua vida sexual e saúde geral com nosso eBook completo e comprovado." />
    <meta name="twitter:image" content="https://example.com/ebook-cover.jpg" />
    <title>Transforme Sua Vida com Nosso eBook sobre o Músculo PC</title>
  </>
);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head />
      <Container>
        <Header>
          <Title>PerformanceMaxPro</Title>
          <Subtitle>Transforme sua vida e alcance o máximo desempenho</Subtitle>
          <Image src={ebookCoverImage} alt="Capa do Ebook PerformanceMaxPro" largura={800} />
        </Header>

        <Content>
          <SectionTitle>Bem-vindo ao PerformanceMaxPro</SectionTitle>
          <Paragraph>
            Quero começar compartilhando uma história pessoal, pois acredito que muitos de vocês
            poderão se identificar. Houve um tempo em minha vida em que a ejaculação precoce e a
            impotência sexual eram problemas constantes. Era frustrante não conseguir esperar minha
            parceira chegar ao orgasmo e, pior ainda, passar vergonha com impotência repentina no
            meio da relação.
          </Paragraph>
          <Paragraph>
            Esses problemas não afetavam apenas minha vida sexual, mas também minavam minha
            confiança e auto-estima. Sentia-me impotente e envergonhado, o que criava um ciclo
            vicioso de ansiedade e desempenho ainda pior.
          </Paragraph>
          <Paragraph>
            Foi então que descobri os exercícios para o músculo PC. No início, estava cético,
            duvidando que algo tão simples pudesse trazer mudanças significativas. Mas, com a
            prática constante e determinação, comecei a notar uma transformação. Gradualmente, fui
            ganhando mais controle sobre minhas ejaculações. Minhas ereções tornaram-se mais fortes
            e duradouras. E, o mais importante, comecei a reconquistar minha confiança e sentir-me
            mais seguro de mim mesmo.
          </Paragraph>
          <Paragraph>
            Imagine como é maravilhoso poder durar o tempo que quiser, ver sua parceira ter inúmeros
            orgasmos, e ainda permanecer ereto depois de chegar lá. A beleza desses exercícios é a
            sua conveniência. Você pode praticá-los em qualquer lugar – no carro, no trabalho ou em
            casa. Ninguém perceberá, e você estará investindo na sua saúde e bem-estar enquanto
            realiza outras atividades do seu dia a dia. É um investimento pequeno com um retorno
            enorme.
          </Paragraph>
        </Content>

        <Content>
          <SectionTitle>Benefícios dos Exercícios para o Músculo PC</SectionTitle>
          <Paragraph>
            <strong>Melhor Desempenho Sexual:</strong> Fortalecer o músculo PC pode revolucionar sua
            vida sexual. Imagine ter o controle total sobre sua ejaculação, permitindo uma relação
            sexual mais prolongada e satisfatória. Não é apenas uma questão de durar mais tempo, mas
            de aumentar o prazer para você e sua parceira.
          </Paragraph>
          <Paragraph>
            <strong>Combate à Impotência:</strong> A disfunção erétil pode ser um problema
            devastador, afetando homens de todas as idades. Os exercícios do músculo PC são uma
            ferramenta poderosa na prevenção deste problema, ajudando a manter sua função erétil
            saudável. Se você já está enfrentando problemas de impotência, não perca a esperança. Os
            exercícios para o músculo PC podem ser uma parte vital da sua recuperação, ajudando a
            restaurar sua capacidade e confiança sexual.
          </Paragraph>
          <Paragraph>
            <strong>Saúde da Próstata:</strong> Estudos indicam que fortalecer o músculo PC pode
            auxiliar na prevenção do aumento da próstata, ajudando a manter a saúde masculina em
            geral.
          </Paragraph>
          <Paragraph>
            <strong>Benefícios para a Saúde Geral:</strong> Fortalecer o músculo PC não só melhora a
            vida sexual, mas também contribui para a saúde geral. Isso inclui o controle da bexiga,
            ajudando a evitar e tratar a incontinência urinária, e a saúde intestinal, auxiliando no
            controle da incontinência fecal. Um músculo PC forte é um pilar essencial para uma vida
            saudável e confiante.
          </Paragraph>
        </Content>

        <Content>
          <SectionTitle>Testemunhos</SectionTitle>
          <Testimonial>
            <TestimonialText>
              "Após começar a prática dos exercícios do PerformanceMaxPro, minha confiança voltou.
              Minha esposa notou a diferença imediatamente e nossa vida sexual nunca foi tão boa."
              <br />- João S.
            </TestimonialText>
          </Testimonial>
          <Testimonial>
            <TestimonialText>
              "Eu estava muito cético no início, mas os resultados falam por si. Antes, eu lutava contra a ejaculação precoce e isso afetava muito minha autoestima. Depois de algumas semanas praticando os exercícios do PerformanceMaxPro, comecei a perceber uma grande diferença. Minha confiança aumentou e agora posso durar o tempo que quiser, garantindo que minha parceira chegue ao orgasmo toda vez. Sinto-me mais viril e no controle do meu próprio corpo. Esse eBook mudou minha vida!"
              <br />- Alexandre M.
            </TestimonialText>
          </Testimonial>
          <Testimonial>
            <TestimonialText>
              "Aos 45 anos, comecei a ter dificuldades para manter uma ereção e isso estava me deixando muito inseguro. O PerformanceMaxPro foi um divisor de águas para mim. Os exercícios são simples, mas extremamente eficazes. Hoje, não só consigo manter uma ereção por mais tempo, como também sinto que minha saúde sexual está melhor do que nunca. Minha esposa percebeu a diferença e nosso relacionamento melhorou muito. Recomendo a todos que estão enfrentando problemas semelhantes!"
              <br />- Ricardo L.
            </TestimonialText>
          </Testimonial>
          <Testimonial>
            <TestimonialText>
              "Eu estava desesperado com minha situação, mas esses exercícios mudaram tudo para
              mim. Agora me sinto mais homem do que nunca!"
              <br />- Carlos A.
            </TestimonialText>
          </Testimonial>
          <Testimonial>
            <TestimonialText>
              "Nunca imaginei que algo tão simples como os exercícios do músculo PC pudesse ter um impacto tão grande. Eu estava começando a sofrer com disfunção erétil e estava desesperado por uma solução que não envolvesse medicamentos. O PerformanceMaxPro foi a resposta que eu precisava. Hoje, tenho ereções mais fortes e consigo controlar minha ejaculação como nunca antes. Minha vida sexual está incrível e, o melhor de tudo, minha autoestima está no topo!"
              <br />- Marcos S.
            </TestimonialText>
          </Testimonial>
        </Content>

        <Content>
          <SectionTitle>Garantia e Segurança</SectionTitle>
          <Image src={guaranteeImage} alt="Garantia de satisfação" largura={300} />
          <Paragraph>
            Estamos tão confiantes na eficácia do <strong>PerformanceMaxPro</strong> que oferecemos
            uma garantia incondicional de 30 dias. Se você não estiver completamente satisfeito com
            os resultados, devolvemos seu dinheiro sem perguntas. Você não tem nada a perder e tudo a ganhar. Sua segurança e satisfação são nossas prioridades, e garantimos que você estará investindo em um produto que realmente faz a diferença.

          </Paragraph>
        </Content>

        <PriceSection>
          <PriceTitle>Preço e Oferta Especial</PriceTitle>
          <Discount>De: R$ 199,90</Discount>
          <Price>Por: R$ 97,00</Price>
          <OfferDetails>
            Aproveite esta oferta por tempo limitado! Garanta seu exemplar do <strong>PerformanceMaxPro</strong> por um preço especial e comece a transformar sua vida hoje mesmo. Além disso, ao adquirir agora, você receberá um bônus exclusivo: um guia rápido com dicas para maximizar os resultados dos exercícios.
          </OfferDetails>
          <CTAButton>Quero Transformar Minha Vida Agora</CTAButton>
        </PriceSection>

        <SectionTitle>Aproveite Agora: Sua Oferta Exclusiva Termina em:</SectionTitle>
        <Countdown />

        <Content>
          <SectionTitle>Não Perca Esta Oportunidade de Transformar Sua Vida!</SectionTitle>
          <Paragraph>
            Você está a um passo de revolucionar sua vida sexual e melhorar sua saúde de maneira significativa. Imagine o quanto sua confiança, auto-estima e relacionamentos podem melhorar com o controle total sobre seu desempenho. Não deixe essa oportunidade passar. Faça um pequeno investimento em si mesmo e colha os frutos para o resto da vida. Lembre-se, sua satisfação é garantida.
          </Paragraph>
          <CTAButton>Compre Agora e Comece a Transformação</CTAButton>
        </Content>

        <Footer>
          &copy; 2024 PerformanceMaxPro. Todos os direitos reservados.
        </Footer>
      </Container>
    </ThemeProvider>
  );
};

export default App;
