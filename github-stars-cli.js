#!/usr/bin/env node

const axios = require("axios");
const { Command } = require("commander");
const program = new Command();

const GITHUB_API_URL = "https://api.github.com/search/repositories";

program
  .version("1.0.0")
  .description("Get the most starred GitHub projects within a date range")
  .option("-s, --start <date>", "Start date in YYYY-MM-DD format")
  .option("-e, --end <date>", "End date in YYYY-MM-DD format")
  .parse(process.argv);

const { start, end } = program.opts();

if (!start || !end) {
  console.error("Please provide both start and end dates.");
  process.exit(1);
}

const fetchMostStarredRepos = async (startDate, endDate) => {
  try {
    const response = await axios.get(GITHUB_API_URL, {
      params: {
        q: `created:${startDate}..${endDate}`,
        sort: "stars",
        order: "desc",
      },
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    const repos = response.data.items;
    repos.forEach((repo, index) => {
      console.log(
        `${index + 1}. ${repo.full_name} - ⭐ ${repo.stargazers_count}`
      );
    });
  } catch (error) {
    console.error("Error fetching data from GitHub API:", error.message);
  }
};

fetchMostStarredRepos(start, end);
