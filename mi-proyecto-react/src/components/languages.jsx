import { useEffect } from 'react'
import { startCarousel, stopCarousel } from '../utils/Carousel'

const technologies = [
  {alt: 'html5', src: 'https://img.icons8.com/color/48/000000/html-5.png'},
  {alt: 'css3', src: 'https://img.icons8.com/color/48/000000/css3.png'},
  {alt: 'javascript', src: 'https://img.icons8.com/color/48/000000/javascript.png'},
  {alt: 'react', src: 'https://img.icons8.com/color/48/000000/react-native.png'},
  {alt: 'node-js', src: 'https://img.icons8.com/color/48/000000/nodejs.png'},
  {alt: 'git', src: 'https://img.icons8.com/color/48/000000/git.png'},
  {alt: 'github', src: 'https://img.icons8.com/ios-glyphs/48/000000/github.png'},
  {alt: 'sass', src: 'https://img.icons8.com/color/48/000000/sass.png'},
  {alt: 'vite', src: 'https://img.icons8.com/color/48/000000/vite.png'},
  {alt: 'express', src: 'https://img.icons8.com/color/48/000000/express-js.png'},
  {alt: 'python', src: 'https://img.icons8.com/color/48/000000/python.png'},
  {alt: 'postgresql', src: 'https://img.icons8.com/?size=100&id=38561&format=png&color=000000'},
  {alt: 'mysql', src: 'https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000'},
]

function Languages() {
  useEffect(() => {
    startCarousel('.logos', 1.0)
    return () => stopCarousel()
  }, [])

  const renderLogos = () => {
    const duplicated = [...technologies, ...technologies]
    return duplicated.map((logo, index) => (
      <img key={`${logo.alt}-${index}`} className="logo" src={logo.src} alt={logo.alt} />
    ))
  }

  return (
    <li className="tecnologies">
      <h2>Tecnologies</h2>
      <div className="logos">
        <div className="logos__track">{renderLogos()}</div>
      </div>
    </li>
  )
}

export default Languages
