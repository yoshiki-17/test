import { GetServerSideProps } from 'next';
import { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Loader } from 'semantic-ui-react';

interface SerchCatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

interface IndexPegeProps {
  initilCatImageUrl: string;
}

const fetchCatImage = async () :Promise<SerchCatImage> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const result = await res.json();
  //console.log(result[0]);
  return result[0];
};



export default function Home(initilCatImageUrl: string)  {
  const [catImageUrl,setCatImageUrl] = useState(initilCatImageUrl);
  const [isLoading,setIsLoading] = useState(false);

  const handleClick = async () =>{
    setIsLoading(true);
    const catImage = await fetchCatImage();
    setCatImageUrl(catImage.url);
    setIsLoading(false);
  };

  return (
    <div style ={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      height :"100vh",
    }}>
      <h1>猫画像アプリ</h1>
      {isLoading ? <Loader active/>: <img src={catImageUrl}width={500} height="auto"/>}  
      <button style={{marginTop: 18 }} onClick = {handleClick}>
        今日の猫さん
      </button>

    </div>
  )
};

export const getSeverSideProps: GetServerSideProps<
  IndexPegeProps
  > = async () =>{
    const catImage= await fetchCatImage();
    return {
      props:{
        initilCatImageUrl: catImage.url,
      }
    }
  };