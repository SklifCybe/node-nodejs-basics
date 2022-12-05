const parseEnv = () => {
    const environmentVariables = Object.entries(process.env);
    const rssVariables = environmentVariables.filter((variable) => variable[0].startsWith('RSS_'));

    console.log(rssVariables.join('; ').replaceAll(',', '='));
};

parseEnv();