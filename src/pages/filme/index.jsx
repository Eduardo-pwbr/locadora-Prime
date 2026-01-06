import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import api from "../../services/api"
import "../../pages/filme/filme-info.css"
import {toast} from 'react-toastify';


export default function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState([]);
  const [loadim, setlodim] = useState(true);


  useEffect(() => {
    async function loadFilmes() {
    
      await api.get(`/movie/${id}`, {
          params: {
            api_key: "b0a0c8bfa3379431090ea52c3bb2110e",
            language: "pt-BR",
            page: 1,
          },
        })
        .then((response) => {
         // console.log(response.data);
          setFilme(response.data)
          setlodim(false);
        })
        .catch(() => {
          console.log("Filme não encontrado");
          navigate("/", { replace: true }); //redireciona para home replace substitui a rota atual
        });
    }
    loadFilmes();

    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  if (loadim) {
    return (
      <div className="filme-info">
        <h1>Carregando detalhe filme</h1>
      </div>
    );
  }

  function salvarFilme(){
    
    const minhalista = localStorage.getItem("@primeflix");//busca a lista de filmes salvos
    let filmesSalvaos = JSON.parse(minhalista) || []; //se tiver algo na lista converte para objeto senao cria uma lista vazia

    const hasFilme = filmesSalvaos.some( (filmesSalvo) => filmesSalvo.id === filme.id ); //verifica se o filme ja existe na lista

    if(hasFilme){
      //alert("Esse filme já está na sua lista!");
      toast.warn("Esse filme já está na sua lista!");
    
      return;
    } 
    filmesSalvaos.push(filme);//adiciona o filme na lista
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvaos)); //
    //alert("Filme salvo com sucesso!");
    toast.success("Filme salvo com sucesso!");
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={'filme.title'}/>
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      
      <strong>Avalição:{filme.vote_average} /10</strong>

      <div className="area-button">
        <button onClick={salvarFilme}>Salvar</button>
          <button>
        <a target="blank" rel="externa"  href={`https://www.youtube.com/results?search_query=${filme.title} Trailer`}
        >
         
          Trailer
        </a>  
       
      </button>
      </div>
    </div>
  );
}
