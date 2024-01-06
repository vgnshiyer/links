import { LinkData } from '@/types/linkData';
import fs from 'fs';
import yaml from 'js-yaml';

const getLinks = (): LinkData[] => {
    const filename = 'public/links.yml';

    try {
        let fileContents = fs.readFileSync(filename, 'utf8');
        let data: any = yaml.load(fileContents);

        return data.links.map((link: any) => ({
            title: link.title,
            url: link.url,
            icon: link.icon
        }));
    } catch (e) {
        console.log(e);
    }

    return [];
};

export default getLinks;