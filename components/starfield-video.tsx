"use client"

export default function StarfieldVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video de fondo con efecto starfield */}
      <iframe
        src="https://www.youtube.com/embed/UNOmaFs6KaY?autoplay=1&mute=1&loop=1&playlist=UNOmaFs6KaY&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&start=0"
        className="absolute pointer-events-none opacity-75"
        style={{
          top: '50%',
          left: '50%',
          width: 'max(100vw, 177.78vh)', // Mantiene aspect ratio 16:9, cubre toda la pantalla
          height: 'max(100vh, 56.25vw)', // Aspect ratio inverso para altura
          transform: 'translate(-50%, -50%)', // Centra el video
          objectFit: 'cover'
        }}
        allow="autoplay; encrypted-media"
        allowFullScreen={false}
        frameBorder="0"
        title="Starfield Background"
      />

      {/* Overlay para oscurecer si es necesario */}
      <div
        className="absolute inset-0 bg-black/20 pointer-events-none"
        style={{ mixBlendMode: 'multiply' }}
      />
    </div>
  )
}