import React from "react";
import * as Feather from "react-feather";
import StarRating from "react-star-rating-component";
import styled from "styled-components";

import Delayed from "./Delayed";
import FeedbackForm from "./FeedbackForm";

const ButtonReset = styled.button`
  padding: 10px 20px;
  cursor: pointer;
`;
const Center = styled.div`
  text-align: center;
`;

const Block = styled.div`
  border: 1px solid #eee;
  padding: 10px;
  margin: 10px;
  font-size: 0.9em;
  li {
    margin: 10px 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
  svg {
    vertical-align: bottom;
  }
  .dv-star-rating {
    font-size: 1.5em;
    vertical-align: middle;
    margin-left: 10px;
  }
`;

const BlockTitle = styled.div`
  font-size: 1.2em;
  svg {
    vertical-align: bottom;
  }
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

const TwoCols = styled.div`
  width: 100%;
  > div {
    width: calc(50% - 20px);
    margin: 10px;
    display: inline-block;
    box-sizing: border-box;
  }
`;

// fake slow UI :)
let curDelay = 0;

const delay = start => {
  if (start) {
    curDelay = 0;
  }
  curDelay += Math.random() * 100;
  return curDelay;
};

const Result = ({ onResetClick }) => (
  <div>
    <Delayed delay={delay(true)}>
      <Block>
        <BlockTitle>
          <Feather.Book size="20" /> Code du Travail :{" "}
          <a href="#">article L. 1242-13</a>.
        </BlockTitle>
        Une convention ou un accord de branche étendu peut fixer le nombre
        maximal de <span className="highlight">renouvellements</span> possibles
        pour un contrat de travail à durée déterminée. Ce nombre ne peut avoir
        ni pour objet ni pour effet de pourvoir durablement un emploi lié à
        l'activité normale et permanente de l'entreprise.
        <br />
        <br />
        Les <span className="highlight">conditions de renouvellement</span> sont
        stipulées dans le contrat ou font l'objet d'un avenant soumis au salarié
        avant le terme initialement prévu. Ces dispositions ne sont pas
        applicables au contrat de travail à durée déterminée conclu en
        application de
        <a href="#"> l'article L. 1242-3</a>.
      </Block>
    </Delayed>
    <Delayed delay={delay()}>
      <Block>
        <BlockTitle>
          <Feather.AlertTriangle size="20" /> Textes applicables
        </BlockTitle>
        Attention, dans votre entreprise va s'appliquer également des
        conventions et accords de branche ou d'entreprise.
      </Block>
      <Block>
        <BlockTitle>
          <Feather.HelpCircle size="20" /> FAQ Code du travail
        </BlockTitle>
        <li>
          <a href="#">Question 1</a>
        </li>
        <li>
          <a href="#">Question 2</a>
        </li>
      </Block>
    </Delayed>

    <Delayed delay={delay()}>
      <Block>
        <BlockTitle>
          <Feather.FileText size="20" /> Fiches pratiques : 3 Résultats
        </BlockTitle>
        <li>
          ministere-du-travail.fr :{" "}
          <a href="#">
            fiche xxxx <Feather.ExternalLink size="12" />
          </a>
        </li>
        <li>
          service-public.fr :{" "}
          <a href="#">
            fiche yyyy <Feather.ExternalLink size="12" />
          </a>
        </li>
        <li>
          service-public.fr :{" "}
          <a href="#">
            fiche xxxx <Feather.ExternalLink size="12" />
          </a>
        </li>
      </Block>
    </Delayed>
    <Delayed delay={delay()}>
      <Block>
        <BlockTitle>
          <Feather.Paperclip size="20" /> Textes conventionnels : 2 Résultats
        </BlockTitle>
        <li>
          <a href="#">
            Votre convention collective <Feather.Save size="12" />
          </a>
        </li>
        <li>
          <a href="#">
            Trouver votre accord d'entreprise <Feather.Search size="12" />
          </a>
        </li>
      </Block>
    </Delayed>
    <Delayed delay={delay()}>
      <Block>
        <BlockTitle>
          <Feather.Plus size="20" /> Voir aussi
        </BlockTitle>
        <li>
          <a href="#">Liens vers thèmes similaires</a>
        </li>
      </Block>
    </Delayed>
    <Delayed delay={delay()}>
      <TwoCols>
        <Block>
          <BlockTitle>
            <Feather.Phone size="20" /> Vos interlocuteurs
          </BlockTitle>
          <li>
            <a href="#">Services de renseignement</a>
          </li>
          <li>
            <a href="#">Médecine du travail</a>
          </li>
        </Block>

        <Block>
          <BlockTitle>
            <Feather.Link size="20" /> Liens et outils
          </BlockTitle>
          <li>
            <a href="#">
              Lien 1 <Feather.ExternalLink size="12" />
            </a>
          </li>
          <li>
            <a href="#">
              Lien 2 <Feather.ExternalLink size="12" />
            </a>
          </li>
        </Block>
      </TwoCols>
    </Delayed>
    <Delayed delay={delay()}>
      <Block>
        <BlockTitle>
          <Feather.ThumbsUp size="20" /> Aidez-nous à nous améliorer
        </BlockTitle>
        Avons-nous répondu à votre question ?
        <StarRating name="stars" value={null} />
        <FeedbackForm />
      </Block>
    </Delayed>
    <Delayed delay={delay()}>
      <Block>
        <BlockTitle>
          <Feather.Trash2 size="20" /> Nouvelle demande
        </BlockTitle>
        <Center>
          <ButtonReset onClick={onResetClick}>
            Faire une nouvelle demande
          </ButtonReset>
        </Center>
      </Block>
    </Delayed>
  </div>
);

export default Result;
