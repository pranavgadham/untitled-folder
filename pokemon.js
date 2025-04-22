import axios from "axios";

const fetchPokemonDetails = async () => {
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");
        const results = response.data.results;
        console.log(results);
        return results;
    } catch (error) {
        console.error("Error fetching Pokemon details:", error);
    }
};

const fetchPokemonHeights = async () => {
    try {
        const result = await fetchPokemonDetails();

        const pokemonHeights = await Promise.all(
            result.map(async (item) => {
                try {
                    const response = await axios.get(item.url);
                    const height = response.data.height;
                    console.log(height);
                    return height;
                } catch (error) {
                    console.error("Error fetching Pokemon height:", error);
                    return 0;
                }
            })
        );

        return pokemonHeights;
    } catch (error) {
        console.error("Error fetching Pokemon heights:", error);
    }
};

const getMax = (pokemonHeights) => {
    const maxHeight = Math.max(...pokemonHeights);
    return maxHeight;
};

const main = async () => {
    const pokemonHeights = await fetchPokemonHeights();
    const maxHeight = getMax(pokemonHeights);
    console.log("Maximum Height:", maxHeight);
};

main();