export default function Content(){

  return(

    <div className='
      grid grid-row-3 xl:grid-cols-3
      gap-5
    '>

      <div className='
        flex flex-col
        justify-between
        gap-7
        p-7 xl:p-14
        bg-white
      '>

        <h3 className='
          text-[#0C92F2]
        '>Empréstimo consignado</h3>

        <h5>
          Tenha o recurso financeiro necessário para realizar seus projetos, 
          quitar suas dívidas ou antecipar seus objetivos, pagando taxas absurdamente baixas. 
          Com total segurança e confiabilidade, você consegue o seu crédito consignado 
          e tem ele descontado diretamente do salário ou de sua aposentadoria.
        </h5>

        <a className='
          text-[#004CF2]
          font-medium
          underline
          text-shadow-none
        ' href="/">Quero simular um empréstimo, sem compromisso.</a>

      </div>

      <div className='
        flex flex-col
        justify-between
        gap-7
        p-7 xl:p-14
        bg-[#0C92F2]
      '>

        <h3 className='
          text-white
        '>Programa Saúde Financeira</h3>

        <h5 className='
          text-white
        '>
          O programa Saúde Financeira é um benefício exclusivo aos clientes Innova. 
          O método foi criado para que você seja dono do seu dinheiro e nunca mais seja 
          escravo dele. Com aulas ao vivo online e material de apoio e ferramentas que 
          ajudarão você a ter total controle de suas finanças e nunca mais se endividar.
        </h5>

        <a className='
          text-white
          font-medium
          underline
          text-shadow-none
        ' href="/">Quero participar!</a>

      </div>

      <div className='
        flex flex-col
        justify-between
        gap-7
        p-7 xl:p-14
        bg-white
      '>

        <h3 className='
          text-[#0C92F2]
        '>Portal de conteúdo gratuito</h3>

        <h5>
          Nós publicamos artigos semanalmente no blog para que você tenha 
          acesso ao conhecimento sobre finanças que não foi ensinado na escola. 
          Tudo isso é para que você tenha autonomia e controle sobre suas finanças 
          e construa uma mentalidade correta para ter um Ganho Bom investindo de forma segura 
          e empreendendo.
        </h5>

        <a className='
          text-[#004CF2]
          font-medium
          underline
          text-shadow-none
        ' href="/">Acessar conteúdos do blog.</a>

      </div>

    </div>

  )

}