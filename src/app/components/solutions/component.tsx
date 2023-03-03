import Content from './content';
import Text from './text';

export default function Solutions(){

  return(

    <section className='
      flex
      justify-center
    '>

      <div className='
        flex flex-col
        gap-14
        px-5 py-14
        max-w-screen-2xl
      '>

        <Text />

        <Content />

      </div>
      
    </section>

  )

}