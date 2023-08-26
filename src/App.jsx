import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import BodyImg from "./assets/bg.svg";
import Section from "./components/Section";
import SearchBox from "./components/SearchBox";
import dexerInstancae from "./api/dexerInstancae";
import tokenSvg from "./assets/token.svg";

function App() {
  const [search, setSearch] = useState("");
  return (
    <body
      className={`select-none bg-cover bg-darkGrey bg-opacity-40 bg-blend-multiply min-h-screen bg-center flex flex-col md:flex-row gap-x-7  text-white font-sans`}
      style={{ backgroundImage: `url(${BodyImg})` }}
    >
      <Navbar />
      <div className="flex flex-col py-7 px-2">
        {/* search box and connect button */}
        <SearchBox setSearch={setSearch} />
        {/* search results */}
        <div className="flex flex-wrap"></div>

        {/* Search Result Section */}

        {search && <SearchAddressSection />}

        {/* Pair Address */}
        <PairAddressSection />
        {/* Token Address */}
        <TokenAddressSection />
      </div>
    </body>
  );
}

function SearchAddressSection({ search }) {
  const [list, setList] = useState([]);
  useEffect(() => {
    dexerInstancae.get(`latest/dex/search/?q=${search}`).then((res) => {
      // console.log(res.data.pairs)
      let l = res.data.pairs.map((v) => {
        // console.log(v)

        return {
          title: v.baseToken.name,
          params: [
            { name: "Token Address", value: v.baseToken.address },
            { name: "Pair Address", value: v.pairAddress },
            { name: "Symbol", value: v.baseToken.symbol },
          ],
          svg: tokenSvg,
        };
      });
      l = l.slice(0, 10);
      setList([...l]);
    });
  }, [search]);

  return (
    <>
      <Section title={"Search Results"} list={list} />
    </>
  );
}

function PairAddressSection() {
  const [list, setList] = useState([]);
  useEffect(() => {
    dexerInstancae
      .get("latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8")
      .then((res) => {
        // console.log(res.data.pairs)
        let l = res.data.pairs.map((v) => {
          // console.log(v)

          return {
            title: v.baseToken.name,
            params: [
              { name: "Token Address", value: v.baseToken.address },
              { name: "Pair Address", value: v.pairAddress },
              { name: "Symbol", value: v.baseToken.symbol },
            ],

            svg: tokenSvg,
          };
        });
        l = l.slice(0, 10);
        setList([...l]);
      });
  }, []);

  return (
    <>
      <Section title={"Pair Address"} list={list} />
    </>
  );
}

function TokenAddressSection() {
  const [list, setList] = useState([]);
  useEffect(() => {
    dexerInstancae
      .get(
        "latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
      )
      .then((res) => {
        // console.log(res.data.pairs)
        let l = res.data.pairs.map((v) => {
          // console.log(v)

          return {
            title: v.baseToken.name,
            params: [
              { name: "Token Address", value: v.baseToken.address },
              { name: "Pair Address", value: v.pairAddress },
              { name: "Symbol", value: v.baseToken.symbol },
            ],

            svg: tokenSvg,
          };
        });
        l = l.slice(0, 10);
        setList([...l]);
      });
  }, []);

  return (
    <>
      <Section title={"Token Address"} list={list} />
    </>
  );
}

export default App;
