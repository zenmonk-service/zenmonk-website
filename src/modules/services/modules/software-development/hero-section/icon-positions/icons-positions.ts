export const degToRad = (deg: number) => (deg * Math.PI) / 180

export const randomBetween = (min: number, max: number) =>
  min + Math.random() * (max - min)

export const generateCircularPositions = (
  count: number,
  radius: number,
  startAngle: number = 0,
  clockwise: boolean = true
) => {
  const positions: { angle: number; radius: number }[] = []
  const angleStep = 360 / count

  for (let i = 0; i < count; i++) {
    positions.push({
      angle: (startAngle + (clockwise ? -i : i) * angleStep + 360) % 360,
      radius: radius,
    })
  }

  return positions
}


export const innerBaseIcons = [
  { src: '/services/software-development/assets/git.svg', name: 'Git' },
  { src: '/services/software-development/assets/mongo.svg', name: 'Mongo' },
  { src: '/services/software-development/assets/node-js-icon-454x512-nztofx17.svg', name: 'Node.js' },
  { src: '/services/software-development/assets/docker.svg', name: 'Docker' },
  { src: '/services/software-development/assets/rabbitmq-icon-484x512-s9lfaapn.svg', name: 'RabbitMQ' },
]

export const outerBaseIcons = [
  { src: '/services/software-development/assets/nextjs-icon-512x512-y563b8iq 1.svg', name: 'Next.js' },
  { src: '/services/software-development/assets/React-icon.svg 2.svg', name: 'React' },
  { src: '/services/software-development/assets/rest.svg', name: 'REST' },
  { src: '/services/software-development/assets/git.svg', name: 'Git' },
  { src: '/services/software-development/assets/docker.svg', name: 'Docker' },
  { src: '/services/software-development/assets/mongo.svg', name: 'Mongo' },
  { src: '/services/software-development/assets/node-js-icon-454x512-nztofx17.svg', name: 'Node' },
]
