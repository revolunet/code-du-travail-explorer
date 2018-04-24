import React from "react";
import styled from "styled-components";
import BreadCrumbs from "./BreadCrumbs";
import ThemeSelector from "./ThemeSelector";
import Result from "./Result";

const ExplorerContainer = styled.div`
  padding: 20px;
`;

const IntroContainer = styled.div`
  margin: 40px 20px;
  font-size: 1.3em;
  color: #888;
  text-align: center;
`;

const Intro = () => (
  <IntroContainer>
    Choisissez un thème pour explorer les ressources du code du travail
    numérique
  </IntroContainer>
);

const Teaser = () => (
  <IntroContainer>
    todo : Afficher les contenus les plus demandés/utiles de ces thèmes ?
  </IntroContainer>
);

class Explorer extends React.Component {
  state = {
    selection: []
  };
  onResetClick = node => {
    this.setState({ selection: [] });
  };
  onSelectNode = node => {
    this.setState(curState => ({
      selection: [...curState.selection, node]
    }));
  };
  onBreadCrumbClick = (item, idx) => {
    this.setState(curState => ({
      selection: curState.selection.slice(0, idx)
    }));
  };
  getCurrentTheme = () => {
    let node = this.props.themes;
    this.state.selection.forEach(theme => {
      const subNode = node.children.find(n => n.title === theme.title);
      if (subNode) {
        node = subNode;
      }
    });
    return node;
  };
  render() {
    const breadcrumbs = this.state.selection;
    const currentTheme = this.getCurrentTheme();
    const isStarted = currentTheme.title !== "root";
    const isLeaf = currentTheme.children.length === 0;
    return (
      <ExplorerContainer>
        <BreadCrumbs
          style={{ marginBottom: 10, marginLeft: 10 }}
          entries={breadcrumbs}
          onClick={this.onBreadCrumbClick}
        />
        <ThemeSelector node={currentTheme} onSelect={this.onSelectNode} />
        {isLeaf && <Result onResetClick={this.onResetClick} />}
        {!isStarted && <Intro />}
        {isStarted && !isLeaf && <Teaser />}
      </ExplorerContainer>
    );
  }
}

export default Explorer;
