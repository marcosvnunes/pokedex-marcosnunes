import {
  SidebarContainer,
  MenuContainer,
  FormSearch,
  FormContainer,
  Container,
  LogoContainer,
  InputContainer
} from '../styles/pages/Dashboard'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Pokemon from '../components/card'
import { useRouter } from 'next/router';

interface PokemonProps {
  id:string
  name:string
  position:string
  slug:string
}

export default function Dashboad() {
  const route = useRouter()
  const [pokemons, setPokemons] = useState<PokemonProps[]>([])
  const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }`;

  const gqlVariables = {
    limit: 50,
    offset: 0,
  };

  const capitalize = (str:string) => {
    return str.charAt(0).toUpperCase() + str.substr(1);
  }

  useEffect(()=> {
    fetch('https://graphql-pokeapi.vercel.app/api/graphql', {
    credentials: 'omit',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: gqlQuery,
      variables: gqlVariables,
    }),
    method: 'POST',
  })
    .then((res) => res.json())
    .then((res) => {
      const result = res.data.pokemons.results.map((pokemon,index)=> {
       const newindex = ("000" + (index+1)).slice(-3);
       return  {
          name: pokemon.name,
          slug: capitalize(pokemon.name),
          position: "#"+newindex,
          id: index
        }
      })
      setPokemons(result)
    });
  },[])
  return (
  <Container>
    <SidebarContainer>
      <LogoContainer>
        <Image 
          src="/logo-pokedex.png"
          alt="logo pokedex"
          width={280}
          height={60}
          quality={100}
        />
        <p>
          {route.query.dashboard}
        Everything you wanted to know about
         your favorite pocket monsters!
        </p>
      </LogoContainer>

      <FormContainer>
      <FormSearch>
        <InputContainer>
          <input type="text" placeholder="Search by name or number" />
          <div>
            <Image 
                src="/search2.png"
                alt="search"
                width={18}
                height={18} 
            />
          </div>
        </InputContainer>
      </FormSearch>
      </FormContainer>
      <MenuContainer >
        {pokemons.map(pokemon => (
          <li key={pokemon.id}>{pokemon.position} - {pokemon.slug}</li>
        ))}
      </MenuContainer>
    </SidebarContainer>
    <Pokemon />
  </Container>
  )
}