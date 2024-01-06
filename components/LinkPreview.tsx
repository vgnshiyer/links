import { LinkData } from '@/types/linkData'
import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'
import { 
  FaLinkedin, 
  FaBlog, 
  FaGithub, 
  FaTwitter, 
  FaCode, 
  FaEnvelope, 
  FaFileAlt 
} from 'react-icons/fa'

const LinkPreview = (props: LinkData) => {

  const icons: { [key: string]: IconType } = {
    FaLinkedin,
    FaBlog,
    FaGithub,
    FaTwitter,
    FaCode,
    FaFileAlt,
    FaEnvelope,
  };

  const Icon = icons[props.icon];
  return (
    <div className="w-80 rounded-lg shadow-md p-5 text-xl font-bold text-light hover:text-contrast-dark border-2 bg-semi-dark  border-tertiary-dark hover:border-white flex justify-center items-center hover:shadow-inner">
        <Icon className="mr-2"/>
        <Link href={props.url}>
          {props.title}
        </Link>
    </div>
  )
}

export default LinkPreview