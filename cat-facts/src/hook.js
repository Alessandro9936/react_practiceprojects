const useCats = (url) => {
  const [catFacts, setCatFacts] = useState([]);

  const getCatFacts = async () => {
    const result = await fetch(`https://meowfacts.herokuapp.com?count=10`);
    const { data } = await result.json();

    setCatFacts(data);
  };
};
