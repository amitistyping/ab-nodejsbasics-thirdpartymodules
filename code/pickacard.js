import axios from 'axios';
import chalk from 'chalk';

const API_URL = `https://deckofcardsapi.com/api/deck/new/draw/?count=1`;
const log = console.log;

const fetchDeckOfCardsData = async () => {
	try {
		const fetchDeckOfCardsResponse = await axios.get(API_URL);
		const fetchDeckOfCardsData = fetchDeckOfCardsResponse.data;
		return fetchDeckOfCardsData;
	} catch (err) {
		log(`Deck of cards API error: ${chalk.red(err.message)}`);
	}
};

const dispDeckOfCardsData = async () => {
	const deckOfCardsAPIData = await fetchDeckOfCardsData();
	const { cards } = deckOfCardsAPIData;
	cards.forEach((card) => {
		const { suit } = card;
		switch (suit) {
			case 'SPADES':
				log(chalk.greenBright(suit));
				break;
			case 'SPADES':
				log(chalk.cyanBright(suit));
				break;
			case 'DIAMONDS':
				log(chalk.redBright(suit));
				break;
			default:
				break;
		}
	});
};
export default async () => {
	await dispDeckOfCardsData();
};
