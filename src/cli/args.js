const parseArgs = () => {
    const properties = process.argv
    .slice(2)
    .map((property, index, self) => {
        if (index % 2) {
            return [self[index - 1], property];
        }
    })
    .filter(Boolean)
    .map((propertyArray) => propertyArray.join(' is '))
    .join(', ')
    .trim()

    console.log(properties);
};

parseArgs();