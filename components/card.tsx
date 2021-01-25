import { useEffect, useState } from 'react'
import { 
  MainContainer, 
  Title,Presentation ,
  PokemonContainer,
  ImageContainer,
  BoxContainer,
  BoxType,
  AtributesContainer,
  Atributes,
  DobleContainer,
  EvolutionContainer,
  Content,
  Description,
  SwitchTheme,
} from '../styles/components/card'
import Image from 'next/image'
import axios from 'axios'
import TagType from './tagType'
import Pokedex from 'pokedex-promise-v2'
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';

interface PokemonApiResponse {
  id:number
  name:string
  weight:number
  height:number
  stats:[{
    base_stat:number
    stat:{
      name:string
    }
  }]
  sprites: {
    front_default:string
   }
  types: [{
      type:{
        name:string
      }
    }
  ]    
}

interface EvolutionsProps {
  species:{
    name: string
    url: string
  }
  evolves_to:[{
    species:{
      name: string
      url: string
    }
  }]
}
export default function pokemon () {
  const [pokemon, setPokemon] = useState<PokemonApiResponse>({} as PokemonApiResponse)
  const [loading, setLoading] = useState(false)
  const [evolutions, setEvolutions] = useState<EvolutionsProps[]>([])
  useEffect(() => {
    setLoading(true)
    const response = async() => {
      const res =  await axios.get(`https://pokeapi.co/api/v2/pokemon/1/`) 
      setPokemon(res.data)
    }
    response()
    setLoading(false)
  },[])

  const P = new Pokedex()
  useEffect(()=>{
    P.getEvolutionChainById(1)
    .then(function(response) {
      setEvolutions(response.chain.evolves_to);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
  },[])

  return (
    <MainContainer>
      {!loading && pokemon.name && evolutions[0] &&
      <PokemonContainer>
        <Title>
          <div>
            #001 - {pokemon.name}
            <img 
              src={pokemon.sprites.front_default}
              alt="bulbasaur"
              width={120}
              height={120}
            />
          </div>
          
          <div>
            <WbSunnyOutlinedIcon
            />
            <SwitchTheme>
              <input type="checkbox" />
              <span></span>
            </SwitchTheme>
            <Brightness2OutlinedIcon 
              style={{
                transform: 'rotate(45deg)'
              }}
            />
          </div>
        </Title>    
        <Presentation>
          <div>
            <BoxContainer>
              <ImageContainer>
              <Image 
                src="/bulbasaur.png"
                alt="bulbasaur"
                width={380}
                height={380}
              />
              </ImageContainer>
            </BoxContainer>
            <BoxContainer>
              <BoxType>
                <strong>Type</strong> 
                <TagType color="#78C850">
                  grass
                </TagType>
                <TagType color="#A040A0">
                  poison
                </TagType>
              </BoxType>
            </BoxContainer>
            <DobleContainer>
              <BoxContainer>
                <strong>Height :</strong> 2`04" / {(pokemon.height /10).toFixed(1)} m
              </BoxContainer>         
              <BoxContainer>
                <strong>Weight :</strong>{(pokemon.weight / 10 * 2.20462).toFixed(1)}lbs. / {(pokemon.weight / 10).toFixed(1)}kg
              </BoxContainer>
            </DobleContainer>
            <BoxContainer>
              <Content>
                <AtributesContainer>
                  <strong>Atributes</strong>
                  <Atributes>             
                    <TagType color="#FF5959">
                      45 HP
                    </TagType>
                    <TagType color="#FC759E">
                      45 SPEED
                    </TagType>
                    <TagType color="#EF995B">
                      49 ATK
                    </TagType>
                    <TagType color="#F5C918"> 
                      49 DEF
                    </TagType>
                    <TagType color="#3D6EE6">
                      65 SP.ATK
                    </TagType>
                    <TagType color="#7FC75C">
                      65 SP.DEF
                    </TagType>
                  </Atributes>
                </AtributesContainer>
              </Content>
            </BoxContainer>
          </div>
          <div>
            <BoxContainer>
              <EvolutionContainer>
              <strong>Evolution</strong>
                            
                {evolutions?.map(e =>(
                  <div key={e.species.name}>
                    <img 
                    src="/bulbasaurev1.png"
                    alt="e.species.name"
                    width={120}
                    height={100}
                    
                  />
                  <span >{e.species.name}</span>
                  </div>
                ))}
                  {evolutions[0].evolves_to?.map(e =>(
                    <div key={e.species.name}>
                      <img 
                        src="/bulbasaurev2.png"
                        alt="e.species.name"
                        width={120}
                        height={100}
                      />
                      <span >{e.species.name}</span>
                    </div>
                  ))}
              </EvolutionContainer>
            </BoxContainer>
            <BoxContainer>
              <Description>
                <p>
                  Bulbasaur is a small, quadruped Pokémon that has blue-green skin with
                  darker patches, It has red eyes with white pupils, pointed, ear-like structures
                  on top Of its head, and a short, blunt snout with a wide mouth. A pair Of
                  small, pointed teeth are visible in the upper Jaw when its mouth is open.
                  Each of its thick legs ends with three sharp claws. On its back is a green
                  plant bulb, which is grown from a seed planted there at birth. The bulb
                  provides it with energy through photosynthesis as well as from the nutrient-
                  rich seeds contained within.
                </p>
                <p>
                  As mentioned in the anime, starter Pokémon are raised by Breeders to be
                  distributed to new Trainers. Having been domesticated from birth, Bulbasaur
                  is regarded as both a rare and well-behaved Pokémon. It is known to be
                  extremely loyal, even after long-term abandonment. Bulbasaur has also
                  shown itself to be an excellent caretaker, even having a special technique
                  called the "'Bulba-by.•• To perform this technique, Bulbasaur uses its vines to
                  pick up a young Pokémon and soothingly rocks it in the air.
                </p>
                <p>
                  It is found in grasslands and forests throughout the Kanto region. However,
                  due to Bulbasaur's status as starter Pokémon, it is hard to come by in the
                </p>
              </Description>
            </BoxContainer>
          </div>
        </Presentation>
      </PokemonContainer>
      }
    </MainContainer>
  )
}