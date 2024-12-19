export const HeaderWithBio = () => {
  return (
    <div className="flex flex-row space-x-32 items-center font-sans text-white back ">
      <div className="space-y-8">
        <div className="text-6xl font-bold space-y-2">
          <p>Hi, I am</p>
          <p className="text-blue-600">Théo Sementa</p>
        </div>
        <p className="text-4xl font-semibold">iOS Developer</p>
        <p className="text-2xl font-medium">Je suis développeur iOS depuis + de 3 ans avec une passion pour le développement mobile et un grand intéret
          sur la partie interface utilisateur et expérience utilisateur. Je suis capable de travailler sur une application mobile de A à Z en Swift et SwiftUI
          mais aussi de développer des projets front-end avec React ou back-end avec NestJS. Actuellement je m'intéresse également à Kotlin Multiplatform et Jetpack Compose.</p>
      </div>

      <div className='flex-shrink-0'>
        <img
          src="/assets/images/theosementa.jpg"
          alt="theo's img"
          width={380}
          height={380}
          className="rounded-full border-8 border-blue-600 shadow-lg"
        />
      </div>
    </div>
  )
}