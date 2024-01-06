import getLinks from '@/helpers/getLinks';
import LinkPreview from '../components/LinkPreview';
import { LinkData } from '@/types/linkData';

export default function Home() {

  const linkPreviews = getLinks()
    .map((link: LinkData) => (
      <LinkPreview
        key={link.title}
        title={link.title}
        url={link.url}
        icon={link.icon}
      />
    ));

  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        {linkPreviews}

      </div>
      <p className="mt-6 text-tertiary-dark text-lg mb-12">Don't search me on Instagram.</p>
    </>
  )
}
