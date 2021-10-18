import { ReactElement } from 'react';
import './Pad.css' ;
// definindo o tipo do props
type PadProps = {
  children: ReactElement | ReactElement[],
  title?: string,
}


function Pad(props: PadProps){
  console.log();
  if (!props.children){
    throw new Error("Manda o chrildren!");
  }
  
  return(
    <div className = "Pad">
      
      {props.children}

    </div>
  );
}

export default Pad;