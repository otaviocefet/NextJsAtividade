import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {Header,Loading} from "../components";
import { apiFilme } from "../api/data";
import { IFilme } from "../interfaces/Filme.interface";
import {Table} from "../styles/pages"
import { toast } from "react-toastify";

export default function Id() {
  const [isLoading, setIsLoading] = useState(true);
  const [filmes, setFilmes] = useState<IFilme[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiFilme.show(router.query.id as string);
        if (response.data.length === 0) {
          toast.error("Não existe esse filme neste gênero!");
        }
        setFilmes(response.data);
      } catch (error) {
        toast.error("Ocorreu um erro na chamada do servidor!");
      } finally {
        setIsLoading(false);
      }
    };
    if (router.query.id) {
      fetchData();
    }
  }, [router.query.id]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className="container">
            <Table className="fundos">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                {filmes &&
                  filmes.map((item) => (
                    <tr key={item.id}>
                      <td>{item.nome}</td>
                      <td>{item.descricao}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </>
      )}
    </>
  );
}