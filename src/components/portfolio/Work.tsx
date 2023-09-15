import { useState, useEffect } from 'react';
import { portfolioData, portfolioNav } from './Data';
import ChevronRIght from '@heroicons/react/24/outline/ChevronRightIcon';
import WrenchScrewdriverIcon from '@heroicons/react/24/outline/WrenchScrewdriverIcon';

type WorkItemProps = {
  id: number;
  title: string;
  image: string;
  construction?: boolean;
  link?: string;
};

export const WorkItemComponent = (props: WorkItemProps) => {
  return (
    <div className="portfolio__card" key={props.id}>
      <img src={props.image} alt="" className="portfolio__img" />
      <h3 className="portfolio__title">{props.title}</h3>
      {props.construction && (
        <div className="porfolio__button constr__section">
          <WrenchScrewdriverIcon style={{ width: '13px', height: '13px' }} />
          <i className="portfolio__item_constr">In the works!</i>
        </div>
      )}
      {!props.construction && (
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="portfolio__button"
        >
          View
          <ChevronRIght
            style={{ width: '13px', height: '13px' }}
            className="portfolio__button-icon"
          />
        </a>
      )}
    </div>
  );
};

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredPortfolio, setFilteredPortfolio] = useState(portfolioData);

  useEffect(() => {
    console.log(selectedCategory);
    if (selectedCategory === 'All') {
      setFilteredPortfolio(portfolioData);
    } else {
      const filtered = portfolioData.filter(
        (item) => item.category === selectedCategory
      );
      setFilteredPortfolio(filtered);
    }
  }, [selectedCategory]);

  return (
    <div>
      <div className="portfolio__filters">
        {portfolioNav.map((item) => {
          return (
            <span
              className={`${
                selectedCategory === item.name && 'active__category'
              } portfolio__item`}
              key={item.id}
              onClick={() => setSelectedCategory(item.name)}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="portfolio__container container grid">
        {filteredPortfolio.map((item) => {
          return (
            <WorkItemComponent
              id={item.id}
              title={item.title}
              image={item.image}
              construction={item.construction}
              link={item.link}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
