import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaHome } from "react-icons/fa";
import { apiGenero } from "../../api/data";
import { IGenero } from "../../interfaces/Genero.interface";
import { Link } from "../../styles";
import { Container } from "./styles";

const Header = () => {
  const router = useRouter();
  const [generos, setGeneros] = useState<IGenero[]>([]);

  
  useEffect(() => {
    const fetchData = async () => {
      const response = await apiGenero.index();
      setGeneros(response.data);
    };
    fetchData();
  }, []);


  return (
    <Container>
      <div className="container">
        <FaHome onClick={() => router.push("/")} />
        {generos &&
          generos.map((item) => (
            <Link key={item.id} href={`/${item.id}`}>
              {item.tipo}
            </Link>
          ))}
      </div>
    </Container>
  );
};

export default Header;