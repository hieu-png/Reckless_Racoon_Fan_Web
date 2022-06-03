import axios from 'axios';


export const getNumberOfDiscordMember = (server) => axios.get(`https://discord.com/api/v9/invites/${server}?with_counts=true&with_expiration=true`);

export const getTwitterInfo = (twitterHandle) => axios.get(`https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=${twitterHandle}`);

export const getWLStatus = () => axios.get(`https://mercury.blocksmithlabs.io/api/projects/all`)