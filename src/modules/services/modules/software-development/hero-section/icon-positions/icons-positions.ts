export const degToRad = (deg: number) => (deg * Math.PI) / 180

export const randomBetween = (min: number, max: number) =>
  min + Math.random() * (max - min)

export const generateRandomPositions = (
  count: number,
  minRadius: number,
  maxRadius: number,
  minAngleGap: number
) => {
  const positions: { angle: number; radius: number }[] = []
  let attempts = 0

  while (positions.length < count && attempts < 5000) {
    const angle = Math.random() * 360
    const radius =
      minRadius + Math.random() * (maxRadius - minRadius)

    const isAngleTooClose = positions.some(
      p => Math.abs(((p.angle - angle + 540) % 360) - 180) < minAngleGap
    )

    if (!isAngleTooClose) {
      positions.push({ angle, radius })
    }

    attempts++
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
