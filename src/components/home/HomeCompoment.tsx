import Result, { Pokemon } from '../results/result/Result';
import { Search } from '../search/Search';
import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import Head from 'next/head';
import NotFound from '@/components/not-found/NotFound';
import styles from './HomeCompoment.module.css';
import pokemonQuery from '../../lib/api/queries/pokemonQuery.graphql';

export interface IHomeCompoment {}

const HomeCompoment: React.FC<IHomeCompoment> = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon | boolean>(false);
  const [searchText, setSearchText] = useState('');
  const [doSearch, { data, loading }] = useLazyQuery(pokemonQuery);

  // Handle search pokemon
  const handleSearch = () => {
    doSearch({ variables: { name: searchText.trim() } });
  };

  // Handle link click
  const handleLinkClick = (value: string) => {
    doSearch({
      variables: { name: value.trim() },
      onCompleted: () => {
        setSearchText(value.trim());
      },
    });
  };

  // Update pokemon data, if query success
  useEffect(() => {
    if (data) setPokemonData(data.pokemon);
  }, [data, pokemonData]);

  return (
    <>
      <Head>
        <title>Search Pokemon</title>
      </Head>
      <Search
        placeHolder="Enter pokemon name..."
        searchText={searchText}
        handleSearch={handleSearch}
        setSearchText={setSearchText}
      />
      {loading && <p>Searching....</p>}
      {pokemonData != false ? (
        pokemonData != null ? (
          <Result pokemon={pokemonData} handleLinkClick={handleLinkClick} />
        ) : (
          <NotFound />
        )
      ) : (
        <h1 className={styles.greeting__text}>- Welcome to Search Pokemon -</h1>
      )}
    </>
  );
};

export default HomeCompoment;
