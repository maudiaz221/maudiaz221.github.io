export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tech: string[];
}

// TODO: Update with your actual experience from CV
export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Software Engineer', // Update this
    company: 'Deep Dive AI', // Update this
    location: 'Mexico City, Mexico', // Update this
    period: 'June 2025 - Present', // Update this
    description: [
      'Designed ML pipeline on AWS (Lambda, Glue, Step Functions) to forecast weekly bottle consumption in restaurants, improving inventory accuracy and cutting costs.',
      'Implemented finite state machine in whatsapp for generating automatized quotes for insurance broker clients.',
      'Re-architected code infrastructure of fintech project using proper design patters and designed and deployed production architecture for fintech project.',
    ],
    tech: ['Lambda', 'Glue', 'Nixtla', 'Step Functions','ECS','Actions','FastAPI','Docker'],
  },
  {
    id: 2,
    title: 'Data Science Intern', // Update this
    company: 'Chubb', // Update this
    location: 'Mexico City, Mexico', // Update this
    period: 'Jan 2025 - June 2025', // Update this
    description: [
      'Created an automated ML framework with MLflow & AutoGluon for the Data & Analytics Team, greatly accelerating model lifecycle management.',
      'Optimised a market-price prediction model, lowering RMSE from 1800 to 1100 and delivering savings in correct pricing strategies.',
      'Made a cross-selling model to score existing clients and sell a new environment insurance product.',
    ],
    tech: ['Excel', 'Powerpoint', 'Autogluon', 'Sklearn','Pyspark','Pandas', 'SQL','MLflow'],
  },
  {
    id: 3,
    title: 'Data Scientist', // Update this
    company: 'Gaspre', // Update this
    location: 'Mexico City, Mexico', // Update this
    period: 'June 2024 - September 2024', // Update this
    description: [
      'Created a predictive sales model for competitors using AutoGluon, achieving a reduction in percentage error from 70% to 30%',
      'Implemented a traffic analysis process at gas stations with the Waze API, resulting in a 7% increase in customer numbers',
      'Optimized the sales forecasting process using time series models customized for each gas station, utilizing the Nixtla library, reducing the average percentage error from 13% to 8%',
    ],
    tech: ['Python', 'Pandas', 'R', 'Nixtla','Catboost','Autogluon'],
  },
  {
    id: 4,
    title: 'PHD Research Assistant', // Update this
    company: 'ITAM', // Update this
    location: 'Mexico City, Mexico', // Update this
    period: 'March 2024 - August 2024', // Update this
    description: [
      'Designed and developed ETL pipelines that integrate API data and web scraping, ensuring clean data for regression analysis',
      'Created a pipeline to collect board game data from BoardGameGeek, utilizing web scraping to improve data extraction speed',
      'Implemented a pipeline to gather data on Age of Empires tournaments via APIs and web scraping, aiming to analyze correlations between winners and non-winners',
    ],
    tech: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas','SQL'],
  },
];
