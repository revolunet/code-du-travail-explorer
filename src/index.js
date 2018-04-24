import React from "react";
import { render } from "react-dom";
import styled from "styled-components";

import Explorer from "./Explorer";
import parseThemes from "./parse-themes";
import rawThemes from "./themes.js";

import "./theme.css";

/*
Todo data :
  - annuaire interlocuteurs par service/theme/région : API ?
  - outils par thème
  - Elastic:
    - FAQ
    - Facettes

*/

// convert txt at runtime for editing tests
const themes = parseThemes(rawThemes);

const Title = styled.div`
  font-size: 2em;
  margin: 1em 0 10px;
  text-align: center;
`;

const Baseline = styled.div`
  font-size: 1.3em;
  margin: 0 0 1em 0;
  text-align: center;
`;

const AppContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const App = () => (
  <AppContainer>
    <Title>Code du travail numérique</Title>
    <Baseline>
      Trouvez les réponses à vos questions sur le droit du travail
    </Baseline>
    <Explorer themes={themes} />
  </AppContainer>
);

render(<App />, document.getElementById("root"));
