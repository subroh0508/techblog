import fs from 'fs';
import path from 'path';

const fsp = fs.promises;

const make = async () => {
  const rawJson = await fsp.readFile(path.resolve(__dirname, '../package.json'));
  const json = JSON.parse(rawJson);

  const output = {
    name: 'functions',
    description: 'Cloud Functions for Firebase',
    main: 'index.js',
    engines: { node: '12' },
    dependencies: json.dependencies.filter(d => d !== '@techblog/articles'),
    private: true,
  }
  
  await fsp.writeFile(path.resolve(__dirname, '../build/package.json'), JSON.stringify(output));
};

make()
  .then(() => console.log('completed!'))
  .catch(e => console.error(e));
